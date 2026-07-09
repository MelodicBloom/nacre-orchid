'use client';
import { useState } from 'react';
import { artifacts } from '../../lib/artifacts';
import { NacreCard } from '../surfaces/NacreCard';
import { TokenChip } from '../primitives/TokenChip';
import { LaceModal } from '../surfaces/LaceModal';
import type { Artifact } from '../../lib/artifacts';

const FILTERS = ['All', 'Pearl', 'Abalone', 'Opal', 'Orchid', 'Lace', 'Gold'] as const;

export function ArtifactGrid() {
  const [active, setActive] = useState<string>('All');
  const [selected, setSelected] = useState<Artifact | null>(null);

  const filtered = active === 'All'
    ? artifacts
    : artifacts.filter((a) =>
        a.materials.includes(active.toLowerCase() as Artifact['materials'][number])
      );

  return (
    <section className="artifact-grid" aria-label="Artifact gallery">
      <div className="artifact-grid__filters" role="group" aria-label="Filter by material">
        {FILTERS.map((f) => (
          <TokenChip
            key={f}
            label={f}
            active={active === f}
            onClick={() => setActive(f)}
          />
        ))}
      </div>
      <div className="artifact-grid__tiles">
        {filtered.map((artifact) => (
          <NacreCard key={artifact.id} artifact={artifact} onClick={() => setSelected(artifact)} />
        ))}
      </div>
      <LaceModal artifact={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
