import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React from 'react';

const Header = () => {
  return (
    <header className="container flex justify-between mx-auto px-5 md:px-[30px] xl:px-[112px]">
      <a href="#" className=" text-accent text-center">
        <SpriteSVG name="logo" />
      </a>
      <div className="flex items-center gap-[10px]">
        <span className="font-anzeigen text-[24px]">menu</span>
        <div className="w-6 h-6">
          <SpriteSVG name="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
