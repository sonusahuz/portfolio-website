import Link from 'next/link';
import { navbarLink } from '@/lib/constants';
import { ModeToggle } from './dark-mode-toggle';
export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header
        className={`flex bg-white dark:bg-slate-950 w-full items-center sticky top-0 justify-between z-20 h-[60px]`}
      >
        <div className="flex items-center justify-between gap-2">
          <ul className="flex items-center justify-center lg:gap-8 gap-6">
            {navbarLink.map((nav) => (
              <li key={nav?.id} title={nav?.name}>
                <Link href={nav?.url}>{nav?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ModeToggle />
        </div>
      </header>
      {children}
    </div>
  );
}
