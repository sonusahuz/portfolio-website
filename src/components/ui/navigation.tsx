import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './dark-mode-toggle';
import { IoLogoGithub } from 'react-icons/io';
import { Code, House, PencilLine } from 'lucide-react';
const Navigation = () => {
  return (
    <div className="fixed bottom-0 right-2 left-2 shadow-xl p-4 border-2 rounded-full m-2 bg-white dark:bg-gray-950 text-black dark:text-white lg:w-96 mx-auto">
      <div className="flex items-center justify-between px-4">
        <Link href={'/'}>
          <House size={24} strokeWidth={1.25} />
        </Link>
        <Link href={'/projects'}>
          <Code size={24} strokeWidth={1.25} />
        </Link>
        <Link href={'/blogs'}>
          <PencilLine strokeWidth={1.25} size={24} />
        </Link>
        <Link href={'https://github.com/sonusahuz'} target="_blank">
          <IoLogoGithub size={24} strokeWidth={1.25} />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
