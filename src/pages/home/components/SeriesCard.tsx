import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

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
    <div className="flex my-10 gap-9">
      {data?.cards.map((card) => {
        return (
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
        );
      })}
    </div>
  );
}
