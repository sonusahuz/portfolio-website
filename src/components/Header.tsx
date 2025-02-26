'use client';

import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/button';
import { handleNavigation } from '@/lib/utils';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Drawer } from './drawer';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const items = [
    { id: '1', title: 'Home', href: 'home' },
    { id: '2', title: 'About', href: 'about' },
    { id: '2', title: 'Experience', href: 'experience' },
    { id: '3', title: 'Skills', href: 'skills' },
    { id: '4', title: 'Projects', href: 'projects' },
    { id: '5', title: 'Blogs', href: 'blogs' },
    { id: '5', title: 'Contact', href: 'contact' },
  ];

  return (
    <header className="w-full mx-auto flex items-center justify-between py-4">
      <Link href="/" className="flex items-center">
        <span className="text-xl font-medium">{'{ S }'}</span>
        <span className="sr-only">Sonu Sahu</span>
      </Link>

      <nav className="hidden md:flex items-center gap-4">
        {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Blogs', "Contact"].map(
          (item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Go to ${item}`}
            >
              {item}
            </button>
          )
        )}
      </nav>

      <div className="md:hidden flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Menu
          className="h-7 w-7 cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        />
      </div>
      <Drawer
        content={
          <ul className="mt-10">
            {items.map(({ id, title, href }) => (
              <li key={id}>
                <a
                  onClick={() => handleNavigation(href.toLowerCase())}
                  aria-label={`Go to ${title}`}
                  className="block font-light text-xl px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        }
        isOpen={open}
        width="200px"
        setIsOpen={() => setOpen(false)}
      />
    </header>
  );
};

export default Header;
