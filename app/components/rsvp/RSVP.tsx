import React from 'react';
import Form from './Form';
import Texts from '../Texts';

type Props = {};

const RSVP = (props: Props) => {
  return (
    <div
      id="rsvp"
      className="bg-black relative flex flex-col items-center justify-center min-h-screen w-screen py-[40px]"
    >
      <div className=" w-[90%]   mx-auto flex items-start justify-between text-white text-center">
        <div className="w-full">
          <h1 className="text-[40px] text-start mb-4 font-belleze">KINDLY RSVP</h1>
          <Texts className="max-w-[350px] text-start mb-6">
            We can't wait to celebrate our special day with you and your presence would
            mean the world to us! Please let us know if you will be able to join in the
            joy and celebration by
            <span className=" ml-2">October 30th, 2025.</span>
          </Texts>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default RSVP;
