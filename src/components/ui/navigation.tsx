import Link from 'next/link';
import React from 'react';
import { BiHome } from 'react-icons/bi';
import { ModeToggle } from './dark-mode-toggle';
import { IoLogoGithub } from 'react-icons/io';
import { GoProjectSymlink } from 'react-icons/go';
import { TbLogs } from 'react-icons/tb';
const Navigation = () => {
  return (
    <div className="fixed bottom-0 right-2 left-2 shadow-xl p-4 border-2 rounded-full m-2 bg-white dark:bg-gray-950 text-black dark:text-white lg:w-96 mx-auto">
      <div className="flex items-center justify-between px-4">
        <Link href={'/'}>
          <BiHome size={24} />
        </Link>
        <Link href={'/projects'}>
          <GoProjectSymlink size={24} />
        </Link>
        <Link href={'/blogs'}>
          <TbLogs size={24} />
        </Link>
        <Link href={'https://github.com/sonusahuz'} target="_blank">
          <IoLogoGithub size={24} />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
