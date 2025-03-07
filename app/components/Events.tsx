'use client';
import React from 'react';
import FadeInText from './animations/FadeInText';
import { motion, useInView } from 'framer-motion';
import { Event } from '../types/types';

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      name: 'EXCHANGE OF VOWS',
      day: 'Fri',
      month: 'Dec',
      date: 12,
      time: '10-2pm',
      location: 'The royal events center',
    },
    {
      id: 2,
      name: 'WEDDING DAY',
      day: 'Sat',
      month: 'Dec',
      date: 13,
      time: '10-6pm',
      location: 'The Monarch events center',
    },
    {
      id: 3,
      name: 'AFTER PARTY, FAAJI!',
      day: 'Sat',
      month: 'De',
      date: 13,
      time: '8-4pm',
      location: 'Hades hotel and club',
    },
  ];

  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1,
    margin: '0px 0px -50px 0px', // Negative bottom margin to trigger earlier
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-[800px]:h-[100vh] max-[800px]:min-h-screen w-screen">
      <div id="events" className="w-[90%] mx-auto flex max-[800px]:flex-col items-start">
        <div
          ref={ref}
          className="h-screen max-[800px]:h-[45vh] max-[480px]:h-[35vh] flex flex-col gap-4 max-[480px]:gap-1 w-fit items-start justify-start "
        >
          <p className="bg-black mx-auto h-[200px] max-[800px]:h-[100px] w-0.5"></p>
          <div>
            <h1 className="flex flex-col scroll-m-20 text-4xl leading-[60px] font-petrona font-medium lg:text-[60px]">
              <FadeInText delay={0.2} className=" whitespace-nowrap">
                Wedding &
              </FadeInText>
            </h1>
            <div className="flex items-center justify-end gap-4">
              <img className="w-[50px]" src="/vector.webp" alt="img" />
              <h1 className=" scroll-m-20 text-4xl lg:leading-[60px] font-petrona font-medium lg:text-[60px]">
                <FadeInText delay={0.5} className="text-end mt-6">
                  Events
                </FadeInText>
              </h1>
            </div>
          </div>
          <p className="bg-black/50 mx-auto mt-3 h-full w-0.5"></p>
        </div>
        <div className="w-full min-[800px]:h-screen flex flex-col items-start min-[800px]:justify-between">
          <div className="h-[250px] mt-3 w-[250px] ml-auto grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out object-cover flex flex-col items-center justify-start">
            <motion.img
              className="w-full h-full object-cover"
              src="/flower_ring.webp"
              alt="img"
              initial={{
                clipPath: 'inset(0 0 0 100%)',
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                clipPath: inView ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)',
              }}
              exit={{
                opacity: 0,
                clipPath: 'inset(0 0 0 100%)',
              }}
              transition={{
                duration: 1,
                ease: [0.56, 0.03, 0.12, 1.04],
              }}
            />
          </div>

          <div
            ref={ref}
            className="w-full mb-[30px] flex flex-col items-end justify-end gap-4"
          >
            <motion.div
              variants={containerVariants}
              initial={'hidden'}
              animate={inView ? 'visible' : 'hidden'}
              className="w-[80%] max-[800px]:my-6 max-[950px]:w-[90%] max-[600px]:w-full"
            >
              {events.map((event) => (
                <motion.div
                  variants={itemVariants}
                  className="flex items-start justify-between gap-4 border-b py-3 min-[600px]:px-3 max-[600px]:px-0 "
                  key={event.id}
                >
                  <div className="flex items-end gap-4  ">
                    <p className="flex flex-col font-ebGaramond items-start">
                      <span>{event?.day}</span>
                      <span>{event?.month}</span>
                    </p>
                    <h2 className="font-bold font-ebGaramond text-[30px] max-[800px]:text-[24px] ">
                      {event.date}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold font-belleze text-end text-[20px] max-[600px]:text-[16px]">
                      {event.name}{' '}
                    </h2>
                    <p className="text-[18px] max-[600px]:text-[16px] capitalize font-ebGaramond text-end">
                      {event?.location} | {event.time}{' '}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
