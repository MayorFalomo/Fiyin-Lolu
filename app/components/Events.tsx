'use client';
import React from 'react';
import Texts from './Texts';
import FadeInText from './animations/FadeInText';
import { motion, useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

interface Event {
  id: number;
  name: string;
  day: string;
  month: string;
  date: number;
  time: string;
  location: string;
}

const Events: React.FC = () => {
  const [startAnimation, setStartAnimation] = React.useState(false);

  const events: Event[] = [
    {
      id: 1,
      name: 'EXCHANGE OF VOWS',
      day: 'FRI',
      month: 'NOV',
      date: 12,
      time: '10-2pm',
      location: 'THE ROYAL EVENTS CENTER',
    },
    {
      id: 2,
      name: 'WEDDING DAY',
      day: 'SAT',
      month: 'NOV',
      date: 13,
      time: '10-6pm',
      location: 'THE MONARCH EVENTS CENTER',
    },
    {
      id: 3,
      name: 'AFTER PARTY, FAAJI!',
      day: 'SAT',
      month: 'NOV',
      date: 13,
      time: '8-4pm',
      location: 'HADES NIGHT CLUB',
    },
  ];

  // const ref = React.useRef(null);
  // const inView = useInView({
  //   triggerOnce: false,
  //   threshold: 0.5,
  // });

  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: false, // Animation will trigger every time it comes into view
    amount: 0.3, // Only needs 30% of the element to be visible
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

  // Item animation variants (bottom to top)
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
    <div className="max-h-[100vh] w-screen">
      <div id="events" className="w-[90%] mx-auto flex items-start">
        <div
          ref={ref}
          className="h-screen flex flex-col gap-4 w-fit items-star justify-start "
        >
          <p className="bg-black mx-auto h-[200px] w-0.5"></p>
          <div>
            <h1 className="flex flex-col scroll-m-20 text-4xl leading-[60px] font-petrona font-medium lg:text-[60px]">
              <FadeInText delay={0.2} className=" whitespace-nowrap">
                Wedding &
              </FadeInText>
            </h1>
            <div className="flex items-center justify-end gap-4">
              <img className="w-[50px]" src="/vector.png" alt="img" />
              <h1 className=" scroll-m-20 text-4xl leading-[60px] font-petrona font-medium lg:text-[60px]">
                <FadeInText delay={0.5} className="text-end mt-6">
                  Events
                </FadeInText>
              </h1>
            </div>
          </div>
          <p className="bg-black/50 mx-auto mt-3 h-full w-0.5"></p>
        </div>
        <div className="w-full h-screen flex flex-col items-start justify-end">
          <div className="h-[250px] mt-3 w-[250px] ml-auto grayscale-[50] hover:grayscale-0 transition-all duration-700 ease-out object-cover flex flex-col items-center justify-start">
            <motion.img
              className="w-full h-full object-cover"
              src="/flower_ring.jpg"
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
              onAnimationEnd={() => {
                setStartAnimation(true);
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
              className="w-[80%]"
            >
              {events.map((event) => (
                <motion.div
                  variants={itemVariants}
                  className="flex items-start justify-between border-b p-3 "
                  key={event.id}
                >
                  <div className="flex items-start gap-4 ">
                    <p className="flex flex-col font-ebGaramond items-start">
                      <span>{event?.day}</span>
                      <span>{event?.month}</span>
                    </p>
                    <h2 className="font-bold font-ebGaramond text-[40px]">
                      {event.date}
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold font-belleze text-end text-[24px]">
                      {event.name}{' '}
                    </h2>
                    <p className="text-[18px] font-ebGaramond text-end">
                      {event?.location} | {event.time}{' '}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* <div className="w-fit h-full border border-red-600">
          <div className="border-b pb-3 border-black">
            <h2 className="scroll-m-20 text-3xl font-medium first:mt-0">
              Friday, November 28
            </h2>

            <Texts className="font-bold text-[20px] ">10:00 AM | Exchange Of Vows</Texts>
            <span className="font-belleze"> The Royal Events Park Center</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
