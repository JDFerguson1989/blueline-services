import type { Metadata } from 'next';
import FacebookImageBanner from '@/components/FacebookImageBanner';

export const metadata: Metadata = {
  title: 'Driveway Cleaning Services | Concrete & Paver Cleaning | Gulf Coast TX | 832-557-8758',
  description:
    'BlueLine Services provides professional driveway cleaning, concrete cleaning, and paver restoration across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, and nearby Gulf Coast Texas communities. Remove stains, algae, and oil buildup. Call 832-557-8758.',
  keywords: [
    'driveway cleaning Texas Gulf Coast',
    'concrete cleaning',
    'paver cleaning',
    'pressure washing driveway',
    'driveway cleaning Sargent TX',
    'driveway cleaning Lake Jackson TX',
    'driveway cleaning Bay City TX',
    'driveway cleaning Freeport TX',
    'driveway cleaning Angleton TX',
    'driveway cleaning Clute TX',
    'driveway cleaning Brazoria TX',
    'oil stain removal concrete',
    'algae removal driveway',
    'sidewalk cleaning',
    'patio cleaning concrete',
  ],
  alternates: {
    canonical: 'https://www.bluelineproservices.com/driveway-cleaning',
  },
  openGraph: {
    title: 'Driveway Cleaning Services | BlueLine Services',
    description: 'Professional driveway cleaning, concrete cleaning, and paver restoration across the Texas Gulf Coast.',
    url: 'https://www.bluelineproservices.com/driveway-cleaning',
    siteName: 'BlueLine Services',
    images: [{ url: 'https://www.bluelineproservices.com/OGimage.png', width: 1200, height: 630, alt: 'Driveway Cleaning — BlueLine Services' }],
    locale: 'en_US',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'What types of driveways do you clean?',
    a: 'BlueLine Services cleans concrete driveways, paver driveways, asphalt driveways, stamped concrete, and aggregate surfaces. We use the right pressure and cleaning method for each material to remove buildup without causing damage.',
  },
  {
    q: 'Can you remove oil stains from concrete driveways?',
    a: 'Yes. We treat oil stains, rust stains, tire marks, and other discoloration on concrete and paver driveways. While some deep-set stains may lighten rather than fully disappear, most surface stains can be significantly improved or removed.',
  },
  {
    q: 'Do you clean sidewalks, patios, and walkways too?',
    a: 'Yes. Driveway cleaning typically includes sidewalks, walkways, patios, pool decks, and other concrete or paver surfaces. We clean the full hardscape to give your property a consistent, refreshed appearance.',
  },
  {
    q: 'Is pressure washing safe for pavers?',
    a: 'Yes, when done correctly. We use controlled pressure and proper technique to clean paver driveways and patios without dislodging sand joints or damaging the paver surface. We can also recommend re-sanding after cleaning if needed.',
  },
  {
    q: 'How often should I clean my driveway?',
    a: 'Most Gulf Coast driveways benefit from professional cleaning once per year. Driveways in shaded areas or near trees may need cleaning more frequently due to faster algae and mildew growth.',
  },
  {
    q: 'Do you offer driveway cleaning in my area?',
    a: 'BlueLine Services provides driveway cleaning across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding Gulf Coast Texas communities.',
  },
  {
    q: 'Do you offer free quotes for driveway cleaning?',
    a: 'Yes. Call or text BlueLine Services at 832-557-8758 for a free driveway cleaning quote.',
  },
];

