'use client';

import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { Container, Section } from '@/components';
import React, { useEffect } from 'react';

const links = [
  { label: 'główna', link: '#hero' },
  { label: 'O nas', link: '#aboutUs' },
  { label: 'Recenzje', link: '#response' },
  { label: 'Kontakty', link: '#contact' },
];

type Props = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const BurgerMenu = ({ toggleMenu, isOpen }: Props) => {
  useEffect(() => {
    const handleEscape = (e: React.KeyboardEvent): void => {
      if (e.code === 'Escape') {
        toggleMenu();
      }
    };
    window.addEventListener(
      'keydown',
      handleEscape as unknown as EventListener
    );
    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape as unknown as EventListener
      );
    };
  }, [isOpen, toggleMenu]);
  return (
    <Section
      className={`fixed top-0 pt-[0] ${
        isOpen ? 'translate-x-0' : '-translate-y-full '
      } w-full min-h-screen z-[99999] bg-white transition-all duration-300`}
    >
      <Container className="py-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="font-anzeigen uppercase text-accent text-[36px] leading-7 -tracking-[1%] font-medium"
          >
            Confetti
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            className="w-6 h-6 text-main  transition-all hover:text-accent hover:scale-110"
          >
            <SpriteSVG name="closeBtn" />
          </button>
        </div>
        <nav>
          <ul className="flex items-center justify-center flex-col w-full mt-[60px] gap-6 font-anzeigen uppercase text-main text-[24px] leading-[19px] -tracking-[1%] font-medium md:mt-[80px] md:gap-9 md:text-[40px] md:leading-8 xl:text-[64px] xl:leading-[51px]">
            {links.map(({ link, label }) => (
              <li
                key={label}
                className="transition-all hover:text-accent  hover:scale-110 "
              >
                <a href={link} onClick={toggleMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Section>
  );
};

export default BurgerMenu;
