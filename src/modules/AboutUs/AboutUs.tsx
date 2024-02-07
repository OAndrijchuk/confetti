import { Container, Section, Slider } from '@/components';
import React from 'react';
import { AdvantageCard } from './components';
import { content } from './assets/content';

const AboutUs = () => {
  const slides = content.map(({ title, text, color, textStyle }) => (
    <AdvantageCard
      key={title}
      title={title}
      text={text}
      containerStyle={color}
      textStyle={textStyle}
    />
  ));

  return (
    <Section id="aboutUs">
      <Container>
        <h2 className="font-anzeigen uppercase text-center mx-auto mb-4 text-main text-[36px] font-medium -tracking-[1px] leading-[78%] md:text-[48px] md:leading-[79%] md:w-[400px] xl:text-[56px] xl:mb-6">
          Kreatywny zespół dekoratorów
        </h2>
        <p className="font-inter text-center mx-auto mb-9 text-extraText text-[20px] font-medium -tracking-[0.2px] leading-[140%] md:text-[1.5rem] md:w-[596px] md:mb-12 xl:leading-[120%] xl:w-[700px] xl:mb-16">
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </p>
        <ul className="hidden gap-6 md:grid xl:grid-cols-2">{slides}</ul>
        <div className="md:hidden">
          <Slider cardList={slides} />
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
