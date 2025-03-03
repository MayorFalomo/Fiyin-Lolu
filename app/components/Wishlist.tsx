'use client';
import React, { useState } from 'react';
import Texts from './Texts';
import FadeIn from './animations/FadeIn';
import { AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';
import LiquidButton from './animations/LiquidButton';

type Props = {};

const Wishlist = (props: Props) => {
  const [showAcct, setShowAcct] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div
      id="wishlist"
      className="flex flex-col items-center justify-center min-h-[70vh] bg-beige w-screen"
    >
      <div>
        <h2 className="text-4xl font-bold font-petrona text-center">Our Wishlist</h2>
        <Texts className=" w-[60%] mt-4 mx-auto text-lg font-ebGaramond text-center">
          While your presence on our big day is the greatest gift, If you'd like to share
          in our joy on our big day through a gift, please visit our wishlist and if you'd
          rather send monetary contributions towards our future, It would be cherished
          with our biggest love.
        </Texts>
      </div>
      <div className="flex items-center gap-6">
        <LiquidButton
          text={'View our Wishlist'}
          className="bg-black text-white mt-[30px] font-belleze "
          liquidColor="#fff"
          hoverTextColor="#000"
          hoverBorderColor="black"
          onClick={() => {
            window.open(
              'https://mywishlist.online/w/o8lsky/jesuloluwas-wishlist',
              '_blank'
            );
          }}
        />
        <LiquidButton
          text={showAcct ? 'Hide acct details' : 'Send the Money'}
          className="bg-white mt-[30px] font-belleze "
          liquidColor="#000"
          hoverBorderColor="black"
          onClick={() => {
            setShowAcct(!showAcct);
            setCopied(false);
          }}
        />
      </div>

      <AnimatePresence>
        {showAcct && (
          <FadeIn className="mt-[40px]">
            <h3 className="flex items-center justify-center gap-4 text-2xl font-bold text-center">
              <span className="font-light font-ebGaramond ">Acct No: </span>
              <span>0726008292</span>
              {
                <span
                  onClick={() => {
                    setCopied(true);
                    navigator.clipboard.writeText('0726008292');
                    toast.success('Account details copied to clipboard');
                  }}
                  className="ml-4 cursor-pointer"
                >
                  {copied ? <Check /> : <Copy />}
                </span>
              }
            </h3>
            <Texts className="mt-3 text-2xl text-center">Bank: GTBank</Texts>
            <Texts className="mt-3 text-2xl text-center">
              Acct Name: Falomo Mayowa Damilola
            </Texts>
          </FadeIn>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Wishlist;
