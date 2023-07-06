import { Episodes } from './Episodes';

export function Sidebar() {
  return (
    <aside className="w-[348px] bg-gray-900 p-6 border-l border-zinc-800">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-zinc-700 block">
        Proximos de Episodios
      </span>

      <div className="flex flex-col gap-8">
        <Episodes />
        <Episodes />
        <Episodes />
        <Episodes />
        <Episodes />
        <Episodes />
      </div>
    </aside>
  );
}
