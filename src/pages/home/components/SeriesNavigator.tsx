import { Carousel } from './Carousel/Carousel';
import { Separator } from './Separator';
import { SeriesCard } from './SeriesCard';

export function SeriesNavigator() {
  return (
    <main className="max-w-full w-full">
      <Carousel />
      <div className="px-4 mt-28 flex mx-auto md:max-w-[800px] lg:max-w-[1100px] flex-col gap-7 items-start">
        <div className="max-w-full w-full">
          <div>
            <h1 className="text-2xl leading-relaxed mb-2 text-blue-100 font-medium">
              Assista de graça!
            </h1>
            <p className="text-base sm:text-lg text-zinc-200">
              Assista alguns dos nossos títulos mais populares
            </p>
            <Separator />
          </div>

          <nav className="h-[40rem] max-w-full w-full">
            <SeriesCard />
          </nav>
        </div>

        <div className="max-w-full w-full">
          <div className="mt-10">
            <h1 className="text-2xl leading-relaxed mb-2 text-blue-100 font-medium">
              Fique em dia antes da nova temporada
            </h1>
            <p className="text-base sm:text-lg text-zinc-200">
              Comece a maratonar antes da nova temporada começar!
            </p>
            <Separator />
          </div>

          <nav className="h-[40rem] max-w-full w-full">
            <SeriesCard />
          </nav>
        </div>

        <div className="max-w-full w-full">
          <div className="mt-10">
            <h1 className="text-2xl leading-relaxed mb-2 text-blue-100 font-medium">
              Recém atualizados
            </h1>
            <p className="text-base sm:text-lg text-zinc-200">
              Confira os títulos mais recentes
            </p>
            <Separator />
          </div>

          <nav className="h-[40rem] max-w-full w-full">
            <SeriesCard />
          </nav>
        </div>
      </div>

      <div className="my-20 w-full bg-gradient-to-t from-starBlue-400 to-cyan-300 flex justify-center px-8 sm:px-0">
        <img src="/src/assets/horimiyaPoster.png" alt="" />
      </div>
    </main>
  );
}
