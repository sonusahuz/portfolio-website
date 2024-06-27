'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex justify-center w-full p-2"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={23} /> : <Sun size={23} />}
    </button>
  );
}
