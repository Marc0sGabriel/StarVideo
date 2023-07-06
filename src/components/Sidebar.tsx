import { gql, useQuery } from '@apollo/client';
import { Episodes } from './Episodes';

const GET_LESSONS_QUERY = gql`
  query {
    episodes(orderBy: publishedAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      episodeType
    }
  }
`;

interface GetEpisodesQueryResponse {
  episodes: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    episodeType: 'free' | 'premium';
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetEpisodesQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-900 p-6 border-l border-zinc-800">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-zinc-700 block">
        Proximos de Episodios
      </span>

      <div className="flex flex-col gap-8">
        {data?.episodes.map((episode) => {
          return (
            <Episodes
              key={episode.id}
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
