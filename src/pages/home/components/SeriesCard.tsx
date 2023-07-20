import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import './Carousel/SeriesCarousel/seriesCarousel.css';

const GET_SERIES_CARD_DATA = gql`
  query SeriesCardInfo {
    cards {
      title
      id
      slug
      infoCard {
        text
      }
      cardImage {
        url
        width
      }
    }
  }
`;

interface SeriesCardProps {
  cards: {
    title: string;
    id: string;
    slug: string;
    cardImage: {
      url: string;
      width: number;
    };

    infoCard: {
      text: string;
    };
  }[];
}

export function SeriesCard() {
  const { data } = useQuery<SeriesCardProps>(GET_SERIES_CARD_DATA);

  return (
    <div className="flex items-center h-full max-w-full overflow-hidden justify-center gap-9">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        navigation={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="seriesCardSwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {data?.cards.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <Link key={card.id} to={`/series/episode/${card.slug}`}>
                <div className="h-[250px] w-[150px] my-4">
                  <img
                    src={card.cardImage.url}
                    className="object-cover w-full h-full"
                    alt={card.title}
                    height={300}
                    width={150}
                  />
                  <h2 className="font-bold text-xs sm:text-sm mt-2">
                    {card.title}
                  </h2>
                  <span className="font-medium text-xs sm:text-sm text-zinc-500">
                    {card.infoCard.text}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
