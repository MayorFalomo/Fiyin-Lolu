import React from 'react';
import BentoGrid from '../components/BentoGrid';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-[50px] text-center whitespace-nowrap font-belleze font-bold mb-2">
        Gallery{' '}
      </h1>
      <BentoGrid />
    </div>
  );
};

export default page;
