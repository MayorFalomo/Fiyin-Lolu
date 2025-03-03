'use client';
import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const SaveTheDate = (props: Props) => {
  return (
    <div className="h-screen p-1 w-screen bg-[#f5f5f0] ">
      <div className=" w-[90%] mx-auto">
        <div className="w-full gap-1">
          <h3 className="flex flex-col justify-start text-start font-belleze leading-[50px] text-[50px] mt-8 ">
            <span> SAVE</span>
            <span className="ml-9 font-sofia">the</span>
            <span className="ml-9">DATE</span>
          </h3>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="w-[150px] mt-8 flex flex-col items-center text-center">
            <span className="font-petrona text-[20px] italic">To celebrate</span>
            <span className="font-petrona text-[20px] italic">the wedding of.</span>
          </p>
          <p className="font-sofia font-semibold text-[30px] mt-[30px]">
            {' '}
            Fiyinfoluwa & Jesuloluwa
          </p>
          <p className="font-ebGaramond text-[30px] font-semibold">Nov 30th, 2025</p>
          <p className="mt-[20px] font-ebGaramond max-w-[500px]  text-center mx-auto text-[20px]">
            We're truly looking forward to having you as a guest in our celebration.
          </p>
        </div>
        <div className="w-full flex items-center justify-between mt-[70px]">
          <p className="font-semibold text-[20px] font-petrona">Only 150days to go. </p>
          <ul className="flex font-ebGaramond items-center gap-1">
            <li>Built with love by </li>
            <li className={`relative cursor-pointer group inline-block`}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mayowa-falomo.netlify.app"
              >
                Mayowa
              </a>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                  },
                }}
                className="ml-1 text-red-600 "
              >
                &#10084;
              </motion.span>{' '}
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#000] scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </li>{' '}
          </ul>
        </div>
        {/* <div className="font-sofia mt-[30px] flex items-center gap-3 ">
          <span>FIYINFOLUWA</span>
          <span> & </span>
          <span className="">JESULOLUWA</span>
          <p className="bg-black/40 h-[50px] w-0.5 mx-auto "></p>
        </div> */}
      </div>
    </div>
  );
};

export default SaveTheDate;
