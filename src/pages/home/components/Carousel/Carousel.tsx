import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

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
            src="/src/assets/animeAd.png"
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

        <SwiperSlide>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/F3D3A70A0ADEAF78D4713869F9492CFDF2A18687862E45AD4B388246E474B845/scale?width=1200&aspectRatio=1.78&format=jpeg"
            alt=""
            className="max-w-fit overflow-hidden object-fill"
            width={400}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://gamerwk.sgp1.cdn.digitaloceanspaces.com/2022/04/Spy-x-Family-25-Episode.jpg"
            alt=""
            className="max-w-fit overflow-hidden object-fill"
            width={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={400}
            className="max-w-fit overflow-hidden object-fill"
            src="https://multiversonoticias.com.br/wp-content/uploads/2023/06/the-boys-season-31.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
