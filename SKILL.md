# SKILL: NACRE//ORCHID — Vertical Slice Build

**Version:** 1.0.0
**Repo:** `MelodicBloom/nacre-orchid`
**Branch:** `nacre-orchid-vertical-slice`
**Related:** `MelodicBloom/aether` (shader / iridescent surface library)
**Canonical brief:** https://github.com/MelodicBloom/nacre-orchid/issues/1
**Last updated:** 2026-07-09

---

## Governing law

> **Make the site feel like opal, but architect it like a newsroom.**

---

## Project thesis

NACRE//ORCHID is a luxury generative-art and design-system platform where pearl, orchid, lace, abalone, opal, labradorite, and gold cloisonné become product architecture, motion grammar, symbolic UX, and responsive storytelling.

---

## Skill scope

This SKILL covers the **production vertical slice** phase only. It does not cover:

- WebGL / advanced shader integration (→ MelodicBloom/aether)
- Auth, database, or marketplace
- Community or video/audio engines
- Any architecture beyond the vertical slice tree

---

## Semantic taxonomy

### Material assignments

| Material | Semantic role | CSS token |
|---|---|---|
| Pearl | saved, memory, completion, focus | `--color-pearl` |
| Orchid | creation, bloom, transformation | `--color-orchid` |
| Lace | veil, preview, hidden layer, modal | `--color-lace` |
| Gold | syntax, boundary, premium state, selection | `--color-gold` |
| Abalone | artifact depth, gallery tile, active surface | `--color-abalone` |
| Opal | responsive intelligence, hover, listening, success | `--color-opal` |
| Labradorite | dark mineral field, background depth | `--color-labradorite` |
| Black lacquer | stage, contrast, atmosphere | `--color-lacquer` |

### Motion assignments

| Motion name | Semantic role | Duration / easing |
|---|---|---|
| Bloom | reveal or new understanding | `500ms var(--ease-bloom)` |
| Veil | modal, loading, preview | `300ms var(--ease-veil)` |
| Inlay | button press or commitment | `150ms var(--ease-inlay)` |
| Orbit | related items or loading | `4–6s ease-in-out infinite` |
| Ripple | click/touch response | `150ms var(--ease-inlay)` |
| Tessellate | gallery rearrangement | `400ms staggered var(--ease-bloom)` |
| Settle | success or saved state | `400ms var(--ease-settle)` |

---

## Implementation rules

1. Meaning before surface.
2. Tokens before components.
3. Components before screens.
4. CSS/SVG before WebGL.
5. Accessibility before spectacle.
6. Every effect needs a semantic job.
7. No ornament without hierarchy.
8. No iridescence without material logic.
9. No hover-only UX on mobile.
10. No motion without reduced-motion fallback.

---

## Component index

### Shell layer

| Component | File | Responsibility |
|---|---|---|
| `ShellRoot` | `components/shell/ShellRoot.tsx` | Layout wrapper, mounts cursor light and nav |
| `CursorLight` | `components/shell/CursorLight.tsx` | Prism cursor glow, `will-change: transform`, `aria-hidden` |
| `SiteNav` | `components/shell/SiteNav.tsx` | Fixed nav, gold wordmark, pearl links |

### Primitive layer

| Component | File | Responsibility |
|---|---|---|
| `PearlButton` | `components/primitives/PearlButton.tsx` | Gold-bordered CTA, primary + secondary variants, inlay press, focus ring |
| `TokenChip` | `components/primitives/TokenChip.tsx` | Filter/tag chip, `aria-pressed`, material variant classes |
| `SemanticMeter` | `components/primitives/SemanticMeter.tsx` | `role="meter"`, 0–100 score, settles on mount |

### Surface layer

| Component | File | Responsibility |
|---|---|---|
| `NacreCard` | `components/surfaces/NacreCard.tsx` | Gallery tile, keyboard-openable, opal hover glow |
| `AbaloneTile` | `components/surfaces/AbaloneTile.tsx` | Depth-aware iridescent surface container (shallow/mid/deep) |
| `LaceModal` | `components/surfaces/LaceModal.tsx` | Native `<dialog>`, veil animation, shimmer gold top bar, accessible close |

### Flow layer

| Component | File | Responsibility |
|---|---|---|
| `ReliquaryHero` | `components/flows/ReliquaryHero.tsx` | Cinematic hero, orbit orb, bloom-in content, dual CTAs, status bar |
| `ArtifactGrid` | `components/flows/ArtifactGrid.tsx` | Filtered gallery, 7 material chips, wires NacreCard → LaceModal |
| `StudioPreview` | `components/flows/StudioPreview.tsx` | 3-pane studio (controls / abalone canvas / recipe), fake sliders |

---

## Lib index

