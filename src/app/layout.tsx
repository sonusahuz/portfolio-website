import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sonu Sahu - Home',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Frontend',
    'Full Stack Developer',
    'Full-stack Developer',
    'Sonu Sahu',
    'Frontend Engineer',
    'Full-Stack Software Engineer',
    'Sonu Sahu Portfolio',
    'Sonu Sahu Projects',
    'Sonu Sahu Blogs',
  ],
  description:
    "I'm a Full-Stack Developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="sm:px-4 md:px-40 lg:px-60 xl:px-80 px-3">
            <Header>{children}</Header>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
