import { ShootingStar } from '@phosphor-icons/react';

export function Logo() {
  return (
    <header className="flex items-center gap-4">
      <h1 className="text-zinc-100 font-bold text-3xl">VideoStar</h1>
      <ShootingStar size={32} weight="bold" color="#f57521" />
    </header>
  );
}
