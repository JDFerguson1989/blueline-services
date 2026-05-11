import type { Metadata } from 'next';
import FacebookImageBanner from '@/components/FacebookImageBanner';

export const metadata: Metadata = {
  title: 'Soft Washing Services | House, Roof & Siding Cleaning | Gulf Coast TX | 832-557-8758',
  description:
    'BlueLine Services provides professional soft washing for houses, roofs, siding, fences, and delicate exterior surfaces across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, and nearby Gulf Coast Texas communities. Free quotes. Call 832-557-8758.',
  keywords: [
    'soft washing Texas Gulf Coast',
    'soft wash house washing',
    'soft wash roof cleaning',
    'soft wash siding cleaning',
    'soft wash fence cleaning',
    'soft washing Sargent TX',
    'soft washing Lake Jackson TX',
    'soft washing Bay City TX',
    'soft washing Freeport TX',
    'soft washing Angleton TX',
    'soft washing Clute TX',
    'soft washing Brazoria TX',
    'low pressure house washing',
    'algae removal siding',
    'mildew removal exterior',
    'safe roof cleaning',
  ],
  alternates: {
    canonical: 'https://www.bluelineproservices.com/soft-washing',
  },
  openGraph: {
    title: 'Soft Washing Services | BlueLine Services',
    description: 'Professional soft washing for houses, roofs, siding, fences, and delicate exterior surfaces across the Texas Gulf Coast.',
    url: 'https://www.bluelineproservices.com/soft-washing',
    siteName: 'BlueLine Services',
    images: [{ url: 'https://www.bluelineproservices.com/OGimage.png', width: 1200, height: 630, alt: 'Soft Washing Services — BlueLine Services' }],
    locale: 'en_US',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'What is soft washing?',
    a: 'Soft washing is a low-pressure cleaning method that uses specialized cleaning solutions to remove algae, mildew, mold, dirt, and buildup from delicate exterior surfaces like siding, roofs, fences, and painted surfaces. Unlike pressure washing, soft washing avoids the damage that high pressure can cause.',
  },
  {
    q: 'Is soft washing safe for my roof and siding?',
    a: 'Yes. Soft washing is specifically designed for surfaces that can be damaged by high pressure. It safely removes black streaks, algae, and buildup from asphalt shingles, metal roofs, vinyl siding, painted wood, and other delicate materials without risking damage.',
  },
  {
    q: 'What surfaces do you soft wash?',
    a: 'BlueLine Services soft washes house siding, roofs, fences, painted surfaces, stucco, brick, gutters, soffits, fascia, pool enclosures, screen rooms, and other delicate exterior surfaces across the Gulf Coast.',
  },
  {
    q: 'How is soft washing different from pressure washing?',
    a: 'Pressure washing uses high-pressure water to blast away dirt and grime from hard surfaces like concrete and driveways. Soft washing uses lower pressure combined with cleaning solutions to safely treat algae, mildew, and buildup on more delicate surfaces without causing damage.',
  },
  {
    q: 'Do you offer soft washing in my area?',
    a: 'BlueLine Services provides soft washing across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding Gulf Coast Texas communities.',
  },
  {
    q: 'How often should I soft wash my house or roof?',
    a: 'Most Gulf Coast homes benefit from soft washing once per year, though homes in heavily shaded or humid areas may need cleaning more frequently. Roofs with visible black streaks or algae should be cleaned sooner to prevent long-term damage.',
  },
  {
    q: 'Do you offer free quotes for soft washing?',
    a: 'Yes. Call or text BlueLine Services at 832-557-8758 for a free soft washing quote.',
  },
];

