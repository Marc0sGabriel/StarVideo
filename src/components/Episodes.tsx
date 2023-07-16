import { CheckCircle, Lock } from '@phosphor-icons/react';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { MouseEvent } from 'react';

interface EpisodesProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'free' | 'premium';
}

export function Episodes(props: EpisodesProps) {
  const { slug } = useParams<{ slug: string | undefined }>();

  const isEpisodeAvailableFree = isPast(props.avaliableAt);
  const availableDateFormatted = format(
    props.avaliableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveEpisode = slug === props.slug;

  function handleNotAllowed(event: MouseEvent) {
    if (!isEpisodeAvailableFree) {
      event.preventDefault();
    }
  }

  return (
    <Link
      onClick={handleNotAllowed}
      to={`/series/episode/${props.slug}`}
      className={classNames('group', {
        'cursor-not-allowed opacity-80': !isEpisodeAvailableFree,
      })}
    >
      <span className="text-zinc-500">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-starBlue-400',
          {
            'bg-starBlue-500': isActiveEpisode,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isEpisodeAvailableFree ? (
            <span
              className={classNames(
                'text-sm flex items-center gap-2 text-blue-500 font-medium',
                {
                  'text-zinc-100': isActiveEpisode,
                }
              )}
            >
              <CheckCircle size={20} weight="bold" />
              Episodio Liberado
            </span>
          ) : (
            <span
              title="Em breve disponivel para usuários premium"
              className="text-sm flex items-center gap-2 text-starBlue-200 font-medium"
            >
              <Lock size={20} weight="bold" />
              Em Breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs text-starBlue-200 px-2 rounded py-[0.125rem] border-2 border-starBlue-200 font-bold',
              {
                '!text-zinc-200 !border-zinc-200': isActiveEpisode,
              }
            )}
          >
            {props.type === 'free' ? 'Novo ✦' : 'Premium 🜲'}
          </span>
        </header>

        <strong className="text-zinc-100 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
