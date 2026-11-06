import React from 'react';
import { motion } from 'framer-motion';
import { WAYFARE_CURVES } from '../../animations/transitions';

interface WordRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className = '',
  tag = 'h2',
  delay = 0.1,
  stagger = 0.04,
}) => {
  const words = text.split(/\s+/).filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0.001,
      filter: 'blur(8px)',
      y: 22,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.9,
        ease: WAYFARE_CURVES.expo,
      },
    },
  };

  const MotionTag = motion[tag] as any;

  return (
    <MotionTag
      className={`inline-block text-balance ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden pb-1">
          <motion.span
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

