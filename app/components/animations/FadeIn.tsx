'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  inView?: boolean;
  onAnimationComplete?: () => void;
}

const FadeIn = ({
  children,
  delay,
  duration = 0.5,
  className = 'w-[100%]',
  // inView,
  onAnimationComplete,
}: Props) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: false,
    margin: '0px 0px 50px 0px',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: inView ? 1 : 0,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
      ref={ref}
      exit={{ opacity: 0 }}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
