'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <span onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun size={24} className=" rotate-0 scale-100 transition-all" />
      ) : (
        <Moon size={24} className=" rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </span>
  );
}
