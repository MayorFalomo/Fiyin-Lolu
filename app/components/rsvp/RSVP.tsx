'use client';
import React, { useEffect, useRef } from 'react';
import Form from './Form';
import Texts from '../Texts';
import { useInView } from 'framer-motion';
import { useStore } from '@/app/store/Store';

const RSVP: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: false,
  });

  const updatedLogoColor = useStore((state) => state.updateLogoColor);

  useEffect(() => {
    const color = inView ? 'white' : 'black';
    updatedLogoColor(color);
  }, [inView, updatedLogoColor]);

  return (
    <div
      id="rsvp"
      ref={ref}
      className="bg-black relative flex flex-col items-center justify-center min-h-screen w-screen py-[40px]"
    >
      <div className=" w-[90%] mx-auto flex max-[980px]:flex-col items-center min-[980px]:items-start justify-between text-white text-center">
        <div className="w-full ">
          <h1
            ref={ref}
            className="text-[40px] text-start max-[980px]:text-center mb-4 font-belleze"
          >
            KINDLY RSVP
          </h1>
          <Texts className="max-w-[350px] text-center max-[980px]:mx-auto min-[980px]:text-start mb-6">
            We can't wait to celebrate our special day with you and your presence would
            mean the world to us! Please let us know if you will be able to join in the
            joy and celebration by
            <span className=" ml-2">October 30th, 2025.</span>
          </Texts>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default RSVP;
