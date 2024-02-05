import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className?: string
}

export default function Section({ children, className }: Props) {

  return <section className={`pt-20 md:pt-[104px] xl:pt-[164px] ${className}`}>
    {children}
  </section>;
}
