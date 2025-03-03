'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  inView?: boolean;
}

const FadeInText = ({
  children,
  delay = 0,
  duration = 0.8,
  className = 'w-[100%]',
}: //   inView,
Props) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: false,
    margin: '0px 0px 50px 0px',
  });

  return (
    <motion.span
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
    >
      {children}
    </motion.span>
  );
};

export default FadeInText;
