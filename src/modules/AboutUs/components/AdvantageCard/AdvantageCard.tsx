import React from 'react';

type Props = {
  title: string;
  text: string;
  titleStyle?: string;
  containerStyle?: string;
  textStyle?: string;
};

const AdvantageCard = ({
  title,
  text,
  titleStyle,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center p-6 h-[calc(100%-36px)] mx-auto rounded-3xl bg-[#808080] text-white md:h-auto md:p-12 md:w-[596px] ${containerStyle}`}
    >
      <h3
        className={`font-anzeigen uppercase text-left mb-[55px] text-[24px] font-medium -tracking-[0.24px] leading-[120%] md:text-[48px] md:leading-[95%] md:w-[400px] md:mb-10 ${titleStyle}`}
      >
        {title}
      </h3>
      <p
        className={`font-inter text-[1rem] text-extraAccent font-medium -tracking-[0.16px] leading-[145%] md:text-[20px] ${textStyle}`}
      >
        {text}
      </p>
    </div>
  );
};

export default AdvantageCard;
