import { Container, Section, SectionTitle, Slider } from '@/components';
import React from 'react';
import { content } from './assets/content';
import { Response } from './components';

const Reviews = () => {
  const responses = content.map(({ owner, message }, index) => (
    <Response key={index} owner={owner} text={message} />
  ));
  return (
    <Section id="response">
      <Container>
        <SectionTitle>Recenzje</SectionTitle>
        <Slider cardList={responses} />
      </Container>
    </Section>
  );
};

export default Reviews;
