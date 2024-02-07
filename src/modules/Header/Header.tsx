'use client';

import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React, { useEffect, useState } from 'react';
import { BurgerMenu } from '..';
import { Logo } from '@/components';
import throttle from 'lodash.throttle';

const Header = () => {
  const trackScrollThrottle = throttle(trackScroll, 500);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', trackScrollThrottle);
    return () => {
      window.removeEventListener('scroll', trackScrollThrottle);
    };
  }, []);

  const toggleMenuOpen = () =>
    setIsMenuOpen((prevState: boolean) => !prevState);

  function trackScroll() {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
  }

  return (
    <>
      <header className="container flex z-[9999] justify-between fixed top-0 left-1/2 mx-auto px-5 pt-[30px] md:px-[30px] xl:px-[112px] xl:pt-[40px] -translate-x-1/2">
        <div
          className={`${
            isScrolling ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } transition-all`}
        >
          <Logo />
        </div>
        <button
          type="button"
          onClick={toggleMenuOpen}
          className="flex items-center gap-[10px] transition-all hover:text-accent"
        >
          <span
            className={`font-anzeigen uppercase text-[24px] leading-[90%] font-medium ${
              isScrolling ? 'block' : 'hidden'
            } `}
          >
            menu
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-extraAccent">
            <SpriteSVG name="menu" />
          </span>
        </button>
      </header>
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenuOpen} />
    </>
  );
};

export default Header;
