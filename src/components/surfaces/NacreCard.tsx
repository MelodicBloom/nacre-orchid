import type { Artifact } from '../../lib/artifacts';

interface NacreCardProps {
  artifact: Artifact;
  onClick?: () => void;
}

export function NacreCard({ artifact, onClick }: NacreCardProps) {
  return (
    <article
      className="nacre-card"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={`Open ${artifact.title}`}
    >
      <div className="nacre-card__surface" aria-hidden="true" />
      <div className="nacre-card__body">
        <h3 className="nacre-card__title">{artifact.title}</h3>
        <p className="nacre-card__meaning">{artifact.meaning}</p>
        <div className="nacre-card__tags">
          {artifact.materials.map((m) => (
            <span key={m} className={`material-tag material-tag--${m}`}>{m}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
