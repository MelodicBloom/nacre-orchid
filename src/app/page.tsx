import { ReliquaryHero } from '../components/flows/ReliquaryHero';
import { StudioPreview } from '../components/flows/StudioPreview';
import { SavedArtifacts } from '../components/flows/SavedArtifacts';

export default function HomePage() {
  return (
    <main>
      <ReliquaryHero />
      <StudioPreview />
      <SavedArtifacts />
    </main>
  );
}
