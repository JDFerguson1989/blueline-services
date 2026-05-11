import type { Metadata } from 'next';
import FacebookImageBanner from '@/components/FacebookImageBanner';

export const metadata: Metadata = {
  title: 'Roof Cleaning Services | Soft Wash Roof Cleaning | Gulf Coast TX | 832-557-8758',
  description:
    'BlueLine Services provides professional roof cleaning and soft wash roof treatment across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, and nearby Gulf Coast Texas communities. Remove black streaks and algae safely. Call 832-557-8758.',
  keywords: [
    'roof cleaning Texas Gulf Coast',
    'soft wash roof cleaning',
    'black streak removal roof',
    'algae removal roof',
    'roof cleaning Sargent TX',
    'roof cleaning Lake Jackson TX',
    'roof cleaning Bay City TX',
    'roof cleaning Freeport TX',
    'roof cleaning Angleton TX',
    'roof cleaning Clute TX',
    'roof cleaning Brazoria TX',
    'metal roof cleaning',
    'shingle roof cleaning',
    'tile roof cleaning',
    'safe roof washing',
  ],
  alternates: {
    canonical: 'https://www.bluelineproservices.com/roof-cleaning',
  },
  openGraph: {
    title: 'Roof Cleaning Services | BlueLine Services',
    description: 'Professional roof cleaning and soft wash treatment to remove black streaks, algae, and buildup across the Texas Gulf Coast.',
    url: 'https://www.bluelineproservices.com/roof-cleaning',
    siteName: 'BlueLine Services',
    images: [{ url: 'https://www.bluelineproservices.com/OGimage.png', width: 1200, height: 630, alt: 'Roof Cleaning — BlueLine Services' }],
    locale: 'en_US',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'Why do roofs get black streaks and algae?',
    a: 'Gloeocapsa magma is a type of algae that feeds on the limestone filler in asphalt shingles. It spreads across roof surfaces in humid, shaded areas, creating the dark streaks common on Gulf Coast homes. Left untreated, it can shorten roof life and trap moisture.',
  },
  {
    q: 'Is pressure washing safe for roofs?',
    a: 'High-pressure washing can damage shingles, lift granules, dent metal panels, and crack tile. BlueLine Services uses soft wash roof cleaning, a low-pressure method with cleaning solutions that safely removes algae and buildup without damaging the roof.',
  },
  {
    q: 'What types of roofs do you clean?',
    a: 'We clean asphalt shingle roofs, metal roofs, tile roofs, and flat roofs. Each roof type receives the appropriate cleaning method and solution strength to protect the material while removing buildup.',
  },
  {
    q: 'How often should I have my roof cleaned?',
    a: 'Most Gulf Coast homes benefit from roof cleaning every 1 to 2 years. Homes with heavy tree cover or in particularly humid areas may need annual cleaning to prevent algae regrowth.',
  },
  {
    q: 'Will roof cleaning damage my plants or landscaping?',
    a: 'BlueLine Services takes precautions to protect landscaping during roof cleaning. We pre-wet plants, use controlled solutions, and rinse surrounding areas to minimize any potential impact.',
  },
  {
    q: 'Do you offer roof cleaning in my area?',
    a: 'We provide roof cleaning across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding Gulf Coast Texas communities.',
  },
  {
    q: 'Do you offer free quotes for roof cleaning?',
    a: 'Yes. Call or text BlueLine Services at 832-557-8758 for a free roof cleaning quote.',
  },
];

