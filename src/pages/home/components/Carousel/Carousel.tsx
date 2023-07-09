import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/src/assets/Cyberpunk-Edgerunners-S1-Poster-en.jpg"
            alt=""
            className="max-w-fit overflow-hidden object-fill"
            width={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/horimiyaPoster.png"
            alt=""
            className="max-w-fit overflow-hidden object-fill"
            width={400}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
