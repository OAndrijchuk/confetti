import { Container, Logo } from '@/components';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-between py-8 border-t border-accent">
          <Logo />
          <p className="font-inter text-main font-medium leading-[19px] -tracking-[1%]">
            confetti © 2023
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
