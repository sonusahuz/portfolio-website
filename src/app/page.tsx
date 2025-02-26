import About from '@/components/About';
import Blogs from '@/components/Blog';
import GetInTouch from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Home';
import Projects from '@/components/Project';
import SkillsPage from '@/components/Skills';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SkillsPage />
      <Projects />
      <Experience />
      <Blogs />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
