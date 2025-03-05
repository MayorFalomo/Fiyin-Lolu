import React from 'react';

interface LiquidButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  liquidColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  showBorder?: boolean;
  hoverBorderColor?: string;
  ariaLabel?: string;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({
  text,
  onClick,
  className = '',
  liquidColor,
  textColor,
  hoverTextColor,
  borderColor,
  showBorder = true,
  hoverBorderColor,
  ariaLabel = 'click',
}) => {
  const buttonStyle = {
    '--liquid-color': liquidColor || '#3498db',
    '--text-color': textColor || '#4a4a4a',
    '--hover-text-color': hoverTextColor || 'white',
    '--border-color': borderColor || '#4a4a4a',
    '--hover-border-color': hoverBorderColor || borderColor || '#4a4a4a',
    '--border-width': showBorder ? '2px' : '0px',
  } as React.CSSProperties;

  return (
    <button
      className={`liquid-button ${className}`}
      onClick={onClick}
      style={buttonStyle}
      aria-label={ariaLabel}
    >
      <span className="liquid-button-text">{text}</span>
      <div className="liquid"></div>
    </button>
  );
};

export default LiquidButton;
