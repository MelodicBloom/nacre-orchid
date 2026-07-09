export const bloomVariants = {
  hidden:  { opacity: 0, scale: 0.96, filter: 'blur(4px)' },
  visible: { opacity: 1, scale: 1,    filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const veilVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 8,  transition: { duration: 0.2 } },
};

export const settleVariants = {
  hidden:  { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } },
};

export const tessellateVariants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};
