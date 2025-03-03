'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Logo = (props: Props) => {
  const [show, setShow] = React.useState(false);
  // const ref = useRef(null);
  // const isInView = useInView(ref, {
  //   once: true,
  // });

  return (
    <div
      // ref={ref}
      className="fixed top-[20px] left-[60px] z-40 flex flex-col gap-2 w-[90%] mx-auto"
    >
      <div className="flex flex-col gap-[2px] font-meow w-fit mt-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
          className=""
        >
          F
        </motion.p>
        <motion.span
          initial={{ opacity: 0, width: 1 }}
          animate={{
            opacity: 1,
            width: 60,
          }}
          onAnimationComplete={() => setShow(true)}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.56, 0.03, 0.12, 1.04],
          }}
          className="bg-black h-0.5 w-[40px]"
        ></motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: show ? 1 : 0,
            transition: {
              duration: 0.5,
              delay: 0.6,
            },
          }}
          className=" text-end"
        >
          L
        </motion.p>
      </div>
    </div>
  );
};

export default Logo;
