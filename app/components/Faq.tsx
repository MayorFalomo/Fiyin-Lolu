'use client';
import React from 'react';
import { Faqs } from './faq/FaqStore';
import { Minus, Plus } from 'lucide-react';
import Texts from './Texts';
import { motion } from 'framer-motion';
import SmoothBorder from './animations/SmoothBorder';

type Props = {};

const Faq = (props: Props) => {
  const [seeMore, setSeeMore] = React.useState(6);
  const [faqTitle, setFaqTitle] = React.useState('all');
  const [faqID, setFaqID] = React.useState(0);

  return (
    <div className=" w-screen p-2 bg-offWhite">
      <div id="faq" className="w-[90%]  bg-offWhite mt-[40px] pb-[60px] mx-auto">
        <h1 className="relative text-[40px] max-[600px]:text-[30px] text-start mb-4 font-belleze">
          FAQ{' '}
          <span className=" text-[20px] max-[480px]:text-[16px] ">
            (Frequently asked questions).
          </span>
          <SmoothBorder />
        </h1>

        <div className="w-[80%] max-[1100px]:w-[90%] max-[800px]:w-full mt-[40px] flex max-[480px]:flex-col justify-between items-start ">
          <div className=" w-fit flex flex-wrap min-[480px]:flex-col max-[480px]:justify-center gap-4 mt-4">
            {Faqs.filter((item) => item.title === item.title).map((faq, index) => (
              <div
                className={`${
                  faq.title === faqTitle ? 'border-b border-black' : ''
                } py-1`}
                key={faq.id}
              >
                <button
                  onClick={() => {
                    setFaqID(faq.id);
                    setFaqTitle(faq.title ?? 'all');
                  }}
                >
                  {faq.title}
                </button>
              </div>
            ))}
          </div>
          <div className="w-[500px] max-[750px]:w-[400px] max-[580px]:w-[320px] max-[480px]:w-full">
            {Faqs.slice(0, 9).map((faq) => (
              <motion.div
                initial={{ height: 80 }}
                animate={{ height: faqID === faq.id ? 120 : 80 }}
                exit={{ height: 80 }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="flex flex-col items-start justify-center cursor-pointer border-b border-black"
                key={faq.id}
              >
                <div className="w-full py-3">
                  <div
                    onClick={() => {
                      setFaqID(faqID === faq.id ? 0 : faq.id);
                      setFaqTitle(faq.title ?? 'all');
                    }}
                    className="font-belleze flex items-start justify-between"
                  >
                    <h2 className="font-semibold">{faq.question}</h2>
                    <p className="">{faqID === faq.id ? <Minus /> : <Plus />}</p>
                  </div>

                  {faqID === faq.id && (
                    <Texts enableAnimation className="mt-3">
                      {faq.answer}
                    </Texts>
                  )}
                </div>
              </motion.div>
            ))}
            {/* {seeMore < Faqs.length && (
              <button>
                <Texts onClick={() => setSeeMore(seeMore + 3)} enableAnimation>
                  See More
                </Texts>
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
