import Link from 'next/link';
import { PearlButton } from '../primitives/PearlButton';

export function ReliquaryHero() {
  return (
    <section className="reliquary-hero" aria-label="Hero">
      <img className="reliquary-hero__image" src="/manus-storage/nacre-orchid-hero_495bfc74.jpg" alt="Iridescent abalone sculpture with an orchid glass form" />
      <div className="reliquary-hero__veil" />
      <div className="reliquary-hero__orb" aria-hidden="true" />
      <div className="reliquary-hero__content">
        <p className="eyebrow">Visual intelligence / material study</p><h1 className="reliquary-hero__title">Interfaces that <i>bloom</i> when touched.</h1>
        <p className="reliquary-hero__sub">
          NACRE//ORCHID is a visual intelligence platform where pearl, orchid, lace, abalone, opal,
          labradorite, and gold cloisonné become product architecture, motion grammar, and symbolic UX.
        </p>
        <div className="reliquary-hero__ctas">
          <a href="#studio"><PearlButton variant="primary">Open the Studio</PearlButton></a>
          <Link href="/gallery">
            <PearlButton variant="secondary">Explore the Gallery</PearlButton>
          </Link>
        </div>
        <div className="reliquary-hero__status" aria-label="Platform status">
          <span>06 seed artifacts</span><span>04 material families</span><span>12 semantic rituals</span><span>01 open studio</span>
        </div>
      </div>
    </section>
  );
}
