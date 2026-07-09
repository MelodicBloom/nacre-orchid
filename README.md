# NACRE//ORCHID

> Interfaces that bloom when touched.

NACRE//ORCHID is a luxury generative-art and design-system platform where pearl, orchid, lace, abalone, opal, labradorite, and gold cloisonné become product architecture, motion grammar, symbolic UX, and responsive storytelling.

## Governing law

**Make the site feel like opal, but architect it like a newsroom.**

## Vertical slice scope

- Home page (`/`)
- Gallery page (`/gallery`)
- Artifact detail modal
- Studio preview section
- Shared navigation / layout
- Design-token CSS system
- Seed artifact data
- Responsive layouts
- Reduced-motion and reduced-transparency fallbacks

## Tech stack

- Next.js 14 · TypeScript · CSS variables
- Framer Motion · Radix UI
- SVG filters (nacre distortion, glow, lace texture, shimmer)

## Getting started

```bash
npm install
npm run dev
```

## Quality gates

- [ ] App runs locally
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Mobile layout works
- [ ] Keyboard focus visible throughout
- [ ] Gallery filters work
- [ ] Modal opens/closes accessibly (native `<dialog>`)
- [ ] Reduced-motion fallback active
- [ ] Text readable over all effects
- [ ] Cursor light causes no layout shift
- [ ] Visual identity reads as nacre/abalone/opal/lace/gold/orchid within 3 seconds

## Semantic assignments

| Material | Meaning |
|---|---|
| Pearl | saved, memory, completion, focus |
| Orchid | creation, bloom, transformation |
| Lace | veil, preview, hidden layer, modal |
| Gold | syntax, boundary, premium state, selection |
| Abalone | artifact depth, gallery tile, active surface |
| Opal | responsive intelligence, hover, listening, success |
| Labradorite | dark mineral field, background depth |

## Branch

`nacre-orchid-vertical-slice`

## Related

- [MelodicBloom/aether](https://github.com/MelodicBloom/aether) — shader / effects / iridescent surface library
- [Build brief (aether#1)](https://github.com/MelodicBloom/aether/issues/1) — canonical staging brief (to be migrated here)
