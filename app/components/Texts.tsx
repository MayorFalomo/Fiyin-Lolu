'use client';
import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'custom';
  onClick?: () => void;
  enableAnimation?: boolean;
};

const Texts: React.FC<Props> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  enableAnimation = false,
}) => {
  return (
    <motion.p
      className={clsx(
        className,
        variant === 'primary' && 'font-normal font-ebGaramond text-[16px]',
        variant === 'secondary' && 'font-light font-sourceSansItalic',
        variant === 'custom' && ''
      )}
      onClick={onClick}
      initial={{ opacity: enableAnimation ? 0 : 1 }}
      animate={{ opacity: enableAnimation ? 1 : 1 }}
      exit={{ opacity: enableAnimation ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.p>
  );
};

export default Texts;
