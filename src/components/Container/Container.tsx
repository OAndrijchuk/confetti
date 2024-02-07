import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`container mx-auto px-5 md:px-[30px] xl:px-28 ${className}`}
    >
      {children}
    </div>
  );
}
