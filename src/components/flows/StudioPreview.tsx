import { PearlButton } from '../primitives/PearlButton';
import { AbaloneTile } from '../surfaces/AbaloneTile';

export function StudioPreview() {
  return (
    <section id="studio" className="studio-preview" aria-label="Studio preview">
      <div className="studio-preview__controls">
        <h2 className="studio-preview__heading">Studio</h2>
        <div className="studio-preview__sliders" aria-label="Material controls">
          {['Iridescence', 'Depth', 'Bloom', 'Lace'].map((ctrl) => (
            <label key={ctrl} className="studio-slider">
              <span>{ctrl}</span>
              <input type="range" min={0} max={100} defaultValue={50} aria-label={ctrl} />
            </label>
          ))}
        </div>
        <PearlButton variant="primary">Generate Variant</PearlButton>
      </div>
      <AbaloneTile depth="deep" className="studio-preview__canvas">
        <div className="studio-preview__orb" aria-hidden="true" />
      </AbaloneTile>
      <div className="studio-preview__recipe">
        <h3>Prompt Recipe</h3>
        <pre className="studio-preview__prompt">nacre surface · orchid bloom · gold inlay · lace veil · opal shimmer</pre>
      </div>
    </section>
  );
}
