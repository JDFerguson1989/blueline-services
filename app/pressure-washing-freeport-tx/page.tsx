import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing Freeport, TX | Soft Washing & Exterior Cleaning | 832-557-8758',
  description:
    'BlueLine Services provides pressure washing, soft washing, driveway cleaning, roof cleaning, house washing, concrete cleaning, and commercial exterior cleaning in Freeport, TX. Call or text 832-557-8758 for a free quote.',
  keywords: [
    'pressure washing Freeport TX',
    'soft washing Freeport TX',
    'driveway cleaning Freeport TX',
    'roof cleaning Freeport TX',
    'house washing Freeport TX',
    'concrete cleaning Freeport TX',
    'commercial pressure washing Freeport TX',
    'exterior cleaning Freeport TX',
    'patio cleaning Freeport TX',
    'sidewalk cleaning Freeport TX',
    'fence cleaning Freeport TX',
    'storefront cleaning Freeport TX',
    'Gulf Coast pressure washing',
    'algae removal',
    'mildew removal',
    'grime removal',
    'free quote pressure washing',
    'local pressure washing Freeport',
  ],
  alternates: {
    canonical: 'https://www.bluelineproservices.com/pressure-washing-freeport-tx',
  },
  openGraph: {
    title: 'Pressure Washing Freeport, TX | BlueLine Services',
    description: 'Professional pressure washing, soft washing, driveway cleaning, roof cleaning, house washing, and exterior cleaning for Freeport, TX homes and businesses.',
    url: 'https://www.bluelineproservices.com/pressure-washing-freeport-tx',
    siteName: 'BlueLine Services',
    images: [
      {
        url: 'https://www.bluelineproservices.com/OGimage.png',
        width: 1200,
        height: 630,
        alt: 'BlueLine Services — Pressure Washing in Freeport, TX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'Do you offer pressure washing in Freeport, TX?',
    a: 'Yes. BlueLine Services provides pressure washing, soft washing, driveway cleaning, house washing, roof cleaning, concrete cleaning, and commercial exterior cleaning in Freeport, TX.',
  },
  {
    q: 'What is the difference between pressure washing and soft washing?',
    a: 'Pressure washing uses higher pressure for hard surfaces like concrete, driveways, and sidewalks. Soft washing uses lower pressure and cleaning solutions for more delicate surfaces like siding, roofs, painted surfaces, and exterior walls.',
  },
  {
    q: 'Is soft washing safe for roofs and siding?',
    a: 'Yes. Soft washing is usually the preferred method for roofs, siding, and delicate exterior surfaces because it avoids the damage that can happen from using too much pressure.',
  },
  {
    q: 'Do you clean driveways and sidewalks in Freeport?',
    a: 'Yes. BlueLine Services cleans driveways, sidewalks, patios, pool decks, walkways, and other concrete surfaces in Freeport and nearby areas.',
  },
  {
    q: 'Do you offer commercial pressure washing in Freeport?',
    a: 'Yes. BlueLine Services offers commercial pressure washing for storefronts, sidewalks, entryways, parking areas, dumpster pads, and other exterior commercial surfaces.',
  },
  {
    q: 'How often should Freeport properties be cleaned?',
    a: 'Many Gulf Coast properties benefit from exterior cleaning once or twice per year, depending on shade, humidity, algae growth, nearby trees, weather exposure, and how quickly surfaces get dirty.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes. Call or text BlueLine Services at 832-557-8758 for a free quote.',
  },
  {
    q: 'What areas near Freeport do you serve?',
    a: 'BlueLine Services serves Freeport, Clute, Richwood, Angleton, Brazoria, Sweeny, Bay City, Sargent, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, and nearby Gulf Coast Texas communities.',
  },
];

const SERVICES = [
  { name: 'Pressure Washing', desc: 'For concrete, driveways, sidewalks, patios, pool decks, and other hard surfaces with heavy dirt and buildup.' },
  { name: 'Soft Washing', desc: 'A safer low-pressure cleaning method for siding, roofs, painted surfaces, and more delicate exterior areas.' },
  { name: 'House Washing', desc: 'Remove algae, mildew, pollen, cobwebs, dirt, and grime from the exterior of your home.' },
  { name: 'Roof Cleaning', desc: 'Soft wash roof cleaning to help remove black streaks, algae, and buildup without using harsh high pressure.' },
  { name: 'Driveway Cleaning', desc: 'Clean up dirty, stained, and weathered concrete driveways to improve curb appeal.' },
  { name: 'Sidewalk Cleaning', desc: 'Professional sidewalk cleaning for homes, businesses, rental properties, and storefronts.' },
  { name: 'Patio & Pool Deck Cleaning', desc: 'Clean patios, outdoor living areas, and pool decks so they look better and feel more inviting.' },
  { name: 'Fence & Deck Cleaning', desc: 'Exterior cleaning for wood, vinyl, and other fence and deck surfaces.' },
  { name: 'Gutter Cleaning', desc: 'Help remove dirt, buildup, and exterior staining from gutter surfaces.' },
  { name: 'Commercial Pressure Washing', desc: 'Exterior cleaning for storefronts, parking areas, sidewalks, dumpster pads, and commercial properties.' },
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
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">
            Freeport, TX Exterior Cleaning
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4">
            Pressure Washing <span className="text-blue-400">Freeport, TX</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            BlueLine Services provides professional pressure washing, soft washing, and exterior cleaning for homes, driveways, sidewalks, patios, pool decks, fences, roofs, storefronts, rental properties, and commercial properties in Freeport, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:8325578758"
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call 832-557-8758
            </a>
            <span className="text-gray-400">or text for a free quote</span>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Family-owned exterior cleaning serving Freeport and nearby Gulf Coast communities.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-800 border-y border-blue-900/30 py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-blue-400 font-bold text-lg">Licensed</div>
            <div className="text-gray-400 text-sm">Water Systems Operator</div>
          </div>
          <div>
            <div className="text-blue-400 font-bold text-lg">Free Quotes</div>
            <div className="text-gray-400 text-sm">No obligation estimates</div>
          </div>
          <div>
            <div className="text-blue-400 font-bold text-lg">Quality Focused</div>
            <div className="text-gray-400 text-sm">Built on reputation</div>
          </div>
          <div>
            <div className="text-blue-400 font-bold text-lg">Local</div>
            <div className="text-gray-400 text-sm">Serving Freeport & coast</div>
          </div>
        </div>
      </section>

      {/* Problem Section: Exterior Cleaning Built for Freeport Properties */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">
            Exterior Cleaning Built for Freeport Properties
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Freeport properties deal with Gulf Coast humidity, algae, mildew, pollen, dirt, roof streaks, concrete stains, and constant weather exposure. BlueLine Services helps homeowners and businesses keep their property looking clean, protected, and well maintained with professional pressure washing and soft washing services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you are dealing with dirty siding, driveway buildup, roof discoloration, or patio grime, we use the right cleaning method for each surface to protect your investment and restore curb appeal.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">
            Pressure Washing & Soft Washing Services in <span className="text-blue-400">Freeport, TX</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-card-gradient border border-blue-900/30 rounded-lg p-5 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">
            Commercial Pressure Washing in Freeport
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            BlueLine Services also helps Freeport businesses keep their exterior areas clean and professional. We clean storefronts, sidewalks, entryways, parking areas, dumpster pads, concrete surfaces, and other high-traffic exterior areas.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We work with storefronts, offices, restaurants, shops, rental properties, property managers, small businesses, and commercial buildings throughout Freeport and the surrounding area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 mt-6">
            {[
              'Storefronts',
              'Offices',
              'Restaurants',
              'Shops',
              'Rental properties',
              'Property managers',
              'Small businesses',
              'Commercial buildings',
            ].map((biz) => (
              <div key={biz} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>{biz}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BlueLine */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">
            Why Choose <span className="text-blue-400">BlueLine Services?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-white mb-2">Family-Owned</h3>
              <p className="text-gray-400 text-sm">You are working with a local business that cares about doing the job right.</p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-white mb-2">Licensed Water Systems Operator</h3>
              <p className="text-gray-400 text-sm">BlueLine Services brings real-world water system experience and a detail-focused mindset to exterior cleaning.</p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-white mb-2">Gulf Coast Cleaning Focus</h3>
              <p className="text-gray-400 text-sm">We understand the way humidity, salt air, algae, mildew, and coastal weather affect Texas properties.</p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-white mb-2">Free Quotes</h3>
              <p className="text-gray-400 text-sm">Call or text 832-557-8758 for a free quote.</p>
            </div>
            <div className="text-center md:col-span-2">
              <h3 className="font-display text-lg font-bold text-white mb-2">Careful, Professional Work</h3>
              <p className="text-gray-400 text-sm">We choose the right cleaning method for the surface instead of blasting everything with high pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">
            Areas Near Freeport We Serve
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            BlueLine Services serves Freeport and nearby Gulf Coast Texas communities, including Clute, Richwood, Lake Jackson, Angleton, Brazoria, Sweeny, Bay City, Sargent, Matagorda, Van Vleck, Markham, Cedar Lake, Cedar Lane, and surrounding areas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
            {[
              'Freeport, TX', 'Clute, TX', 'Richwood, TX',
              'Richwood, TX', 'Angleton, TX', 'Brazoria, TX',
              'Sweeny, TX', 'Bay City, TX', 'Sargent, TX',
              'Matagorda, TX', 'Van Vleck, TX', 'Markham, TX',
              'Cedar Lake, TX', 'Cedar Lane, TX',
            ].map((city) => (
              <div key={city} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase text-center mb-8">
            Frequently Asked Questions
          </h2>
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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">
            Need Pressure Washing in Freeport, TX?
          </h2>
          <p className="text-gray-300 mb-6">
            Call or text BlueLine Services today for a free quote on pressure washing, soft washing, driveway cleaning, roof cleaning, house washing, fence cleaning, patio cleaning, storefront cleaning, or commercial exterior cleaning in Freeport, TX.
          </p>
          <a
            href="tel:8325578758"
            className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-900/50 text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 832-557-8758
          </a>
        </div>
      </section>

      {/* Internal Links & Footer */}
      <section className="bg-navy-800 border-t border-blue-900/30 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-blue-400 hover:text-white transition-colors">Home</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-sargent-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Sargent, TX</a>
            <span className="text-gray-600">|</span>            <a href="/pressure-washing-lake-jackson-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Lake Jackson, TX</a>            <span className="text-gray-600">|</span>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-freeport-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Freeport, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/#services" className="text-blue-400 hover:text-white transition-colors">Services</a>
            <span className="text-gray-600">|</span>
            <a href="/#gallery" className="text-blue-400 hover:text-white transition-colors">Gallery</a>
            <span className="text-gray-600">|</span>
            <a href="/#contact" className="text-blue-400 hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} BlueLine Services. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
