'use client';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useStore } from '../store/Store';

const useUpdateLogoColor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: false,
  });

  const updatedLogoColor = useStore((state) => state.updateLogoColor);

  useEffect(() => {
    const color = inView ? 'white' : 'black';
    updatedLogoColor(color);
  }, [inView, updatedLogoColor]);
  return ref;
};

export default useUpdateLogoColor;
