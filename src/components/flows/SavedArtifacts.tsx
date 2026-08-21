"use client";

import { useEffect, useState } from "react";

type SavedArtifact = { id: string; title: string; material: string; intensity: number; imageUrl: string; createdAt: number };
const STORAGE_KEY = "nacre-orchid.saved-artifacts.v1";

export function SavedArtifacts() {
  const [artifacts, setArtifacts] = useState<SavedArtifact[]>([]);
  useEffect(() => { const refresh = () => { try { setArtifacts(JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]")); } catch { setArtifacts([]); } }; refresh(); window.addEventListener("nacre-orchid:saved-artifacts", refresh); window.addEventListener("storage", refresh); return () => { window.removeEventListener("nacre-orchid:saved-artifacts", refresh); window.removeEventListener("storage", refresh); }; }, []);
  return <section id="saved" className="saved-artifacts"><div className="saved-artifacts__heading"><div><p className="eyebrow">04 / Pearl archive</p><h2>What you <i>kept.</i></h2></div><p>Generated variants are stored in this browser only, so they remain available until you clear local browser data.</p></div>{artifacts.length === 0 ? <p className="saved-artifacts__empty">No saved variants yet. Generate a material study above to begin your archive.</p> : <div className="saved-artifacts__grid">{artifacts.map((artifact) => <article key={artifact.id} className="saved-artifact"><img src={artifact.imageUrl} alt={artifact.title} /><div><span>{artifact.material} · {artifact.intensity}%</span><strong>{artifact.title}</strong><small>{new Date(artifact.createdAt).toLocaleDateString()}</small></div></article>)}</div>}</section>;
}
