import { GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function FooterVideoPage() {
  return (
    <>
      <footer className="border-zinc-800 border-t bg-gradient-to-b from-gray-800 via-gray-800 to-zinc-900 w-full flex justify-center text-zinc-400">
        <div className="my-10 w-full items-center space-y-11">
          <div className="flex justify-around items-start">
            <div className="flex text-sm sm:text-base flex-col text-zinc-500 gap-2">
              <h1 className="text-base sm:text-xl text-zinc-300">Plataforma</h1>
              <Link
                className="hover:underline hover:text-zinc-300 w-fit transition-all"
                to={'#'}
              >
                Planos
              </Link>
              <Link
                className="hover:underline hover:text-zinc-300 w-fit transition-all"
                to={'#'}
              >
                Notícias
              </Link>
              <Link
                className="hover:underline hover:text-zinc-300 w-fit transition-all"
                to={'#'}
              >
                Suporte
              </Link>
            </div>

            <div className="flex text-sm sm:text-base flex-col gap-4 text-zinc-500">
              <h1 className="text-base sm:text-xl text-zinc-300">
                Contate-nos
              </h1>
              <Link
                className="flex gap-2 hover:underline hover:text-zinc-300 transition-all w-fit"
                to={'https://github.com/Marc0sGabriel'}
                target="_blank"
              >
                <GithubLogo size={24} weight="fill" />
                <span>Github</span>
              </Link>
              <Link
                className="flex gap-2 hover:underline hover:text-zinc-300 transition-all w-fit"
                to={'https://linkedin.com/'}
                target="_blank"
              >
                <LinkedinLogo size={24} weight="fill" />
                <span>Linkedin</span>
              </Link>
              <Link
                className="flex gap-2 hover:underline hover:text-zinc-300 transition-all w-fit"
                to={'https://linkedin.com/'}
                target="_blank"
              >
                <Envelope size={24} weight="fill" />
                <span>Gmail</span>
              </Link>
            </div>

            <div className="flex flex-col text-sm sm:text-base text-zinc-500 gap-2">
              <h1 className="text-base sm:text-xl text-zinc-300">Empresa</h1>
              <Link
                className="w-fit hover:underline hover:text-zinc-300 transition-all"
                to={'#'}
              >
                Sobre nós
              </Link>
              <Link
                className="w-fit hover:underline hover:text-zinc-300 transition-all"
                to={'#'}
              >
                Trabalhe conosco
              </Link>
              <Link
                className="w-fit hover:underline hover:text-zinc-300 transition-all"
                to={'#'}
              >
                Carreiras
              </Link>
            </div>
          </div>

          <aside className="flex w-full justify-center items-center">
            <span>✦ Desenvolvido por Marcos Gabriel</span>
          </aside>
        </div>
      </footer>
    </>
  );
}
