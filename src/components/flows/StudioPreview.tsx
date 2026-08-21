"use client";

import { useState } from "react";
import { PearlButton } from "../primitives/PearlButton";
import { AbaloneTile } from "../surfaces/AbaloneTile";

const choices = ["abalone", "opal", "orchid"] as const;
type Material = (typeof choices)[number];
type GeneratedArtifact = { id: string; title: string; material: Material; intensity: number; prompt: string; imageUrl: string; createdAt: number };
const STORAGE_KEY = "nacre-orchid.saved-artifacts.v1";

export function StudioPreview() {
  const [material, setMaterial] = useState<Material>("abalone");
  const [intensity, setIntensity] = useState(62);
  const [artifact, setArtifact] = useState<GeneratedArtifact | null>(null);
  const [status, setStatus] = useState<"idle" | "generating" | "error">("idle");
  const [message, setMessage] = useState("");

  async function generate() {
    setStatus("generating"); setMessage("");
    try {
      const response = await fetch("/api/studio/generate", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ material, intensity }) });
      const result = await response.json() as GeneratedArtifact & { error?: string };
      if (!response.ok || result.error) throw new Error(result.error || "Generation failed.");
      setArtifact(result);
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]") as GeneratedArtifact[];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([result, ...saved.filter((item) => item.id !== result.id)].slice(0, 30)));
      window.dispatchEvent(new Event("nacre-orchid:saved-artifacts"));
      setMessage("Generated and saved in this browser’s Pearl Archive."); setStatus("idle");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Generation failed."); setStatus("error"); }
  }

  return <section id="studio" className="studio-preview" aria-label="Live material studio"><div className="studio-preview__controls"><p className="eyebrow">03 / Live studio</p><h2 className="studio-preview__heading">Compose a <i>material response.</i></h2><p className="studio-preview__intro">Generate an original physical-material study, then retrieve it later from this browser’s local Pearl Archive.</p><div className="studio-material-choices" aria-label="Active material">{choices.map((choice) => <button key={choice} type="button" className={material === choice ? "is-selected" : ""} onClick={() => setMaterial(choice)}>{choice}<span /></button>)}</div><label className="studio-slider"><span>Iridescence <b>{intensity}%</b></span><input type="range" min={24} max={92} value={intensity} onChange={(event) => setIntensity(Number(event.target.value))} /></label><PearlButton variant="primary" disabled={status === "generating"} onClick={generate}>{status === "generating" ? "Composing…" : "Generate Variant"}</PearlButton><p className={`studio-status ${status === "error" ? "is-error" : ""}`} aria-live="polite">{message}</p></div><AbaloneTile depth="deep" className="studio-preview__canvas">{artifact ? <img src={artifact.imageUrl} alt={artifact.title} className="studio-preview__generated-image" /> : <div className="studio-preview__orb" aria-hidden="true" />}</AbaloneTile><div className="studio-preview__recipe"><p className="eyebrow">Prompt recipe</p><pre>{`base: black-lacquer\ndepth: ${material}\nlight: opal-diffraction/${intensity}\nedge: gold-cloisonné/1px\nmotion: bloom/240ms`}</pre></div></section>;
}