const SERVICES = [
  { name: 'Asphalt Shingle Roof Cleaning', desc: 'Soft wash treatment to remove black streaks, algae, moss, and buildup without damaging shingles or stripping granules.' },
  { name: 'Metal Roof Cleaning', desc: 'Safe cleaning for standing seam, corrugated, and ribbed metal roofs to remove oxidation, algae, and coastal buildup.' },
  { name: 'Tile Roof Cleaning', desc: 'Gentle soft washing for clay and concrete tile roofs to remove algae, mildew, and stains without cracking tiles.' },
  { name: 'Flat Roof Cleaning', desc: 'Low-pressure cleaning for flat and low-slope roofs on commercial buildings and residential additions.' },
  { name: 'Roof Algae Treatment', desc: 'Targeted treatment for gloeocapsa magma and other roof algae to restore appearance and help prevent regrowth.' },
  { name: 'Roof Moss Removal', desc: 'Soft removal of moss and lichen from roof surfaces to protect shingle integrity and extend roof life.' },
];

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Texas Gulf Coast Roof Cleaning</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">Professional <span className="text-blue-400">Roof Cleaning</span> Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">BlueLine Services provides safe, low-pressure roof cleaning and soft wash treatment to remove black streaks, algae, moss, and buildup from asphalt shingles, metal roofs, and tile roofs across the Texas Gulf Coast.</p>
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
          <div><div className="text-blue-400 font-bold text-lg">Safe Method</div><div className="text-gray-400 text-sm">Soft wash, no pressure damage</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Local</div><div className="text-gray-400 text-sm">Serving Gulf Coast TX</div></div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Why Gulf Coast Roofs Need Professional Cleaning</h2>
          <p className="text-gray-300 leading-relaxed mb-4">The combination of Gulf Coast humidity, coastal rains, and long summers creates ideal conditions for roof algae, moss, and mildew to grow. Black streaks on asphalt shingles are not just cosmetic, they are caused by gloeocapsa magma algae that feeds on the limestone filler in shingles and spreads across the roof.</p>
          <p className="text-gray-300 leading-relaxed">Left untreated, roof algae traps moisture, accelerates shingle deterioration, and can reduce roof lifespan. BlueLine Services uses soft wash roof cleaning to safely remove algae and buildup without the high-pressure damage that pressure washing can cause.</p>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Our Roof Cleaning Services</h2>
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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Soft Wash vs Pressure Wash for Roofs</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Pressure washing a roof with high-pressure water can strip granules from asphalt shingles, dent metal panels, crack tile, and void manufacturer warranties. Soft wash roof cleaning uses low-pressure water combined with specialized cleaning solutions to treat algae at the root level.</p>
          <p className="text-gray-300 leading-relaxed">The cleaning solution breaks down and kills algae, moss, and organic buildup, which is then gently rinsed away. This protects your roof investment while restoring its appearance.</p>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Commercial Roof Cleaning</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services provides commercial roof cleaning for office buildings, retail properties, warehouses, apartment complexes, and rental properties. A clean roof improves curb appeal and helps prevent long-term damage that leads to costly repairs.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 mt-6">
            {['Office buildings', 'Retail storefronts', 'Warehouses', 'Apartment complexes', 'Rental properties', 'Property managers', 'Small businesses', 'Commercial buildings'].map((biz) => (
              <div key={biz} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span><span>{biz}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Why Choose BlueLine Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Licensed Water Systems Operator</h3><p className="text-gray-400 text-sm">Real-world water systems knowledge applied to roof cleaning.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Soft Wash Method</h3><p className="text-gray-400 text-sm">We protect your roof by using low pressure, not blasting.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Gulf Coast Experience</h3><p className="text-gray-400 text-sm">We understand coastal algae growth and how to treat it.</p></div>
            <div className="text-center md:col-span-3"><h3 className="font-display text-lg font-bold text-white mb-2">Free Quotes</h3><p className="text-gray-400 text-sm">Call or text 832-557-8758 for a free roof cleaning estimate.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Roof Cleaning Service Area</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services provides roof cleaning across the Texas Gulf Coast, including Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding communities.</p>
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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Ready for a Cleaner Roof?</h2>
          <p className="text-gray-300 mb-6">Call or text BlueLine Services today for a free roof cleaning quote.</p>
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
