import { ShootingStar } from '@phosphor-icons/react';

export function Logo() {
  return (
    <a href="/series" className="flex items-center gap-4">
      <h1 className="text-zinc-100 font-bold text-4xl">Star Video</h1>
      <ShootingStar size={38} weight="fill" color="#1691f5" />
    </a>
  );
}
