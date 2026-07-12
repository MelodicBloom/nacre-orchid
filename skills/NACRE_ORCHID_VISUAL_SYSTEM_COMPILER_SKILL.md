# NACRE//ORCHID Visual-System Compiler Skill

## Purpose

Convert visual references, abstract aesthetic language, product goals, and implementation constraints into a traceable UI/UX/design-system/product architecture.

## Operating principle

Every decision follows this path:

```txt
Source → Meaning → Token → Component → Screen → Behavior → Implementation → QA
```

## The Choir of the Shell

Use these layers in order:

1. **Vision** — What should users feel, do, understand, and remember?
2. **Semantics** — What do materials, motifs, symbols, and behaviors mean?
3. **Tokens** — What values make the system repeatable?
4. **Visual composition** — How does the system organize attention?
5. **Components** — What reusable objects carry the system?
6. **Motion and effects** — What moves, why, and with what fallback?
7. **UX and product flows** — How does a person move through the product?
8. **Narrative and copy** — What does the system say, when, and in what voice?
9. **Engineering** — How does it become reliable code?
10. **QA and launch** — How do we know it is beautiful, usable, performant, and shippable?

## Decision scoring

Score each major choice:

| Criterion | Weight |
|---|---:|
| Product value | 20 |
| Visual identity fit | 20 |
| UX clarity | 20 |
| Accessibility | 15 |
| Performance | 15 |
| Implementation cost | 10 |

Reject choices below 70 unless marked experimental.

## Source vetting

| Source type | Trust | Use |
|---|---|---|
| User-owned visual source | A | Can drive visual DNA |
| User project notes | A | Can drive product decisions |
| Official technical docs | B | Can support implementation choices |
| Reputable case study | C | Can inspire structure, not copy |
| Generated draft | D | Raw material, must be validated |
| Vague memory | E | Label as assumption |

## Material assignments

| Material | Meaning | UI assignment |
|---|---|---|
| Nacre | memory, protection, inner glow | saved states, cards, hero surfaces |
| Abalone | spectral artifact depth | gallery tiles, active panels, shader previews |
| Labradorite | hidden flash, dark mineral field | background depth, inspect mode |
| Opal | responsive intelligence | hover, success, listening, cursor light |
| Gold cloisonné | syntax and boundary | borders, focus rings, nav, selection |
| Lace | veil and permeability | modal, overlay, preview, loading mask |
| Black lacquer | stage and contrast | page background, negative space |

## Motion assignments

| Motion | Meaning | Use |
|---|---|---|
| Bloom | new understanding | reveal, expansion, onboarding |
| Veil | partial concealment | modal, loading, preview |
| Inlay | tactile commitment | button press, save, toggle |
| Orbit | relationship | related artifacts, loaders |
| Ripple | cause/effect | click, touch, audio feedback |
| Tessellate | pattern intelligence | gallery rearrangement |
| Settle | confidence | success, saved, completion |

## Effect escalation ladder

Always choose the lowest sufficient effect:

1. Static CSS gradient
2. CSS gradient with cursor variables
3. SVG filter or mask
4. Canvas 2D
5. WebGL / GLSL / R3F
6. Video shader or postprocessing

For the first slice, use CSS/SVG first. Do not add WebGL unless isolated and optional.

## Handoff requirements

Every implementation handoff should include:

- thesis
- use cases
- semantic taxonomy
- token atlas
- screen map
- component architecture
- motion/effects matrix
- decision records
- QA checklist
- milestones
- implementation prompt

## Definition of done

A NACRE//ORCHID build is complete only when the visual language is named, the semantic system is explicit, tokens are implementable, components are stateful and accessible, screens map to use cases, motion has meaning, effects have fallbacks, copy explains function and feeling, engineering choices are justified, QA gates are testable, and the result cultivates awe without sacrificing usability.
