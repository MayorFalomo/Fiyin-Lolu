import React from 'react';

type Props = {};

export default async function HeroSection() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center gap-1 leading-[90px] h-[60vh]">
        <h1 className="text-[80px] font-petrona ">Fiyin</h1>
        <p className="text-[60px] font-belleze "> & </p>
        <h1 className="text-[80px] font-petrona ">Lolu</h1>
        {/* <img src="/Vector.png" alt="img" /> */}
      </div>
      <div className=" mx-auto w-[50%]">
        <img
          className="grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out "
          src="/hero.jpg"
          alt="Our Moment"
        />
      </div>
    </div>
  );
}
