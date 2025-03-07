import React from 'react';

export default async function HeroSection() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center gap-1 leading-[80px] max-[850px]:leading-[70px] h-[50vh]">
        <h1 className="text-[80px] max-[850px]:text-[60px] max-[600px]: font-petrona ">
          Lolu
        </h1>
        <p className="text-[60px] font-belleze "> & </p>
        <h1 className="text-[80px]  max-[850px]:text-[60px] font-petrona ">Judah</h1>
      </div>
      <div className=" mx-auto min-[850px]:w-[50%] h-[300px] w-[90%]">
        <img
          className="w-full h-full grayscale-[50] object-cover hover:grayscale-0 transition-all duration-700 ease-out "
          src="/hero.webp"
          alt="Our Moment"
        />
      </div>
    </div>
  );
}
