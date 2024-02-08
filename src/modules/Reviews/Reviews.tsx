'use client';

import { Container, Section, SectionTitle, Slider } from '@/components';
import React from 'react';
import { content } from './assets/content';
import { Response, SliderButton } from './components';

const Reviews = () => {
  const responses = content.map(({ owner, message }, index) => (
    <Response key={index} owner={owner} text={message} />
  ));
  return (
    <Section id="response">
      <Container>
        <SectionTitle>Recenzje</SectionTitle>
        <Slider nextId=".nextRes" prevId=".prevRes" cardList={responses} />
        <div className="hidden relative items-center justify-center gap-6 md:flex xl:hidden">
          <SliderButton className="prevRes swiper-button-prev" />
          <SliderButton className="nextRes swiper-button-next rotate-180" />
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;
