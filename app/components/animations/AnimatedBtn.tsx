import React from 'react';

interface EpicButtonProps {
  href?: string;
  children: string;
  mode: 'light' | 'dark'; // Added mode prop
  onClick?: () => void;
  className?: string;
}

export function AnimatedBtn({
  href,
  children,
  mode,
  onClick,
  className,
}: EpicButtonProps) {
  const isLightMode = mode === 'light';

  return (
    <div
      onClick={onClick}
      className={`relative mt-4 block w-full min-w-[150px] max-w-[200px] h-[40px] ${
        isLightMode ? 'bg-black text-white' : 'bg-white text-black'
      } overflow-hidden transition-colors duration-300 delay-150 hover:bg-white hover:border-2 hover:border-black group`}
    >
      <div
        className={`absolute inset-0 ${
          isLightMode ? 'bg-black text-white' : 'bg-white text-black'
        } rounded-t-full transition-all duration-300 group-hover:rounded-none`}
      />
      <div
        className={`absolute inset-0 ${
          isLightMode ? 'bg-black text-white' : 'bg-white text-black'
        } rounded-none transition-all duration-300 group-hover:rounded-b-full`}
      />
      <div className="relative top-[10px] w-full h-[20px] uppercase overflow-hidden text-sm">
        <span
          className={`absolute w-full text-center ${
            isLightMode ? 'bg-black text-white' : 'bg-white text-black'
          } transform transition-transform duration-300 group-hover:translate-y-0`}
        >
          {children}
        </span>
        <span
          className={`absolute w-full text-center ${
            isLightMode ? 'bg-black text-white' : 'bg-white text-black'
          } transform transition-transform duration-300 group-hover:-translate-y-5`}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
