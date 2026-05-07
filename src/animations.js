// Animation Variants for Framer Motion

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  }
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  whileHover: { y: -10, transition: { duration: 0.3 } },
  whileTap: { y: 0 }
};

export const tapBounce = {
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.02 }
};

export const rotate360 = {
  animate: { rotate: 360 },
  transition: { duration: 20, repeat: Infinity, ease: 'linear' }
};

export const pulse = {
  animate: { opacity: [1, 0.7, 1] },
  transition: { duration: 2, repeat: Infinity }
};

export const floatAnimation = {
  animate: { y: [-20, 20, -20] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
};

export const glowAnimation = {
  animate: { boxShadow: ['0 0 20px rgba(99, 102, 241, 0.3)', '0 0 40px rgba(99, 102, 241, 0.6)', '0 0 20px rgba(99, 102, 241, 0.3)'] },
  transition: { duration: 2, repeat: Infinity }
};

export const parallaxVariants = {
  initial: { y: 0 },
  animate: { y: 20, transition: { type: 'spring', damping: 10 } }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 }
  }
};

export const timelineVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.1, duration: 0.6 }
  })
};

export const techIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 12, stiffness: 100 }
  },
  whileHover: {
    scale: 1.1,
    rotateY: 20,
    rotateX: 10,
    transition: { duration: 0.3 }
  }
};

export const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
  whileHover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

export const certificationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 }
  },
  whileHover: {
    scale: 1.05,
    rotateY: 10,
    transition: { duration: 0.3 }
  }
};

export const testimonialVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  },
  whileHover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)',
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.95 }
};

export const inputVariants = {
  initial: { borderColor: '#e5e7eb' },
  whileFocus: {
    borderColor: '#6366F1',
    boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
    transition: { duration: 0.2 }
  }
};

export const successVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 12, stiffness: 200 }
  },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } }
};

export const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3 }
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
};
