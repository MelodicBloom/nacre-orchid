export type Material = 'pearl' | 'orchid' | 'lace' | 'gold' | 'abalone' | 'opal' | 'labradorite';

export interface Artifact {
  id: string;
  title: string;
  meaning: string;
  story: string;
  materials: Material[];
  scores: { label: string; value: number }[];
  promptRecipe: string;
}

export const artifacts: Artifact[] = [
  {
    id: 'a001',
    title: 'Opal Threshold',
    meaning: 'The moment of listening before reply.',
    story: 'A surface that shifts with each glance — opal captures the act of attention itself, a mineral mirror for intelligence in waiting.',
    materials: ['opal', 'pearl'],
    scores: [
      { label: 'Resonance', value: 88 },
      { label: 'Depth', value: 72 },
      { label: 'Motion', value: 65 },
    ],
    promptRecipe: 'opal shimmer · pearl memory · soft bloom · dark lacquer field',
  },
  {
    id: 'a002',
    title: 'Gold Cloisonné Gate',
    meaning: 'Syntax as boundary. Selection as ceremony.',
    story: 'Gold does not decorate — it defines. Every border is a commitment, every inlay a word held in place.',
    materials: ['gold', 'abalone'],
    scores: [
      { label: 'Precision', value: 95 },
      { label: 'Weight', value: 80 },
      { label: 'Motion', value: 40 },
    ],
    promptRecipe: 'gold cloisonné border · abalone field · dark lacquer · inlay press',
  },
  {
    id: 'a003',
    title: 'Lace Veil Fragment',
    meaning: 'What is shown before the reveal.',
    story: 'Lace is the modal surface — it promises without disclosing, holds light without holding form.',
    materials: ['lace', 'pearl'],
    scores: [
      { label: 'Transparency', value: 90 },
      { label: 'Tension', value: 55 },
      { label: 'Warmth', value: 70 },
    ],
    promptRecipe: 'lace veil · pearl ground · soft focus · ivory light',
  },
  {
    id: 'a004',
    title: 'Orchid Bloom Signal',
    meaning: 'Creation. Transformation. First light.',
    story: 'The orchid is not decoration — it is the moment a new thing understands itself. Rare. Specific. Impossible to replicate.',
    materials: ['orchid', 'opal'],
    scores: [
      { label: 'Vitality', value: 92 },
      { label: 'Novelty', value: 85 },
      { label: 'Motion', value: 78 },
    ],
    promptRecipe: 'orchid bloom · opal intelligence · dark field · soft unfurl',
  },
  {
    id: 'a005',
    title: 'Abalone Depth Map',
    meaning: 'Active surface. Gallery tile. The artifact in its context.',
    story: 'Abalone holds more colors than it shows. It is the tile that carries the artifact — grounding spectacle in material truth.',
    materials: ['abalone', 'labradorite'],
    scores: [
      { label: 'Depth', value: 94 },
      { label: 'Iridescence', value: 88 },
      { label: 'Gravity', value: 76 },
    ],
    promptRecipe: 'abalone surface · labradorite field · deep iridescence · mineral grain',
  },
  {
    id: 'a006',
    title: 'Pearl Save State',
    meaning: 'Memory. Completion. The thing held.',
    story: 'Pearl is what persists. Every save state is a pearl — layered, slow-formed, precious because it endured.',
    materials: ['pearl', 'gold'],
    scores: [
      { label: 'Permanence', value: 96 },
      { label: 'Warmth', value: 82 },
      { label: 'Motion', value: 30 },
    ],
    promptRecipe: 'pearl lustre · gold edge · soft settle · completion glow',
  },
];
