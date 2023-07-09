import { Separator } from './Separator';
import { SeriesCard } from './SeriesCard';

export function SeriesNavigator() {
  return (
    <main className="max-w-full w-full">
      <div className="px-4 flex mx-auto max-w-[1100px] flex-col gap-7 items-start">
        <div>
          <div className="mb-6">
            <h1 className="text-2xl leading-relaxed mb-2 text-blue-100 font-medium">
              Assista de graça!
            </h1>
            <p className="text-lg text-zinc-200">
              Assista alguns dos nossos títulos mais populares
            </p>
            <Separator />
          </div>

          <nav className="flex gap-6">
            <SeriesCard />
            <SeriesCard />
            <SeriesCard />
            <SeriesCard />
          </nav>
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-2xl leading-relaxed mb-2 text-blue-100 font-medium">
              Fique em dia antes da nova temporada
            </h1>
            <p className="text-lg text-zinc-200">
              Comece a maratonar antes da nova temporada começar!
            </p>
            <Separator />
          </div>

          <nav className="flex gap-6">
            <SeriesCard />
            <SeriesCard />
            <SeriesCard />
            <SeriesCard />
          </nav>
        </div>
      </div>
    </main>
  );
}
