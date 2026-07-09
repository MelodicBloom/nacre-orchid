import { PearlButton } from '../primitives/PearlButton';
import Link from 'next/link';

export function ReliquaryHero() {
  return (
    <section className="reliquary-hero" aria-label="Hero">
      <div className="reliquary-hero__orb" aria-hidden="true" />
      <div className="reliquary-hero__content">
        <h1 className="reliquary-hero__title">Interfaces that bloom when touched.</h1>
        <p className="reliquary-hero__sub">
          NACRE//ORCHID is a visual intelligence platform where pearl, orchid, lace, abalone, opal,
          labradorite, and gold cloisonné become product architecture, motion grammar, and symbolic UX.
        </p>
        <div className="reliquary-hero__ctas">
          <PearlButton variant="primary">Open the Studio</PearlButton>
          <Link href="/gallery">
            <PearlButton variant="secondary">Explore the Gallery</PearlButton>
          </Link>
        </div>
        <div className="reliquary-hero__status" aria-label="Platform status">
          <span>48 artifacts</span>
          <span>12 creators</span>
          <span>7 collections</span>
          <span>3 rituals</span>
        </div>
      </div>
    </section>
  );
}
