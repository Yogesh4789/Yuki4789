import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Certifications } from '@/components/sections/certifications';
import { Resume } from '@/components/sections/resume';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Navbar } from '@/components/layout/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
