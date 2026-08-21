import { NextResponse } from "next/server";

const materials = ["pearl", "abalone", "opal", "orchid", "lace", "gold"] as const;
type Material = (typeof materials)[number];

const materialDirections: Record<Material, string> = {
  pearl: "milky pearl diffusion, nacre rings, and quiet completion",
  abalone: "blue-green abalone depth with mineral strata and gold seam",
  opal: "listening opal glass with pale aqua and rose diffraction",
  orchid: "a deep Auric Orchid bloom held in a black lacquer field",
  lace: "an ivory lace veil with tactile woven translucency",
  gold: "antique gold cloisonné inlay against black lacquer",
};

function forgeUrl(path: string) {
  const base = process.env.BUILT_IN_FORGE_API_URL;
  if (!base) throw new Error("The image service is not configured.");
  return new URL(path, base.endsWith("/") ? base : `${base}/`).toString();
}

function headers() {
  const key = process.env.BUILT_IN_FORGE_API_KEY;
  if (!key) throw new Error("The image service is not configured.");
  return { accept: "application/json", "content-type": "application/json", "connect-protocol-version": "1", authorization: `Bearer ${key}` };
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as { material?: Material; intensity?: number };
    const material = payload.material;
    const intensity = Number(payload.intensity);
    if (!material || !materials.includes(material) || !Number.isInteger(intensity) || intensity < 24 || intensity > 92) {
      return NextResponse.json({ error: "Choose a valid material and intensity." }, { status: 400 });
    }

    const prompt = `Create a singular luxury generative-art specimen for NACRE//ORCHID. Dominant behavior: ${materialDirections[material]}. Iridescence intensity: ${intensity} out of 100. Editorial macro still life, contemporary reliquary, dramatic low-key museum lighting, black lacquer negative space, thin antique-gold inlay, physical-material realism. No words, no typography, no people, no UI, no watermark. Landscape 4:3 composition.`;
    const generation = await fetch(forgeUrl("images.v1.ImageService/GenerateImage"), { method: "POST", headers: headers(), body: JSON.stringify({ prompt, original_images: [], model: "MODEL_GPT_IMAGE_2", quality: "medium" }) });
    if (!generation.ok) throw new Error(`Image generation failed (${generation.status}).`);
    const generated = await generation.json() as { image?: { b64Json?: string; mimeType?: string } };
    if (!generated.image?.b64Json || !generated.image.mimeType) throw new Error("The image service returned no image data.");

    const key = `generated/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.png`;
    const presign = await fetch(`${forgeUrl("v1/storage/presign/put")}?path=${encodeURIComponent(key)}`, { headers: { authorization: headers().authorization } });
    if (!presign.ok) throw new Error("Could not prepare artifact storage.");
    const { url: uploadUrl } = await presign.json() as { url?: string };
    if (!uploadUrl) throw new Error("Artifact storage returned no upload location.");
    const upload = await fetch(uploadUrl, { method: "PUT", headers: { "content-type": generated.image.mimeType }, body: Buffer.from(generated.image.b64Json, "base64") });
    if (!upload.ok) throw new Error("Could not store the generated artifact.");

    return NextResponse.json({ id: crypto.randomUUID(), title: `${material[0].toUpperCase()}${material.slice(1)} study`, material, intensity, prompt, imageUrl: `/manus-storage/${key}`, createdAt: Date.now() });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The studio could not generate an artifact.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
