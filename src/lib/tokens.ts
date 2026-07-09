export const tokens = {
  color: {
    pearl:        'var(--color-pearl)',
    orchid:       'var(--color-orchid)',
    gold:         'var(--color-gold)',
    abalone:      'var(--color-abalone)',
    opal:         'var(--color-opal)',
    labradorite:  'var(--color-labradorite)',
    lacquer:      'var(--color-lacquer)',
    lace:         'var(--color-lace)',
  },
  motion: {
    bloom:          'var(--ease-bloom)',
    veil:           'var(--ease-veil)',
    settle:         'var(--ease-settle)',
    durationFast:   'var(--duration-fast)',
    durationMid:    'var(--duration-mid)',
    durationSlow:   'var(--duration-slow)',
  },
  z: {
    base:    'var(--z-base)',
    surface: 'var(--z-surface)',
    overlay: 'var(--z-overlay)',
    modal:   'var(--z-modal)',
    cursor:  'var(--z-cursor)',
  },
} as const;
