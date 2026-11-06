import { Transition, Variants } from 'framer-motion';

// Exact Wayfare reference bezier curves
export const WAYFARE_CURVES = {
  // Main entrance and transition curve
  expo: [0.16, 1, 0.3, 1] as const,
  // Hover slider wipe and zoom curve
  wipe: [0.22, 1, 0.36, 1] as const,
  // Snappy button fill and arrow spring
  button: [0.785, 0.135, 0.15, 0.86] as const,
};

export const transitionExpo: Transition = {
  duration: 0.9,
  ease: WAYFARE_CURVES.expo,
};

export const transitionButton: Transition = {
  duration: 0.45,
  ease: WAYFARE_CURVES.button,
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0.001,
    y: 20,
    filter: 'blur(6px)',
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: customDelay,
      duration: 0.9,
      ease: WAYFARE_CURVES.expo,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

