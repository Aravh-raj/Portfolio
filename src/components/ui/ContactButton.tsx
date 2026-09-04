import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  className = '',
  href,
}) => {
  const content = (
    <span className="relative z-10 block">{label}</span>
  );

  const buttonStyles: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  const classes = `
    inline-flex items-center justify-center rounded-full
    font-medium uppercase tracking-widest text-white
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    transition-all duration-300 hover:scale-105 active:scale-95
    hover:brightness-110 cursor-pointer select-none
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={classes} style={buttonStyles}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} style={buttonStyles}>
      {content}
    </button>
  );
};

export default ContactButton;
