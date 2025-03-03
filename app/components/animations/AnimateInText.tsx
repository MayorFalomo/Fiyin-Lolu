'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';

interface TextsProps {
  variant?: 'primary' | 'secondary' | 'custom';
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const AnimatedText: React.FC<TextsProps> = ({
  variant = 'primary',
  className = '',
  children,
  delay = 0,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.3, // Only needs 30% of the element to be visible
    margin: '0px 0px -100px 0px',
  });

  const textVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const variantStyles = {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
  };

  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.span
        className={clsx(
          className,
          variant === 'primary' && 'font-normal font-ebGaramond text-[16px]',
          variant === 'secondary' && 'font-light font-sourceSansItalic',
          variant === 'custom' && ''
        )}
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
