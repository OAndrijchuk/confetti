import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { Container, Section, SectionTitle } from '@/components';
import React from 'react';
import { ContactForm } from './Components';

const Contacts = () => {
  return (
    <Section className="pb-[80px]" id="contact">
      <Container className=" xl:flex xl:items-center">
        <Container className="xl:px-0 xl:w-fit xl:m-0">
          <div className="xl:w-[333px]">
            <SectionTitle className="xl:ml-0 xl:text-left">
              Kontakty
            </SectionTitle>
            <p className="font-anzeigen uppercase text-center text-main text-[28px] font-medium leading-[22px] -tracking-[0.28px] w-56 mx-auto mb-6 md:text-[24px] md:leading-[120%] xl:text-left xl:ml-0 xl:text-[40px] xl:w-full xl:leading-[98%]">
              Confetti - Studio Dekoracij Balonami Warszawa
            </p>
            <address className="flex flex-col items-center font-inter font-medium text-[20px] leading-6 not-italic md:text-[24px] md:leading-[29px]">
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center justify-center hover:text-accent transition-colors xl:justify-start">
                  <SpriteSVG name="phone" />
                  <a href="tel:+48793351407">+48 793 351 407</a>
                </li>
                <li className="flex gap-2 items-center justify-center hover:text-accent transition-colors">
                  <SpriteSVG name="email" />
                  <a href="mailto:confettibalony@gmail.com">
                    confettibalony@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </Container>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contacts;
