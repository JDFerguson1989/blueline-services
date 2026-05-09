import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FacebookImageBanner from '@/components/FacebookImageBanner';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-navy-900 py-8 md:py-12 px-4"><FacebookImageBanner variant="large" /></div>
      <Services />
      <About />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