const SERVICES = [
  { name: 'Concrete Driveway Cleaning', desc: 'Pressure washing for concrete driveways to remove dirt, algae, mildew, tire marks, and weather staining.' },
  { name: 'Paver Driveway Cleaning', desc: 'Controlled pressure cleaning for brick and stone paver driveways and patios without damaging joints or surfaces.' },
  { name: 'Sidewalk & Walkway Cleaning', desc: 'Professional cleaning for concrete and paver sidewalks, walkways, and entry paths.' },
  { name: 'Patio & Pool Deck Cleaning', desc: 'Remove algae, mildew, and buildup from patios, pool decks, and outdoor living areas.' },
  { name: 'Oil & Stain Treatment', desc: 'Specialized treatment for oil stains, rust stains, and discoloration on concrete and paver surfaces.' },
  { name: 'Commercial Concrete Cleaning', desc: 'Exterior concrete cleaning for storefronts, parking areas, loading docks, and commercial properties.' },
];

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Texas Gulf Coast Driveway Cleaning</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">Professional <span className="text-blue-400">Driveway Cleaning</span> Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">BlueLine Services provides driveway cleaning, concrete cleaning, and paver restoration for homes and businesses across the Texas Gulf Coast. We remove algae, stains, oil buildup, and weather damage from driveways, sidewalks, patios, and pool decks.</p>
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
      <section className="bg-navy-800 border-y border-blue-900/30 py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-blue-400 font-bold text-lg">Licensed</div><div className="text-gray-400 text-sm">Water Systems Operator</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Free Quotes</div><div className="text-gray-400 text-sm">No obligation estimates</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Professional Equipment</div><div className="text-gray-400 text-sm">Surface cleaners & pressure</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Local</div><div className="text-gray-400 text-sm">Serving Gulf Coast TX</div></div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Why Gulf Coast Driveways Need Professional Cleaning</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Gulf Coast humidity, coastal rains, and long summers cause algae, mildew, and mold to grow on concrete and paver surfaces. Oil stains from vehicles, rust from sprinkler systems, and tire marks add to the discoloration. A dirty driveway hurts curb appeal and can make surfaces slippery and unsafe.</p>
          <p className="text-gray-300 leading-relaxed">BlueLine Services uses professional pressure washing equipment and surface cleaners to restore driveways, sidewalks, patios, and pool decks. We remove buildup and stains while protecting the integrity of your concrete or pavers.</p>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Our Driveway Cleaning Services</h2>
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
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">What Surfaces Can You Pressure Wash?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services cleans concrete, pavers, brick, aggregate, and asphalt surfaces. We adjust pressure and technique based on the material. Concrete and brick can handle higher pressure, while pavers and stamped concrete require controlled pressure to avoid joint damage or surface etching.</p>
          <p className="text-gray-300 leading-relaxed">We also clean around delicate areas like landscaping, exterior walls, and sprinkler systems to protect your property while restoring your hardscape.</p>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Commercial Concrete Cleaning</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services provides commercial concrete cleaning for storefronts, parking areas, loading docks, dumpster pads, sidewalks, and entryways. We help businesses maintain clean, professional exteriors that make a positive impression on customers.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 mt-6">
            {['Storefronts', 'Parking areas', 'Sidewalks', 'Loading docks', 'Dumpster pads', 'Entryways', 'Commercial buildings', 'Property managers'].map((biz) => (
              <div key={biz} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span><span>{biz}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Why Choose BlueLine Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Licensed Water Systems Operator</h3><p className="text-gray-400 text-sm">Professional experience with water systems and surface cleaning.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Professional Equipment</h3><p className="text-gray-400 text-sm">Surface cleaners and pressure washers for consistent, even results.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Gulf Coast Experience</h3><p className="text-gray-400 text-sm">We understand coastal algae growth, salt air, and concrete staining.</p></div>
            <div className="text-center md:col-span-3"><h3 className="font-display text-lg font-bold text-white mb-2">Free Quotes</h3><p className="text-gray-400 text-sm">Call or text 832-557-8758 for a free driveway cleaning estimate.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Driveway Cleaning Service Area</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services provides driveway cleaning across the Texas Gulf Coast, including Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding communities.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
            {['Sargent, TX', 'Lake Jackson, TX', 'Bay City, TX', 'Freeport, TX', 'Angleton, TX', 'Clute, TX', 'Brazoria, TX', 'Matagorda, TX', 'Van Vleck, TX', 'Markham, TX', 'Cedar Lake, TX', 'Cedar Lane, TX', 'Sweeny, TX'].map((city) => (
              <div key={city} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span><span>{city}</span></div>
            ))}
          </div>
        </div>
      </section>
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
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Ready for a Cleaner Driveway?</h2>
          <p className="text-gray-300 mb-6">Call or text BlueLine Services today for a free driveway cleaning quote on your concrete, paver, or asphalt surface.</p>
          <a href="tel:8325578758" className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call 832-557-8758
          </a>
        </div>
      </section>
      <div className="bg-navy-900 py-6 md:py-8 px-4"><FacebookImageBanner variant="compact" /></div>
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
