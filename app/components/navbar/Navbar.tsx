'use client';
import React from 'react';
import { navList } from './nav';
import Anchored from '../animations/AnchorLink';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="mx-auto my-[40px] w-[70%] max-[750px]:w-[90%] max-[8]:">
        <ul className="flex max-[600px]:flex-wrap items-center gap-6 justify-between max-[600px]:justify-center font-ebGaramond ">
          {navList.map((res) => (
            <li className="relative group inline-block" key={res.id}>
              <Anchored
                className="relative py-1 whitespace-nowrap  transition-all duration-300 ease-in-out "
                href={res.path}
              >
                {res.title}
              </Anchored>
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#000] scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            </li>
          ))}
          {/* <img src="/Vector.webp" alt="img" /> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
