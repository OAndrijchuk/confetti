import React from 'react';

const SectionTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h2
      className={`font-anzeigen uppercase text-center mx-auto mb-9 text-accent text-[36px] font-medium -tracking-[1px] leading-[110%] md:text-[48px] md:mb-12 xl:text-[100px] xl:mb-16 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
