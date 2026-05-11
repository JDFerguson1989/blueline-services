import type { Metadata } from 'next';
import FacebookImageBanner from '@/components/FacebookImageBanner';

export const metadata: Metadata = {
  title: 'House Washing Services | Exterior House Cleaning | Gulf Coast TX | 832-557-8758',
  description:
    'BlueLine Services provides professional house washing and exterior home cleaning across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, and nearby Gulf Coast Texas communities. Remove algae, mildew, and grime. Call 832-557-8758.',
  keywords: [
    'house washing Texas Gulf Coast',
    'exterior house cleaning',
    'soft wash house washing',
    'siding cleaning',
    'house washing Sargent TX',
    'house washing Lake Jackson TX',
    'house washing Bay City TX',
    'house washing Freeport TX',
    'house washing Angleton TX',
    'house washing Clute TX',
    'house washing Brazoria TX',
    'algae removal house',
    'mildew removal siding',
    'vinyl siding cleaning',
    'brick house cleaning',
  ],
  alternates: {
    canonical: 'https://www.bluelineproservices.com/house-washing',
  },
  openGraph: {
    title: 'House Washing Services | BlueLine Services',
    description: 'Professional house washing and exterior home cleaning to remove algae, mildew, and grime across the Texas Gulf Coast.',
    url: 'https://www.bluelineproservices.com/house-washing',
    siteName: 'BlueLine Services',
    images: [{ url: 'https://www.bluelineproservices.com/OGimage.png', width: 1200, height: 630, alt: 'House Washing — BlueLine Services' }],
    locale: 'en_US',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'What is house washing?',
    a: 'House washing is the exterior cleaning of a home using either soft washing or pressure washing depending on the surface. It removes algae, mildew, pollen, dirt, cobwebs, and grime from siding, brick, stucco, and other exterior materials.',
  },
  {
    q: 'Is house washing safe for all types of siding?',
    a: 'Soft washing is safe for vinyl, aluminum, wood, stucco, painted surfaces, and fiber-cement siding. Pressure washing is used for harder surfaces like brick and concrete. BlueLine Services evaluates your home and uses the right method for each surface.',
  },
  {
    q: 'Will house washing damage my windows or landscaping?',
    a: 'BlueLine Services takes care to protect windows, landscaping, and exterior fixtures during house washing. We use controlled pressure, pre-wet plants when needed, and avoid spraying directly into windows or seals.',
  },
  {
    q: 'How often should I wash my house?',
    a: 'Most Gulf Coast homes benefit from exterior house washing once per year. Homes in heavily wooded or shaded areas, or near the coast, may need cleaning more frequently due to faster algae and mildew growth.',
  },
  {
    q: 'What does house washing include?',
    a: 'House washing typically covers siding, exterior walls, gutters, soffits, fascia, downspouts, and accessible trim. We remove algae, mildew, pollen, dirt, and cobwebs to restore your home exterior.',
  },
  {
    q: 'Do you offer house washing in my area?',
    a: 'BlueLine Services provides house washing across Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding Gulf Coast Texas communities.',
  },
  {
    q: 'Do you offer free quotes for house washing?',
    a: 'Yes. Call or text BlueLine Services at 832-557-8758 for a free house washing quote.',
  },
];

const SERVICES = [
  { name: 'Vinyl Siding Cleaning', desc: 'Soft wash cleaning for vinyl siding to remove algae, mildew, pollen, and weather staining without damage.' },
  { name: 'Brick House Cleaning', desc: 'Pressure washing for brick exteriors to remove dirt, algae, moss, and buildup from mortar and surfaces.' },
  { name: 'Stucco Cleaning', desc: 'Low-pressure soft washing for stucco surfaces to remove algae and mildew without cracking or etching.' },
  { name: 'Wood Siding Cleaning', desc: 'Gentle cleaning for wood siding and painted surfaces to remove mildew and dirt while preserving finishes.' },
  { name: 'Gutter & Trim Cleaning', desc: 'Exterior cleaning for gutters, soffits, fascia, and trim to remove buildup and improve appearance.' },
  { name: 'Whole Home Exterior Wash', desc: 'Complete house washing package covering all accessible exterior surfaces in one service call.' },
];

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) }} />
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Texas Gulf Coast House Washing</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">Professional <span className="text-blue-400">House Washing</span> Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">BlueLine Services provides exterior house washing for vinyl, brick, stucco, and wood homes across the Texas Gulf Coast. We remove algae, mildew, pollen, dirt, and grime to restore your home&apos;s appearance.</p>
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
          <div><div className="text-blue-400 font-bold text-lg">Safe Methods</div><div className="text-gray-400 text-sm">Right pressure for each surface</div></div>
          <div><div className="text-blue-400 font-bold text-lg">Local</div><div className="text-gray-400 text-sm">Serving Gulf Coast TX</div></div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Why Gulf Coast Homes Need House Washing</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Gulf Coast humidity, coastal rains, and salt air create the perfect conditions for algae, mildew, and dirt to accumulate on home exteriors. Green and black streaks on siding, discolored brick, and stained stucco are common problems that reduce curb appeal and can lead to long-term surface damage.</p>
          <p className="text-gray-300 leading-relaxed">BlueLine Services uses the right cleaning method for each exterior surface to safely remove buildup and restore your home&apos;s appearance. Soft washing for delicate surfaces, controlled pressure for harder materials.</p>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Our House Washing Services</h2>
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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Soft Washing vs Pressure Washing for Houses</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Not every exterior surface can handle high-pressure water. Vinyl siding, painted wood, and stucco require a gentler approach. Soft washing uses low-pressure water and cleaning solutions to break down and remove algae and mildew without forcing water behind siding or stripping paint.</p>
          <p className="text-gray-300 leading-relaxed">Brick, stone, and concrete can handle more pressure. BlueLine Services evaluates each surface on your home and applies the right method to protect your property while delivering the cleanest results.</p>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Commercial Exterior Cleaning</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services provides exterior building cleaning for commercial properties, rental homes, apartments, and multi-unit properties. We clean siding, brick, stucco, gutters, and trim to help maintain property value and professional appearance.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 mt-6">
            {['Storefronts', 'Office buildings', 'Rental properties', 'Apartments', 'Property managers', 'Small businesses', 'Commercial buildings', 'HOA properties'].map((biz) => (
              <div key={biz} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span><span>{biz}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">Why Choose BlueLine Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Licensed Water Systems Operator</h3><p className="text-gray-400 text-sm">Real-world experience with water systems and exterior surfaces.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Right Method for Each Surface</h3><p className="text-gray-400 text-sm">Soft wash or pressure — we protect your home by using the correct approach.</p></div>
            <div className="text-center"><h3 className="font-display text-lg font-bold text-white mb-2">Gulf Coast Experience</h3><p className="text-gray-400 text-sm">We understand coastal weather, salt air, and algae growth patterns.</p></div>
            <div className="text-center md:col-span-3"><h3 className="font-display text-lg font-bold text-white mb-2">Free Quotes</h3><p className="text-gray-400 text-sm">Call or text 832-557-8758 for a free house washing estimate.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">House Washing Service Area</h2>
          <p className="text-gray-300 leading-relaxed mb-4">BlueLine Services provides house washing across the Texas Gulf Coast, including Sargent, Lake Jackson, Bay City, Freeport, Angleton, Clute, Brazoria, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, Sweeny, and surrounding communities.</p>
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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Ready for a Cleaner Home Exterior?</h2>
          <p className="text-gray-300 mb-6">Call or text BlueLine Services today for a free house washing quote on your vinyl, brick, stucco, or wood home.</p>
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
