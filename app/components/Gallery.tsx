import React from 'react';
import BentoGrid from './BentoGrid';

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div id="gallery">
      <BentoGrid />

      <button className="flex justify-center bg-black text-white mx-auto my-[40px] py-2 px-4">
        See More{' '}
      </button>
    </div>
  );
};

export default Gallery;
