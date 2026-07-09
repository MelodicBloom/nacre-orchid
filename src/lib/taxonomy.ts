export const MATERIAL_SEMANTICS = {
  pearl:        'saved, memory, completion, focus',
  orchid:       'creation, bloom, transformation',
  lace:         'veil, preview, hidden layer, modal',
  gold:         'syntax, boundary, premium state, selection',
  abalone:      'artifact depth, gallery tile, active surface',
  opal:         'responsive intelligence, hover, listening, success',
  labradorite:  'dark mineral field, background depth',
} as const;

export const MOTION_SEMANTICS = {
  bloom:      'reveal or new understanding',
  veil:       'modal, loading, preview',
  inlay:      'button press or commitment',
  orbit:      'related items or loading',
  ripple:     'click/touch response',
  tessellate: 'gallery rearrangement',
  settle:     'success or saved state',
} as const;

export type Material = keyof typeof MATERIAL_SEMANTICS;
export type Motion   = keyof typeof MOTION_SEMANTICS;
