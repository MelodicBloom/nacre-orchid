# NACRE//ORCHID — Build Context + Next Steps

## Current canonical repo

```txt
MelodicBloom/nacre-orchid
```

This repo is the product/site/platform home for NACRE//ORCHID.

AETHER remains separate:

```txt
MelodicBloom/aether = future shader / effects / iridescent surface library
MelodicBloom/nacre-orchid = product / platform / site / visual system
```

## Project thesis

NACRE//ORCHID is a luxury generative-art and design-system platform where pearl, orchid, lace, abalone, opal, labradorite, and gold cloisonné become product architecture, motion grammar, symbolic UX, and responsive storytelling.

## Governing law

**Make the site feel like opal, but architect it like a newsroom.**

## Build philosophy

The first milestone is not the entire platform. It is a focused vertical slice that proves the system with a small, coherent, accessible, responsive build.

Do not start with auth, database, marketplace, full community, video, audio, or heavy WebGL. Those come after the first slice is coherent and testable.

## Visual system laws

- No ornament without hierarchy.
- No iridescence without material logic.
- No motion without semantic purpose.
- No WebGL dependency for core usability.
- No glow that weakens readability.
- No hover-only UX on mobile.
- No full dream build before the vertical slice is stable.

## Semantic assignments

| Element | Meaning | UI assignment |
|---|---|---|
| Pearl | saved, memory, completion, focus | save states, focus nodes, progress, completion |
| Orchid | creation, bloom, transformation | generate CTA, feature badge, reveal motion |
| Lace | veil, preview, hidden layer, modal | modal, tooltip, overlay, loading mask |
| Gold | syntax, boundary, premium state, selection | borders, focus rings, nav lines, selected states |
| Abalone | artifact depth, gallery tile, active surface | cards, hero orb, shader surfaces |
| Opal | responsive intelligence, hover, listening, success | cursor light, hover shimmer, success glow |
| Labradorite | dark mineral field, background depth | dark panels, background atmosphere |
| Black lacquer | stage, contrast, atmosphere | page background, negative space, high contrast |

## Motion assignments

| Motion | Meaning | Use |
|---|---|---|
| Bloom | new understanding | reveal, expansion, onboarding |
| Veil | partial concealment | modal, loading, preview |
| Inlay | tactile commitment | button press, save, toggle |
| Orbit | relationship | related artifacts, loaders |
| Ripple | cause and propagation | click, touch, audio feedback |
| Tessellate | distributed pattern intelligence | gallery rearrangement |
| Settle | confidence | success, saved, completion |

## First production vertical slice

Build only:

1. Home page
2. Gallery page
3. Artifact detail modal
4. Studio preview section
5. Shared navigation/layout
6. Design-token CSS system
7. Seed artifact data
8. Responsive layouts
9. Reduced-motion and reduced-transparency fallbacks

## Required components

```txt
ShellRoot
CursorLight
SiteNav
PearlButton
TokenChip
SemanticMeter
NacreCard
AbaloneTile
LaceModal
ReliquaryHero
ArtifactGrid
StudioPreview
```

## Target file structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    gallery/page.tsx

  components/
    shell/
      ShellRoot.tsx
      CursorLight.tsx
      SiteNav.tsx

    primitives/
      PearlButton.tsx
      TokenChip.tsx
      SemanticMeter.tsx

    surfaces/
      NacreCard.tsx
      AbaloneTile.tsx
      LaceModal.tsx

    flows/
      ReliquaryHero.tsx
      ArtifactGrid.tsx
      StudioPreview.tsx

  lib/
    artifacts.ts
    taxonomy.ts
    tokens.ts
    motion.ts

  styles/
    globals.css
    tokens.css
    surfaces.css
    motion.css
    accessibility.css
```

## Screen requirements

### Home

- Title: `Interfaces that bloom when touched.`
- Subcopy explains NACRE//ORCHID as a visual intelligence platform.
- Primary CTA: `Open the Studio`
- Secondary CTA: `Explore the Gallery`
- Hero visual uses iridescent shell/orb/card composition.
- Proof/status bar includes artifacts, creators, collections, rituals.

### Gallery

- Artifact grid.
- Filter chips: All, Pearl, Abalone, Opal, Orchid, Lace, Gold.
- Each tile shows visual surface/image, title, material tags, short meaning.
- Artifact detail modal opens by mouse and keyboard.

### Artifact detail modal

- Image or visual preview.
- Title.
- Story section.
- Material breakdown.
- Semantic score meters.
- Prompt recipe preview.
- Save/export CTA.
- Escape close and focus return.

### Studio preview

- Three-pane feel on wide screens.
- Material controls or fake sliders.
- Live-looking iridescent preview.
- Prompt recipe output.
- CTA: `Generate Variant`.
- No real AI generation yet.

## Quality gates

The build passes only if:

- app runs locally
- no TypeScript errors
- mobile layout works
- keyboard focus is visible
- gallery filters work
- modal opens/closes accessibly
- reduced-motion fallback exists
- text remains readable over effects
- cursor light does not cause layout shift
- visual identity reads as nacre / abalone / opal / lace / gold / orchid within 3 seconds
- no giant unused architecture
- no fake backend
- no broken imports
- no inaccessible custom modal

## Recommended next branch

```txt
nacre-orchid-vertical-slice
```

## Recommended next commit

```txt
feat: build NACRE ORCHID production vertical slice
```