const SERVICES = [
  { name: 'House Soft Washing', desc: 'Remove algae, mildew, pollen, dirt, and cobwebs from vinyl, brick, stucco, and wood siding without high-pressure damage.' },
  { name: 'Roof Soft Washing', desc: 'Safely remove black streaks, algae, moss, and buildup from asphalt shingles, metal roofs, and tile roofs.' },
  { name: 'Fence Soft Washing', desc: 'Clean wood, vinyl, and composite fences to remove green algae, mildew, dirt, and weather staining.' },
  { name: 'Siding Soft Washing', desc: 'Gentle cleaning for vinyl, aluminum, wood, and fiber-cement siding on homes, rental properties, and commercial buildings.' },
  { name: 'Gutter & Fascia Cleaning', desc: 'Remove exterior buildup from gutters, soffits, and fascia boards to improve appearance and prevent deterioration.' },
  { name: 'Pool Cage & Screen Enclosure Cleaning', desc: 'Clean pool enclosures, screen rooms, and lanais to remove algae, pollen, and mildew from frames and screens.' },
];

export default function Page() {
  return (
    <main>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Texas Gulf Coast Exterior Cleaning</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">
            Professional <span className="text-blue-400">Soft Washing</span> Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            BlueLine Services provides safe, low-pressure soft washing for houses, roofs, siding, fences, pool enclosures, and delicate exterior surfaces across the Texas Gulf Coast. We remove algae, mildew, and buildup without damaging your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:8325578758" className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call 832-557-8758
            </a>
            <span className="text-gray-400">or text for a free quote</span>
          </div>
          <p className="text-gray-400 text-sm mt-6">Family-owned exterior cleaning serving Gulf Coast Texas communities.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-800 border-y border-blue-900/30 py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-blue-400 font-bold text-lg">Licensed</div><div className="text-gray-400 text-sm">Water Systems Operator</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Free Quotes</div><div className="text-gray-400 text-sm">No obligation estimates</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Safe Methods</div><div className="text-gray-400 text-sm">Low-pressure cleaning</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Local</div><div className="text-gray-400 text-sm">Serving Gulf Coast TX</div></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Why Gulf Coast Homes Need Soft Washing</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Texas Gulf Coast creates the perfect environment for algae, mildew, mold, and moss to grow on exterior surfaces. Humidity, salt air, coastal rains, and long summers cause black streaks on roofs, green buildup on siding, and discoloration on fences. High-pressure washing can damage these surfaces. Soft washing is the safer solution.
          </p>
          <p className="text-gray-300 leading-relaxed">
            BlueLine Services uses low-pressure soft washing combined with the right cleaning solutions to remove buildup without stripping paint, lifting shingles, or damaging wood. Your home stays protected while looking its best.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Our Soft Washing Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.name} className="bg-card-gradient border border-blue-900/30 rounded-lg p-5 hover:border-blue-500/50 transition-colors">
                <h3 className="font-display text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Wash vs Pressure Wash */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Soft Washing vs Pressure Washing</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Not every surface can handle high-pressure water. Roofs, siding, painted surfaces, and fences need a gentler approach. Soft washing uses low-pressure water and specialized cleaning solutions to break down and remove algae, mildew, and organic buildup at the source.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Pressure washing is great for concrete, driveways, and sidewalks. Soft washing is the right choice for roofs, siding, fences, pool enclosures, and any surface where high pressure could cause damage. BlueLine Services evaluates each job and uses the method that protects your property while delivering the best results.
          </p>
        </div>
      </section>

      {/* Commercial */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Commercial Soft Washing</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            BlueLine Services provides commercial soft washing for storefronts, office buildings, rental properties, apartment complexes, restaurants, and commercial exteriors. We safely clean signage, awnings, siding, roofs, and other delicate surfaces to help your business maintain a professional appearance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 mt-6">
            {['Storefronts', 'Office buildings', 'Rental properties', 'Apartments', 'Restaurants', 'Commercial signs', 'Awnings', 'Property managers'].map((biz) => (
              <div key={biz} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span><span>{biz}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Why Choose BlueLine Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Licensed Water Systems Operator</h3><p className="text-gray-400 text-sm">Real-world water systems experience applied to exterior cleaning.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Right Method for Each Surface</h3><p className="text-gray-400 text-sm">We match the cleaning method to your surface to avoid damage.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Gulf Coast Experience</h3><p className="text-gray-400 text-sm">We understand coastal humidity, algae growth, and salt-air exposure.</p></div>
            <div className="text-center md:col-span-3"><h3 className="font-display text-lg font-bold text-white mb-2">Free Quotes</h3><p className="text-gray-400 text-sm">Call or text 832-557-8758 for a free soft washing estimate.</p></div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Soft Washing Service Area</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            BlueLine Services provides soft washing across the Texas Gulf Coast, including Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
            {['Sargent, TX', 'Lake Jackson, TX', 'Bay City, TX', 'Freeport, TX', 'Angleton, TX', 'Clute, TX', 'Brazoria, TX', 'Matagorda, TX', 'Van Vleck, TX', 'Markham, TX', 'Cedar Lake, TX', 'Cedar Lane, TX', 'Sweeny, TX'].map((city) => (
              <div key={city} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span><span>{city}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-card-gradient border border-blue-900/30 rounded-lg p-5">
                <h3 className="font-display text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Ready for a Cleaner Exterior?</h2>
          <p className="text-gray-300 mb-6">Call or text BlueLine Services today for a free soft washing quote on your house, roof, siding, fence, or pool enclosure.</p>
          <a href="tel:8325578758" className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call 832-557-8758
          </a>
        </div>
      </section>

      <div className="bg-navy-900 py-6 md:py-8 px-4"><FacebookImageBanner variant="compact" /></div>

      {/* Internal Links */}
      <section className="bg-navy-800 border-t border-blue-900/30 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-blue-400 hover:text-white transition-colors">Home</a><span className="text-gray-600">|</span>
            <a href="/soft-washing" className="text-blue-400 hover:text-white transition-colors">Soft Washing</a><span className="text-gray-600">|</span>
            <a href="/roof-cleaning" className="text-blue-400 hover:text-white transition-colors">Roof Cleaning</a><span className="text-gray-600">|</span>
            <a href="/house-washing" className="text-blue-400 hover:text-white transition-colors">House Washing</a><span className="text-gray-600">|</span>
            <a href="/driveway-cleaning" className="text-blue-400 hover:text-white transition-colors">Driveway Cleaning</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-sargent-tx" className="text-blue-400 hover:text-white transition-colors">Sargent</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-lake-jackson-tx" className="text-blue-400 hover:text-white transition-colors">Lake Jackson</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-bay-city-tx" className="text-blue-400 hover:text-white transition-colors">Bay City</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-freeport-tx" className="text-blue-400 hover:text-white transition-colors">Freeport</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-sweeny-tx" className="text-blue-400 hover:text-white transition-colors">Sweeny</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-brazoria-tx" className="text-blue-400 hover:text-white transition-colors">Brazoria</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-cedar-lake-tx" className="text-blue-400 hover:text-white transition-colors">Cedar Lake</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-cedar-lane-tx" className="text-blue-400 hover:text-white transition-colors">Cedar Lane</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-matagorda-tx" className="text-blue-400 hover:text-white transition-colors">Matagorda</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-van-vleck-tx" className="text-blue-400 hover:text-white transition-colors">Van Vleck</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-markham-tx" className="text-blue-400 hover:text-white transition-colors">Markham</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-clute-tx" className="text-blue-400 hover:text-white transition-colors">Clute</a><span className="text-gray-600">|</span>
            <a href="/pressure-washing-angleton-tx" className="text-blue-400 hover:text-white transition-colors">Angleton</a><span className="text-gray-600">|</span>
            <a href="/gallery" className="text-blue-400 hover:text-white transition-colors">Gallery</a><span className="text-gray-600">|</span>
            <a href="/contact" className="text-blue-400 hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} BlueLine Services. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
