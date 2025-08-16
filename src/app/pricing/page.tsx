import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';
import Cta from '../../components/Cta';

export default function PricingPage() {
  return (
    <>
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </>
  );
}