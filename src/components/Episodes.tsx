import { CheckCircle, Lock } from '@phosphor-icons/react';

interface EpisodesProps {
  title: string;
  slug: string;
  avaliableAt: string;
  type: 'free' | 'premium';
}

export function Episodes(props: EpisodesProps) {
  const isEpisodeAvailableFree = props.type === 'free';

  return (
    <a href="#">
      <span className="text-gray-300">Terça • 22 de junho • 19h00</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isEpisodeAvailableFree ? (
            <span className="text-sm flex items-center gap-2 text-blue-500 font-medium">
              <CheckCircle size={20} weight="bold" />
              Episodio Liberado
            </span>
          ) : (
            <span
              title="Em breve disponivel para usuarios comuns"
              className="text-sm flex items-center gap-2 text-orange-400 font-medium"
            >
              <Lock size={20} weight="bold" />
              Em Breve
            </span>
          )}

          <span className="text-xs text-orange-500 px-2 rounded py-[0.125rem] border-2 border-orange-500 font-bold">
            {props.type === 'free' ? 'Novo ✦' : 'Premium 🜲'}
          </span>
        </header>

        <strong className="text-zinc-100 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}
