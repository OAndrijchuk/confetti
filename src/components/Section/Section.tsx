import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: Props) {
  return (
    <section className={`pt-20 ${className}`} id={id}>
      {children}
    </section>
  );
}
