# ARCHITECTURE: MelodicBloom — nacre-orchid + aether

**Version:** 1.0.0
**Org:** `MelodicBloom`
**Last updated:** 2026-07-09

---

## Org-level split

| Repo | Role | Status |
|---|---|---|
| `MelodicBloom/nacre-orchid` | Product / site / platform | Active — vertical slice on `nacre-orchid-vertical-slice` |
| `MelodicBloom/aether` | Shader / effects / iridescent surface library | Active — receives WebGL and GLSL work |

This split is intentional and permanent. Do not collapse these repos. `nacre-orchid` consumes visual primitives from `aether` over time as progressive WebGL enhancement. CSS/SVG surfaces in `nacre-orchid` are the fallback layer; `aether` shaders are the enhancement layer.

---

## nacre-orchid — layer map

```
App layer          layout.tsx · page.tsx · gallery/page.tsx
Shell layer        ShellRoot → CursorLight + SiteNav
Primitive layer    PearlButton · TokenChip · SemanticMeter
Surface layer      NacreCard · AbaloneTile · LaceModal
Flow layer         ReliquaryHero · ArtifactGrid · StudioPreview
Lib layer          artifacts · taxonomy · tokens · motion
Style layer        tokens → globals → surfaces → motion → accessibility → screens
```

### Dependency direction

```
Flows
  └─ Surfaces + Primitives
       └─ Lib (taxonomy, tokens, motion)
            └─ Styles (tokens.css as source of truth)
```

Styles flow **down** through CSS custom properties. Semantic meaning flows **up** through `lib/taxonomy.ts`. Components never import from a higher layer.

---

## aether — layer map (future)

```
Shader primitives     GLSL surface functions (nacre, abalone, opal, labradorite)
Effect composers      WebGL canvas wrappers
nacre-orchid bridge   <AbaloneTile shader={true}> — drops in over CSS surface
```

The bridge pattern means nacre-orchid components accept an optional `shader` prop that swaps the CSS surface for a WebGL canvas from aether. This keeps the component API stable while enabling progressive visual enhancement.

---

## Token architecture

Single source of truth: `src/styles/tokens.css`

Downstream consumers:
- CSS components via `var(--token-name)`
- `src/lib/tokens.ts` — JS/TS references for Framer Motion
- (next phase) `design-tokens.json` — W3C DTCG export for design tools and other repos

Token categories:
```
colors · surfaces · radii · spacing · shadows · glows
motion easing · durations · focus rings · z-index layers
```

---

## Semantic architecture

Material and motion semantics are defined once in `src/lib/taxonomy.ts` and flow into:
- Component class names (`nacre-card`, `material-tag--pearl`, etc.)
- CSS modifier classes (`.token-chip--orchid`, `.abalone-tile--deep`)
- Artifact data schema (`materials: Material[]`, `scores: SemanticScore[]`)
- Filter chip labels in `ArtifactGrid`

**Never hard-code a material name as a string in a component.** Always reference the `Material` type from `taxonomy.ts`.

---

## Accessibility architecture

All accessibility is handled at the style layer via `accessibility.css`, not per-component overrides:

```
prefers-reduced-motion       → collapse all animation durations to 0.01ms, hide cursor light
prefers-reduced-transparency → remove backdrop-filter, solid backgrounds
:focus-visible (global)      → gold double-ring via --focus-ring token
.sr-only                     → screen-reader utility class
```

Modal accessibility uses native `<dialog>` (not a custom div modal). Focus trap and Escape handling are browser-native. `aria-labelledby` ties the dialog to its title.

---

## CI/CD target architecture (next phase)

```yaml
# .github/workflows/ci.yml (to be created)
on: [push, pull_request]
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
```

Future additions: visual regression (Chromatic/Percy), Storybook build, Vercel preview deploy on PR.

---

## Branch strategy

| Branch | Purpose |
|---|---|
| `main` | Stable, auto-initialized |
| `nacre-orchid-vertical-slice` | Active build — vertical slice |
| (future) `feat/*` | Feature branches off vertical slice |
| (future) `release/v*` | Tagged release candidates |

---

## Issue / brief lineage

```
qt314wink/nextjs-boilerplate (original staging)
  └─ MelodicBloom/aether#1 (MelodicBloom staging brief — CLOSED)
       └─ MelodicBloom/nacre-orchid#1 (CANONICAL build brief — OPEN)
```

All future build planning should reference and close against `nacre-orchid#1`.

---

## Phase map

| Phase | Status | Gate |
|---|---|---|
| 0. Org + repo setup | ✅ Complete | nacre-orchid repo live, branch created |
| 1. Vertical slice scaffold | ✅ Complete | 27 files committed, brief migrated |
| 2. Quality gate pass | 🔲 Next | All 15 QA items checked, CI passing |
| 3. Token export | 🔲 Next | design-tokens.json (W3C DTCG) |
| 4. CI/CD | 🔲 Next | GitHub Actions lint + type-check + build |
| 5. SVG filter layer | 🔲 Queued | Nacre distortion, lace texture, shimmer |
| 6. Storybook | 🔲 Queued | Stories for all primitives + surfaces |
| 7. aether bridge | 🔲 Queued | First shader import from MelodicBloom/aether |
| 8. Auth + persistence | 🔲 Future | Pearl save state wired to storage |
| 9. Marketplace | 🔲 Future | Gold-gated premium, pricing tiers |
