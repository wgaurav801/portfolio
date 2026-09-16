import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';
import { AlgoLab } from '@/components/sections/AlgoLab';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <AlgoLab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
