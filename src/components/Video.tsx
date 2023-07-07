import { Player, Youtube, DefaultUi } from '@vime/react';
import '@vime/core/themes/default.css';
import { gql, useQuery } from '@apollo/client';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from '@phosphor-icons/react';

const GET_EPISODE_BY_SLUG_QUERY = gql`
  query GetEpisodeBySlug($slug: String) {
    episode(where: { slug: $slug }) {
      title
      id
      description
      videoId
      userstar {
        avatarURL
        bio
        name
        nickname
      }
    }
  }
`;

interface GetEpisodeBySlug {
  episode: {
    title: string;
    id: string;
    description: string;
    videoId: string;
    userstar: {
      avatarURL: string;
      bio: string;
      name: string;
      nickname: string;
    };
  };
}

interface VideoProps {
  episodeSlug: string | undefined;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetEpisodeBySlug>(GET_EPISODE_BY_SLUG_QUERY, {
    variables: {
      slug: props.episodeSlug,
    },
  });

  // Loading Screen
  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.episode.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px]">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="font-semibold text-zinc-400">Spy x Family</h1>
            <h2 className="text-2xl font-bold">{data.episode.title}</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {data.episode.description}
            </p>

            <div className="gap-4 mt-6 flex items-center">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.episode.userstar.avatarURL}
                alt="usuário"
              />
              <div className="leading-relaxed">
                <strong className="text-2xl block font-bold">
                  {data.episode.userstar.name}
                </strong>
                <span className="text-sm block text-zinc-500">
                  {data.episode.userstar.nickname}
                </span>
                <span className="text-base block max-w-sm font-medium text-zinc-300">
                  {data.episode.userstar.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 bg-orange-500 hover:brightness-75 transition-all duration-300 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <DiscordLogo size={24} weight="bold" />
              comunidade do discord
            </a>

            <a
              href="#"
              className="transition-all duration-300 hover:bg-orange-500 hover:text-zinc-100 p-4 border-orange-500 border-2 text-orange-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <Lightning size={24} weight="bold" />
              torne-se premium
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 flex items-stretch gap-6 hover:brightness-90 transition-colors rounded overflow-hidden"
          >
            <div className="bg-orange-600 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Baixar Episódio</strong>
              <p className="text-sm text-gray-200 mt-2">
                Faça o download deste episódio para assistir offline sempre que
                quiser
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 flex items-stretch gap-6 hover:brightness-90 transition-colors rounded overflow-hidden"
          >
            <div className="bg-orange-600 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers Exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Curtiu demais essa série? baixe os wallpapers exclusivos e
                personalize o seu dispositivo
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
