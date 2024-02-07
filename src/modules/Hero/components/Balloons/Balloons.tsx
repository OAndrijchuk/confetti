import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  img: StaticImageData;
  alt: string;
  className: string;
};

const Balloons = ({ img, alt, className }: Props) => {
  return (
    <div className={`absolute -z-[1] ${className}`}>
      <div className="rounded-full absolute w-full h-full bg-[#fcf0df] blur-[300px]"></div>
      <Image className="absolute w-full h-full" src={img} alt={alt} />
    </div>
  );
};

export default Balloons;
