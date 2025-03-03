import React from 'react';
import Texts from './Texts';
import FadeInText from './animations/FadeInText';
import FadeIn from './animations/FadeIn';
import AnimatedText from './animations/AnimateInText';

type Props = {};

const Story = (props: Props) => {
  return (
    <div className="bg-beige relative h-full w-full flex items-start ">
      <div id="story" className="w-[30%] relative h-full object-cover">
        <img
          className="w-full min-h-full grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out"
          src="/almost_kissing.jpg"
          alt="img"
        />
        <img
          className="absolute right-[-80px] top-1/3 w-[250px] h-[300px] object-cover grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out"
          src="/ring_showing.jpg"
          alt="img"
        />
      </div>
      <div className=" relative w-[70%] h-[90vh] flex items-center justify-center">
        <div className="flex flex-col w-[50%] gap-4">
          <h1 className="text-3xl font-bold text-center font-petrona ">
            <FadeInText delay={0.5}>Our Love Story</FadeInText>
          </h1>
          <FadeIn delay={0.8}>
            {' '}
            <img className="w-[100px] mx-auto" src="/Vector.png" alt="img" />
          </FadeIn>
          {/* <Texts variant="primary" className=""> */}
          <AnimatedText delay={1}>
            Our love story began in the hallways of Faith Academy in Canaanland, Ota,
            where we were just two secondary school students in 2011, unaware we were
            meeting our future spouse.
          </AnimatedText>
          {/* </Texts> */}
          {/* <Texts variant="primary" className=""> */}
          <AnimatedText delay={1.2}>
            Our love story began in the hallways of Faith Academy in Canaanland, Ota,
            where we were just two secondary school students in 2011, unaware we were
            meeting our future spouse.
          </AnimatedText>
          {/* </Texts> */}
        </div>
      </div>
      <div className="absolute right-[0px] bottom-[90px] rotate-90 h-fit w-fit text-end flex items-center gap-4">
        <Texts>Fiyin + Lolu</Texts>
        <p className="w-4 h-0.5 bg-black"></p>
        <Texts>Love </Texts>
      </div>
    </div>
  );
};

export default Story;
