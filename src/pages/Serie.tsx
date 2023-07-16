import { useParams } from 'react-router-dom';
import { FooterVideoPage } from '../components/Footer.tsx';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';
import { gql, useQuery } from '@apollo/client';

const GET_SHOWS_ID = gql`
  query {
    shows(stage: PUBLISHED) {
      id
      title
    }
  }
`;

interface ShowIdProps {
  shows: {
    id: string;
    title: string;
  }[];
}

export function Serie() {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useQuery<ShowIdProps>(GET_SHOWS_ID);

  const ID = data?.shows.map((ep) => ep.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 lg:flex-row">
        {slug ? (
          <Video episodeSlug={slug} episodeID={ID} />
        ) : (
          <div className="flex-1 bg-zinc-900" />
        )}

        <Sidebar slug={slug} />
      </main>
      <FooterVideoPage />
    </div>
  );
}
