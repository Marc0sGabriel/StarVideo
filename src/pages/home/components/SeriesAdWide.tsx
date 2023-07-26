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
          <h1 className="text-base font-bold sm:text-2xl">
            Boruto: Next Generations
          </h1>
          <p className="sm:max-w-xl md:max-w-4xl">
            Uzumaki Boruto, filho de Uzumaki Naruto, o Sétimo Hokage, se
            inscreveu na Academia Ninja para aprender a ser um verdadeiro ninja.
            Os outros estudantes o ignoram por ser "apenas o filho do Hokage",
            mas a paixão e a personalidade do Boruto vai acabar com todos esses
            preconceitos. Quando uma série de misteriosos eventos começa a se
            desenrolar, cabe a Boruto e seus novos amigos a investigá-los. Como
            um tornado, Boruto entra no coração de todos: sua história está
            prestes a começar!
          </p>
          <div className="flex gap-2 items-center">
            <Link
              to={'episode/boruto'}
              className={`flex items-center justify-center font-medium text-zinc-200 rounded ${btnColor} gap-2 py-2 w-40 sm:py-4 sm:w-52`}
            >
              <Play size={23} weight="bold" />
              COMEÇAR ASSISTIR
            </Link>
            <button type="button" className="cursor-pointer">
              <BookmarkSimple size={25} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
