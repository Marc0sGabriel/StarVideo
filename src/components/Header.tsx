import { Logo } from './Logo';

export function Header() {
  return (
    <header className="border-b border-zinc-800 w-full py-5 flex bg-gray-900 items-center justify-center">
      <Logo />
    </header>
  );
}