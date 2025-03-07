'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/Store';
import Link from 'next/link';

const Logo: React.FC = () => {
  const logoColor = useStore((state) => state.logoColor);
  return (
    <div className="fixed top-[10px] left-[30px] z-40 flex flex-col gap-2 w-[90%] mx-auto">
      <div className="flex flex-col gap-[2px] font-sofia w-fit mt-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
          className={`${logoColor === 'black' ? 'text-black' : 'text-white'}`}
        >
          <Link href={'/'}>#JULOForever</Link>
        </motion.p>
        <motion.span
          initial={{ opacity: 0, width: 1 }}
          animate={{
            opacity: 1,
            width: 100,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.56, 0.03, 0.12, 1.04],
          }}
          className={` ${
            logoColor === 'black' ? 'bg-black' : 'bg-white'
          } h-0.5 w-[70px] `}
        ></motion.span>
      </div>
    </div>
  );
};

export default Logo;
