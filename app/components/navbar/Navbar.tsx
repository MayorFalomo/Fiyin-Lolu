'use client';
import React from 'react';
import { navList } from './nav';
import Anchored from '../animations/AnchorLink';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="border-b">
      <div className="mx-auto my-[40px] w-[70%]">
        <ul className="flex items-center gap-4 justify-between font-ebGaramond ">
          {navList.map((res) => (
            <li key={res.id}>
              <Anchored
                className="py-1 hover:border-t hover:border-b border-black/40 transition-all duration-300 ease-in-out "
                href={res.path}
              >
                {res.title}
              </Anchored>
            </li>
          ))}
          {/* <img src="/Vector.png" alt="img" /> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
