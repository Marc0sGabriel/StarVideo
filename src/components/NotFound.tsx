import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-black">
      <h1 className="text-5xl">Página não encontrada...</h1>
      <Link
        to={'/'}
        className="p-4 bg-zinc-700 rounded text-zinc-200 text-lg font-bold"
      >
        Voltar para página inicial
      </Link>
    </div>
  );
}
