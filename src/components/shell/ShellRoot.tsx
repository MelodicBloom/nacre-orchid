'use client';
import { CursorLight } from './CursorLight';
import { SiteNav } from './SiteNav';

export function ShellRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell-root">
      <CursorLight />
      <SiteNav />
      <div className="shell-content">{children}</div>
    </div>
  );
}
