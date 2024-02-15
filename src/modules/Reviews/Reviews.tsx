'use client';

import { Container, Section, SectionTitle, Slider } from '@/components';
import React, { useEffect, useState } from 'react';
import { AddReviewForm, Response, SliderButton } from './components';
import Modal from '@/components/Modal/Modal';
import { getAllReviews } from '@/API/GeneralAPI';
import { Review } from './components/AddReviewForm/AddReviewForm';

const Reviews = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reviews, setReviews] = useState<React.ReactNode[]>([]);

  const toggleModal = () => setIsOpen(prev => !prev);

  const getReviews = async () => {
    const respons: Review[] = await getAllReviews();
    setReviews(
      respons.map(({ owner, message }, index) => (
        <Response key={index} owner={owner} text={message} />
      ))
    );
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Section id="response">
      <Container>
        <div className="relative">
          <SectionTitle>Recenzje</SectionTitle>
          <SliderButton
            svgIcon="plus"
            onClick={toggleModal}
            className="absolute -bottom-[20px] right-[75px] p-1 md:right-[242px] md:p-2 xl:right-[400px] xl:p-4"
          />
        </div>
        <Slider nextId=".nextRes" prevId=".prevRes" cardList={reviews} />
        <div className="hidden relative items-center justify-center gap-6 md:flex xl:hidden">
          <SliderButton className="prevRes swiper-button-prev" />
          <SliderButton className="nextRes swiper-button-next rotate-180" />
        </div>
      </Container>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <AddReviewForm closeModal={toggleModal} getReviews={getReviews} />
        </Modal>
      )}
    </Section>
  );
};

export default Reviews;
