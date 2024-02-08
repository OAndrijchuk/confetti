'use client';

import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './assets/customSlider.css';

type Props = {
  cardList: React.ReactNode[];
  nextId?: string;
  prevId?: string;
};

const Slider = ({ cardList, nextId = '', prevId = '' }: Props) => {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        tag="div"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{ nextEl: nextId, prevEl: prevId }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ disableOnInteraction: true }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        <ul className="swiper-wrapper">
          {cardList.map((card, index) => (
            <SwiperSlide tag="li" key={index} className="swiper-slide">
              {card}
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </>
  );
};

export default Slider;
