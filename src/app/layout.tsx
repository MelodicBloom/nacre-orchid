import type { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/tokens.css';
import '../styles/surfaces.css';
import '../styles/motion.css';
import '../styles/accessibility.css';
import { ShellRoot } from '../components/shell/ShellRoot';

export const metadata: Metadata = {
  title: 'NACRE//ORCHID',
  description: 'Interfaces that bloom when touched.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ShellRoot>{children}</ShellRoot>
      </body>
    </html>
  );
}
