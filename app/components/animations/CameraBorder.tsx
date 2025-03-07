import React from 'react';

interface CameraBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const CameraBorder = ({ children, className = '' }: CameraBorderProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Top-left corner */}
      <span className="absolute -top-2 -left-2 w-2 h-2 border-t-2 border-l-2 border-[#C9C9C9]" />

      {/* Top-right corner */}
      <span className="absolute -top-2 -right-2 w-2 h-2 border-t-2 border-r-2 border-[#C9C9C9]" />

      {/* Bottom-left corner */}
      <span className="absolute -bottom-2 -left-2 w-2 h-2 border-b-2 border-l-2 border-[#C9C9C9]" />

      {/* Bottom-right corner */}
      <span className="absolute -bottom-2 -right-2 w-2 h-2 border-b-2 border-r-2 border-[#C9C9C9]" />

      {/* Content */}
      <div className="px-2">{children}</div>
    </div>
  );
};
