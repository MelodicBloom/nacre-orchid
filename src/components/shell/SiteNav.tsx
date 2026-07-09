import Link from 'next/link';

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link href="/" className="nav-wordmark">NACRE//ORCHID</Link>
      <div className="nav-links">
        <Link href="/gallery">Gallery</Link>
        <Link href="#studio">Studio</Link>
      </div>
    </nav>
  );
}