| File | Contents |
|---|---|
| `lib/artifacts.ts` | `Artifact` type, `Material` union, 6 seeded artifacts with scores + prompt recipes |
| `lib/taxonomy.ts` | `MATERIAL_SEMANTICS`, `MOTION_SEMANTICS` const maps, exported types |
| `lib/tokens.ts` | JS-side CSS variable references (for Framer Motion / JS consumers) |
| `lib/motion.ts` | Framer Motion variant presets: bloom, veil, settle, tessellate |

---

## Style index

| File | Contents |
|---|---|
| `styles/tokens.css` | All CSS custom properties: colors, surfaces, radii, spacing, shadows, glows, easing, durations, z-index, focus ring |
| `styles/globals.css` | Reset, body, shell, nav |
| `styles/surfaces.css` | Cursor light, NacreCard, AbaloneTile, PearlButton, TokenChip, SemanticMeter, material-tag |
| `styles/motion.css` | Keyframes (bloom-in, veil-in, settle-in, shimmer, orbit-pulse), modal styles |
| `styles/accessibility.css` | `prefers-reduced-motion`, `prefers-reduced-transparency`, global `:focus-visible`, `.sr-only` |
| `styles/screens.css` | Hero, gallery grid, studio preview — responsive layouts |

---

## Token reference (CSS)

```css
/* Colors */
--color-pearl:        #f0eee8
--color-orchid:       #c084b0
--color-gold:         #c8a84b
--color-abalone:      #7b9ea6
--color-opal:         #a8c4cc
--color-labradorite:  #2a3040
--color-lacquer:      #0e0d0f
--color-lace:         #f5f0e8cc

/* Motion */
--ease-bloom:   cubic-bezier(0.22, 1, 0.36, 1)
--ease-veil:    cubic-bezier(0.22, 1, 0.36, 1)
--ease-settle:  cubic-bezier(0.33, 1, 0.68, 1)
--ease-inlay:   cubic-bezier(0.4, 0, 0.2, 1)
--duration-fast: 150ms
--duration-mid:  300ms
--duration-slow: 500ms

/* Z-index */
--z-base: 0  --z-surface: 10  --z-overlay: 20  --z-modal: 30  --z-cursor: 40

/* Focus */
--focus-ring: 0 0 0 2px var(--color-lacquer), 0 0 0 4px var(--color-gold)
```

---

## Quality gates

The build passes only if:

- [ ] App runs locally (`npm run dev`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Mobile layout renders correctly
- [ ] Keyboard focus is visible on all interactive elements
- [ ] Gallery filter chips update tile set correctly
- [ ] Artifact detail modal opens and closes accessibly (`<dialog>`)
- [ ] Escape key closes modal and returns focus to trigger
- [ ] `prefers-reduced-motion` suppresses all animations
- [ ] `prefers-reduced-transparency` removes backdrop-filter
- [ ] Text remains readable over all material surfaces
- [ ] Cursor light causes no layout shift
- [ ] Visual identity reads as nacre / abalone / opal / lace / gold / orchid within 3 seconds
- [ ] No giant unused architecture
- [ ] No fake backend or broken imports

---

## Repo architecture (MelodicBloom org)

```
MelodicBloom/
  nacre-orchid/          ← product / site / platform (this repo)
    branch: nacre-orchid-vertical-slice
    issues/1: canonical build brief
  aether/                ← shader / effects / iridescent surface library
    issues/1: staging brief (closed, migrated — see nacre-orchid#1)
```

---

## Next phase gates (post-vertical-slice)

1. **Token export** — generate `design-tokens.json` (W3C DTCG format) from `tokens.css` source of truth
2. **CI/CD** — GitHub Action on `nacre-orchid-vertical-slice`: lint + type-check + build
3. **SVG filter layer** — nacre distortion, lace texture, abalone shimmer as reusable `<defs>`
4. **Storybook** — component stories for all primitives and surfaces
5. **aether bridge** — import first iridescent shader from `MelodicBloom/aether` as progressive enhancement
6. **Artifact data** — expand from 6 seed artifacts to full taxonomy-driven set
7. **Auth + persistence** — pearl save state wired to real storage
8. **Marketplace** — gold-gated premium states, pricing tiers

---

## Definition of done (vertical slice)

The vertical slice is **done** when all 15 quality gates are checked, the app runs without errors or broken imports, the visual identity is recognisably NACRE//ORCHID within 3 seconds on mobile, and a passing CI run exists on the branch.

---

## Related files

- `src/lib/taxonomy.ts` — semantic truth source for material + motion assignments
- `src/lib/tokens.ts` — JS token references
- `src/styles/tokens.css` — CSS custom property definitions
- `src/lib/motion.ts` — Framer Motion variant presets
- [nacre-orchid#1](https://github.com/MelodicBloom/nacre-orchid/issues/1) — canonical build brief
- [aether#1](https://github.com/MelodicBloom/aether/issues/1) — staging brief (closed)
