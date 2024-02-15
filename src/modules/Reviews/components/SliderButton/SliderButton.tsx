import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  svgIcon?: string;
};

const SliderButton = ({ svgIcon = 'chevron', className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(
        `cursor-pointer relative p-4 rounded-full border-solid border border-[#d2d2d2] hover:bg-[#d2d2d2] transition-colors `,
        className
      )}
    >
      <span className="block w-6 h-6">
        <SpriteSVG name={svgIcon} />
      </span>
    </button>
  );
};

export default SliderButton;
