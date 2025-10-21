import Link from 'next/link';
import { Button } from './button';

export default function GetInTouch() {
  return (
    <section
      id="contact"
      className="w-full min-h-[60vh] flex items-center justify-center px-4"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Get In Touch
        </h1>
        <p className="text-[16px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <div>
          <Button variant="outline" size={'lg'} asChild>
            <Link
              href="mailto:sonusahu8930@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`mail button`}
            >
              Say hello!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
