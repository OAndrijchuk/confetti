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
  return (
    <>
      <Swiper
        tag="div"
        className="swiper-wrapper"
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
        <div className="swiper-wrapper">
          {cardList.map((card, index) => (
            <SwiperSlide tag="div" key={index} className="swiper-slide">
              {card}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
