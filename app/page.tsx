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
      <Services />
      <About />
      <Gallery />
      <CTA />
      <div className="bg-navy-900 py-6 md:py-8 px-4"><FacebookImageBanner variant="small" /></div>
      <Footer />
    </main>
  );
}
