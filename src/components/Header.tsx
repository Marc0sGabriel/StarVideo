import { Logo } from './Logo';

export function Header() {
  return (
    <header className="border-b border-gray-400 w-full py-5 flex bg-zinc-950 items-center justify-center">
      <Logo />
    </header>
  );
}
