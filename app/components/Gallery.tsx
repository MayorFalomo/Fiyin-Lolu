import React from 'react';
import BentoGrid from './BentoGrid';
import LiquidButton from './animations/LiquidButton';
import Link from 'next/link';
import SmoothBorder from './animations/SmoothBorder';

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div id="gallery">
      <div className="w-[90%] mx-auto ">
        <div className="mb-12">
          <div className="relative flex items-center pt-8 gap-4">
            <h2 className="text-[50px] whitespace-nowrap font-belleze font-bold mb-2">
              Our Gallery
            </h2>
            <SmoothBorder className="absolute bottom-[5px] left-0 bg-black/40 h-0.5 w-full" />
          </div>
          <p className="text-gray-600 max-w-2xl mt-6 w-[400px]">
            Explore our gallery of captured timeless moments, The beginning of a journey
            we cannot wait to share with you.
          </p>
        </div>
        <BentoGrid noOfImages={4} />

        <Link href={'/gallery'}>
          <LiquidButton
            text="See More"
            liquidColor="white"
            hoverTextColor="black"
            borderColor="transparent"
            className="flex justify-center bg-black text-white mx-auto my-[40px] py-2 px-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
