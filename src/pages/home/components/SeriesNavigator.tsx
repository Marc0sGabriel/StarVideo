import { Carousel } from './Carousel/Carousel';
import { Separator } from './Separator';
import { SeriesCard } from './SeriesCard';
import { SeriesAdWide } from './SeriesAdWide';

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

          <nav className="h-[30rem] max-w-full w-full">
            <SeriesCard />
          </nav>
        </div>

        <SeriesAdWide
          primary={'from-purple-600'}
          secondary={'to-red-500'}
          btnColor={'bg-purple-600'}
          imageUrl="https://sm.ign.com/t/ign_pl/screenshot/default/john-wick-3-review_z4q4.1280.jpg"
        />

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

          <nav className="h-[30rem] max-w-full w-full">
            <SeriesCard />
          </nav>
        </div>
        <SeriesAdWide
          primary={'from-red-500'}
          secondary={'to-orange-400'}
          btnColor={'bg-red-600'}
          imageUrl="https://s2-techtudo.glbimg.com/jT_Nq_aLiobRkV4z782uiWlZ2UY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/J/8/EbfA0BTv2pV98gASWdfA/f5d0f04e85a224493fe9caa2e59740811630901421-main.png"
        />

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
          <nav className="h-[30rem] max-w-full w-full">
            <SeriesCard />
          </nav>
        </div>
      </div>

      <div className="mb-32 w-full bg-gradient-to-t from-starBlue-400 to-cyan-300 flex justify-center sm:p-4">
        <img src="/src/assets/horimiyaPoster.png" alt="" />
      </div>

      <div className="self-center mx-auto w-[19rem] p-8">
        <h2 className="text-lg font-medium text-zinc-300">
          Você chegou ao fim da lista...
        </h2>
        <img
          src="/src/assets/yuzu.png"
          className="w-40 ml-9 mt-8 mb-20 self-center h-full"
          alt=""
        />
      </div>
    </main>
  );
}
