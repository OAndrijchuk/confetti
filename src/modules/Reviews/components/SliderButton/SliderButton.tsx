import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React from 'react';

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const SliderButton = ({ className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative p-4 rounded-full border-solid border border-[#d2d2d2] hover:bg-[#d2d2d2] transition-colors ${className}`}
    >
      <span className="block w-6 h-6">
        <SpriteSVG name="chevron" />
      </span>
    </button>
  );
};

export default SliderButton;
