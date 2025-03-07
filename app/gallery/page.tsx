'use client';
import React from 'react';
import BentoGrid from '../components/BentoGrid';
import Logo from '../components/Logo';
import SmoothScrolling from '../components/animations/SmoothScrolling';
import useUpdateLogoColor from '../hooks/logoHook';
import Anchored from '../components/animations/AnchorLink';
import { CameraBorder } from '../components/animations/CameraBorder';
import Link from 'next/link';
import Texts from '../components/Texts';

const page: React.FC = () => {
  const ref = useUpdateLogoColor();

  return (
    <SmoothScrolling>
      <div ref={ref} className="bg-black min-h-screen max-w-screen overflow-x-hidden">
        <div className=" flex h-screen w-screen">
          <Logo />
          <div className="h-full w-[50%] max-[640px]:hidden min-[640px]:flex ">
            <img
              className="w-full h-full object-cover"
              src={'/rest_on_wall.webp'}
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <div className="w-[50%] max-[640px]:w-full text-white h-full flex flex-col gap-[40px] items-center-between">
            <ul className="relative w-[90%] font-ebGaramond pt-4 pb-3 mt-4 flex items-center justify-end gap-6">
              <li className="relative z-40 cursor-pointer group inline-block ">
                <Link href="/">
                  <span>Home</span>
                </Link>
                <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#fff] scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
              </li>
              <li className="relative group inline-block">
                <Anchored href="#gallery">Gallery</Anchored>
                <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#fff] scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
              </li>
            </ul>
            <div className="flex items-center justify-center mx-auto h-fit w-[60%] max-[480px]:w-[80%]">
              <CameraBorder>
                <div className="h-[350px] w-full overflow-hidden group">
                  <img
                    src="/hero.webp"
                    className="w-full h-full group-hover:scale-125 transition-all ease-in-out duration-500 object-cover"
                    alt="img"
                  />
                </div>
              </CameraBorder>
            </div>
            <div className="">
              <h1 className="text-[20px]  text-center whitespace-nowrap font-belleze font-bold">
                OUR GALLERY{' '}
              </h1>
              <Texts className="mt-2 w-[400px] max-[840px]:w-[300px] max-[680px]:w-[240px] max-[480px]:w-[90%] text-center mx-auto">
                Experience the Joy of Love Through Our Lens, Where Every Picture Tells a
                Story.
              </Texts>
            </div>
          </div>
        </div>
        <div
          id="gallery"
          className="w-[95%] min-h-screen overflow-hidden mt-[60px] mb-[60px] mx-auto"
        >
          <BentoGrid enableClick />
        </div>
      </div>
    </SmoothScrolling>
  );
};

export default page;
