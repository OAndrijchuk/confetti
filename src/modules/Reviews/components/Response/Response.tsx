import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React from 'react';

type Props = {
  owner: string;
  text: string;
  ownerStyle?: string;
  containerStyle?: string;
  textStyle?: string;
};

const Response = ({
  owner,
  text,
  ownerStyle,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <div className="flex flex-col h-[calc(100%-36px)] justify-between p-6 rounded-3xl bg-extraAccent text-main md:h-[calc(100%-48px)]">
      <p
        className={`font-inter text-[1rem] font-medium -tracking-[0.16px] leading-[130%] mb-4 md:text-[20px] ${textStyle}`}
      >
        {text}
      </p>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 text-accent">
          <SpriteSVG name="user" />
        </div>
        <p className="font-inter text-extraText text-[1rem] font-medium -tracking-[0.16px] leading-[19px]">
          {owner}
        </p>
      </div>
    </div>
  );
};

export default Response;
