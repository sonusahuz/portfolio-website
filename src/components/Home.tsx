'use client';

import Link from 'next/link';
import { Button } from '@/components/button';
import { handleNavigation } from '@/lib/utils';
import Header from './Header';

export default function HomePage() {
  return (
    <section
      id="home"
      className="lg:h-screen w-full overflow-hidden relative flex flex-col bg-background text-foreground"
    >
      <Header />
      <main className="flex-grow flex items-center justify-center py-24 text-center mb-24 lg:mb-0">
        <div className="max-w-5xl flex flex-col gap-4">
          <h2 className="text-4xl lg:text-6xl font-medium text-muted-foreground">
            Building Engaging Web Applications that Retain Users.
          </h2>
          <p className="text-lg max-w-[900px] mx-auto sm:text-xl font-light text-muted-foreground leading-relaxed lg:mt-2">
            I&apos;m Sonu Sahu, a software developer focused on crafting clean &
            user-friendly experiences. Passionate about building excellent
            software that improves lives.
          </p>
          <div className="flex gap-4 text-center mt-2 mx-auto">
            <Button
              size="lg"
              aria-label="View Projects"
              className="w-36"
              onClick={() => handleNavigation('projects')}
            >
              Projects
            </Button>
            <Link
              href="https://linkedin.com/in/sonusahu"
              target="_blank"
              passHref
            >
              <Button
                size="lg"
                variant="outline"
                className="w-36"
                aria-label="Connect on LinkedIn"
              >
                Connect 👋
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
