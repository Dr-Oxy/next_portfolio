import Image from 'next/image';
import React from 'react';

const Button = React.forwardRef(function Button(
  {
    text,
    onClick,
    styles,
    disabled,
    href,
    type,
    iconSrc,
    iconSVG,
    iconAlt,
    iconWidth,
    iconHeight,
  },
  ref,
) {
  return (
    <button
      type={type}
      href={href}
      ref={ref}
      disabled={disabled}
      className={`${
        styles ||
        'text-base rounded bg-darkRed text-white w-full hover:bg-darkRed/80 py-2 px-4'
      } capitalize flex items-center justify-center`}
      onClick={onClick}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth || 32}
          height={iconHeight || 32}
        />
      )}

      <span>{text}</span>
    </button>
  );
});

export default Button;
