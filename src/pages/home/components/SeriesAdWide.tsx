import { BookmarkSimple, Play } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface SeriesAdWideProps {
  primary: string;
  secondary: string;
  btnColor: string;
  imageUrl?: string;
}

export function SeriesAdWide({
  primary,
  secondary,
  btnColor,
  imageUrl,
}: SeriesAdWideProps) {
  return (
    <div
      className={`lg:relative block rounded lg:w-[1100px] bg-gradient-to-r ${primary} ${secondary} md:p-3`}
    >
      <div className="bg-zinc-800 sm:text-base text-xs md:mx-auto md:max-w-[1100px] h-full rounded overflow-hidden text-zinc-200 space-y-4">
        <img
          src={`${imageUrl}`}
          className="w-full lg:h-[400px] object-cover"
          alt=""
        />
        <div className="px-4 pt-2 pb-8 space-y-4">
          <p className="sm:max-w-xl md:max-w-4xl">
            Houve um homem que conquistou tudo aquilo que o mundo tinha a
            oferecer, o lendário Rei dos Piratas, Roger. Capturado e condenado à
            execução pelo Governo Mundial, suas últimas palavras lançaram
            legiões aos mares. "Meu tesouro? Se quiserem, podem pegá-lo.
            Procurem-no! Ele contém tudo que este mundo pode oferecer!". Foi a
            revelação do maior
          </p>
          <div className="flex gap-2 items-center">
            <Link
              to={'#'}
              className={`flex items-center justify-center font-medium text-zinc-200 rounded ${btnColor} gap-2 py-2 w-40 sm:py-4 sm:w-52`}
            >
              <Play size={23} weight="bold" />
              COMEÇAR ASSISTIR
            </Link>
            <Link to={'#'}>
              <BookmarkSimple size={25} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
