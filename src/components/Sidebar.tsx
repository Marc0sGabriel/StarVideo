import { gql, useQuery } from '@apollo/client';
import { Episodes } from './Episodes';
import { useParams } from 'react-router-dom';

const GET_EPISODES_QUERY = gql`
  query MyQuery($slug: String) {
    show(where: { slug: $slug }, stage: PUBLISHED) {
      title
      showEpisodes(orderBy: publishedAt_ASC) {
        title
        id
        slug
        availableAt
        episodeType
      }
    }
  }
`;

interface GetEpisodesShowQueryResponse {
  show: {
    title: string;
    showEpisodes: {
      id: string;
      title: string;
      slug: string;
      availableAt: string;
      episodeType: 'free' | 'premium';
    }[];
  };
}

interface NextEpisodesProps {
  slug: string | undefined;
}

export function Sidebar(props: NextEpisodesProps) {
  const { data } = useQuery<GetEpisodesShowQueryResponse>(GET_EPISODES_QUERY, {
    variables: {
      slug: props.slug,
    },
  });

  const { slug } = useParams<{ slug: string }>();

  return (
    <aside className="lg:w-[348px] md:inline hidden bg-gray-800 p-6 border-l border-zinc-800">
      <span className="font-bold text-zinc-100 text-2xl pb-6 mb-6 border-b border-zinc-700 block">
        Próximos de Episódios
      </span>

      <div className="flex flex-col gap-8">
        {data?.show.showEpisodes.map((episode) => {
          return (
            <Episodes
              key={slug}
              title={episode.title}
              slug={episode.slug}
              avaliableAt={new Date(episode.availableAt)}
              type={episode.episodeType}
            />
          );
        })}
      </div>
    </aside>
  );
}
