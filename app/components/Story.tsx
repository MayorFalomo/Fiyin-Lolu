import React from 'react';
import Texts from './Texts';
import FadeInText from './animations/FadeInText';
import FadeIn from './animations/FadeIn';
import AnimatedText from './animations/AnimateInText';

const Story: React.FC = () => {
  return (
    <div className="bg-beige relative min-[850px]:h-[100vh] min-h-[100vh] w-full flex max-[850px]:flex-col max-[850px]:items-center justify-start min-[850px]:items-start ">
      <div
        id="story"
        className="w-[30%] max-[850px]:w-[90%] max-[850px]:mx-auto max-[850px]:flex max-[850px]:items-end gap-4 relative h-full object-cover"
      >
        <div className="w-full h-full max-[850px]:w-[500px] max-[850px]:h-[400px] max-[550px]:h-[300px] object-cover  ">
          <img
            className="h-full w-full object-cover grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out"
            src="/almost_kissing.webp"
            alt="img"
          />
        </div>
        <div className="min-[850px]:absolute max-[850px]:relative min-[850px]:right-[-80px] min-[850px]:top-1/3 w-[250px] h-[300px] max-[850px]:h-[200px] max-[550px]:h-[150px] object-cover ">
          <img
            className="w-full h-full object-cover grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out"
            src="/ring_showing.webp"
            alt="img"
          />
        </div>
      </div>
      <div className=" relative w-[70%] max-[550px]:w-full min-[850px]:h-[90vh] h-full py-[60px] flex items-center justify-center">
        <div className="flex flex-col w-[50%] max-[1100px]:w-[60%] max-[850px]:w-[90%] gap-4">
          <h1 className="text-3xl font-bold text-center font-petrona ">
            <FadeInText delay={0.5}>Our Love Story</FadeInText>
          </h1>
          <FadeIn delay={0.8}>
            {' '}
            <img className="w-[100px] mx-auto" src="/Vector.webp" alt="img" />
          </FadeIn>
          <AnimatedText delay={1}>
            Our love story began in the hallways of Faith Academy in Canaanland, Ota,
            where we were just two secondary school students in 2011, unaware we were
            meeting our future spouse.
          </AnimatedText>

          <AnimatedText delay={1.2}>
            Our love story began in the hallways of Faith Academy in Canaanland, Ota,
            where we were just two secondary school students in 2011, unaware we were
            meeting our future spouse.
          </AnimatedText>
        </div>
      </div>
      <div className="absolute min-[650px]:right-[-60px] max-[650px]:right-[-90px] bottom-[150px] rotate-90 h-fit w-fit text-end max-[550px]:hidden  flex items-center gap-4">
        <Texts>Judah + Lolu</Texts>
        <p className="w-4 h-0.5 bg-black"></p>
        <Texts>#JULO Forever </Texts>
      </div>
    </div>
  );
};

export default Story;
