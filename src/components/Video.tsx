import { DiscordLogo, Lightning } from '@phosphor-icons/react';

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px]">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="font-semibold text-zinc-400">Spy x Family</h1>
            <h2 className="text-2xl font-bold">S1 E1 Operação Strix</h2>
            <p className="mt-4 text-gray-300">
              Twilight, codinome do melhor agente de espionagem de Westalis,
              recebe sua nova missão: fazer seu filho entrar no prestigioso
              Colégio Éden para se aproximar de Donovan Desmond, do Partido da
              União Nacional. Primeira meta: obter um filho.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 bg-orange-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <DiscordLogo size={24} weight="bold" />
              comunidade do discord
            </a>

            <a
              href="#"
              className="p-4 border-orange-500 border-2 text-orange-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <Lightning size={24} weight="bold" />
              catálogo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
