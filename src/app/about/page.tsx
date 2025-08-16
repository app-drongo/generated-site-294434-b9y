import Hero from '../../components/Hero';
import About from '../../components/About';
import Cta from '../../components/Cta';

export default function AboutPage() {
  return (
    <>
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </>
  );
}