import type { Metadata } from 'next';
import FacebookImageBanner from '@/components/FacebookImageBanner';

export const metadata: Metadata = {
  title: 'Pressure Washing Sargent, TX | Soft Washing & Exterior Cleaning | 832-557-8758',
  description:
    'Professional pressure washing and soft washing in Sargent, TX. House washing, roof cleaning, driveway cleaning, deck cleaning, fence cleaning, pier cleaning, dock cleaning, and boathouse cleaning. Call 832-557-8758 for a free quote.',
  keywords: [
    'pressure washing Sargent TX',
    'soft washing Sargent TX',
    'house washing Sargent TX',
    'roof cleaning Sargent TX',
    'driveway cleaning Sargent TX',
    'deck cleaning Sargent TX',
    'fence cleaning Sargent TX',
    'pier cleaning Sargent TX',
    'dock cleaning Sargent TX',
    'boathouse cleaning Sargent TX',
    'coastal exterior cleaning',
    'salt air cleaning',
    'algae removal',
    'mildew removal',
    'BlueLine Services',
  ],
  alternates: {
    canonical: 'https://www.bluelineproservices.com/pressure-washing-sargent-tx',
  },
  openGraph: {
    title: 'Pressure Washing Sargent, TX | BlueLine Services',
    description:
      'Soft washing and pressure washing for Sargent homes, beach houses, driveways, decks, fences, docks, piers, and boathouses.',
    url: 'https://www.bluelineproservices.com/pressure-washing-sargent-tx',
    siteName: 'BlueLine Services',
    images: [
      {
        url: 'https://www.bluelineproservices.com/OGimage.png',
        width: 1200,
        height: 630,
        alt: 'BlueLine Services pressure washing in Sargent, TX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const services = [
  ['Pressure Washing', 'Driveways, sidewalks, patios, concrete, and other hard exterior surfaces.'],
  ['Soft Washing', 'Low-pressure cleaning for siding, roofs, painted surfaces, and delicate areas.'],
  ['House Washing', 'Exterior cleaning for coastal homes, family homes, and beach houses.'],
  ['Roof Cleaning', 'Soft wash roof cleaning for algae, mildew, and black streak buildup.'],
  ['Driveway Cleaning', 'Remove dirt, grime, algae, and surface stains from concrete.'],
  ['Deck Cleaning', 'Clean wood and composite decks with the right method for the surface.'],
  ['Fence Cleaning', 'Restore curb appeal by removing algae, mildew, and weathered buildup.'],
  ['Pier & Dock Cleaning', 'Clean salt residue, algae, mildew, and coastal grime from waterfront surfaces.'],
  ['Boathouse Cleaning', 'Exterior cleaning for boathouses and coastal structures around Sargent.'],
];

const areas = [
  'Sargent, TX',
  'Lake Jackson, TX',
  'Bay City, TX',
  'Sweeny, TX',
  'Brazoria, TX',
  'Matagorda, TX',
  'Van Vleck, TX',
  'Markham, TX',
  'Freeport, TX',
  'Clute, TX',
  'Angleton, TX',
  'Cedar Lake, TX',
  'Cedar Lane, TX',
];

const faqs = [
  [
    'Do you offer pressure washing in Sargent, TX?',
    'Yes. BlueLine Services provides pressure washing, soft washing, and exterior cleaning for homes, driveways, decks, fences, docks, piers, boathouses, and coastal properties in Sargent, TX.',
  ],
  [
    'What is the difference between pressure washing and soft washing?',
    'Pressure washing is best for harder surfaces like concrete and driveways. Soft washing uses lower pressure and cleaning solutions for more delicate surfaces like siding, roofs, painted areas, and some wood surfaces.',
  ],
  [
    'Can you clean docks, piers, and boathouses?',
    'Yes. We clean docks, piers, boathouses, and waterfront structures affected by salt air, algae, mildew, and coastal grime.',
  ],
  [
    'Is soft washing safe for roofs?',
    'Soft washing is the safer method for most roof cleaning because it uses low pressure instead of blasting shingles or roofing surfaces with high pressure.',
  ],
  [
    'How often should coastal properties be cleaned?',
    'Many coastal properties benefit from cleaning once a year. Homes near water, shade, or heavy salt-air exposure may need service more often depending on buildup.',
  ],
  [
    'Do you clean decks and fences?',
    'Yes. We clean decks, fences, patios, and outdoor living areas using the right cleaning method for the material and condition of the surface.',
  ],
  [
    'Do you offer free quotes?',
    'Yes. Call or text 832-557-8758 and BlueLine Services can provide a free quote for your exterior cleaning project.',
  ],
  [
    'What areas do you serve near Sargent?',
    'BlueLine Services serves Sargent, Lake Jackson, Bay City, Sweeny, Brazoria, Matagorda, Van Vleck, Markham, Freeport, Clute, Angleton, Cedar Lake, Cedar Lane, and nearby Gulf Coast communities.',
  ],
];

export default function Page() {
  return (
    <main className="bg-[#040d1a] text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#040d1a] via-[#071428] to-[#0a1f3d] py-20 md:py-28">
        <div className="absolute inset-0 bg-blue-500/5" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
            Sargent, TX Exterior Cleaning
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
            Pressure Washing <span className="text-blue-400">Sargent, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Professional pressure washing, soft washing, and coastal exterior cleaning for homes,
            beach houses, driveways, decks, fences, piers, docks, and boathouses in Sargent, TX.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:8325578758"
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
            >
              Call 832-557-8758
            </a>
            <a
              href="sms:8325578758"
              className="rounded-lg border-2 border-blue-400 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-400/10"
            >
              Text for a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-900/30 bg-[#071428] py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 text-center md:grid-cols-4">
          <div>
            <div className="font-bold text-blue-400">Licensed</div>
            <div className="text-sm text-gray-400">Water Systems Operator</div>
          </div>
          <div>
            <div className="font-bold text-blue-400">Free Quotes</div>
            <div className="text-sm text-gray-400">Call or text anytime</div>
          </div>
          <div>
            <div className="font-bold text-blue-400">Quality Focused</div>
            <div className="text-sm text-gray-400">Clean, careful work</div>
          </div>
          <div>
            <div className="font-bold text-blue-400">Local Service</div>
            <div className="text-sm text-gray-400">Sargent & Gulf Coast</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold uppercase text-white">
          Coastal Properties Need Special Care
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">
          Sargent properties deal with salt air, humidity, algae, mildew, and grime that can build
          up fast on siding, roofs, concrete, decks, fences, docks, piers, and boathouses. Regular
          exterior cleaning helps protect curb appeal and keeps coastal properties looking maintained.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-300">
          BlueLine Services uses the right cleaning method for each surface. Some areas need
          controlled pressure washing, while softer surfaces may need a safer soft wash approach.
        </p>
      </section>

      <section className="bg-[#071428] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-bold uppercase text-white">
            Services in <span className="text-blue-400">Sargent, TX</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map(([name, desc]) => (
              <div key={name} className="rounded-xl border border-blue-900/40 bg-[#040d1a] p-6">
                <h3 className="font-display text-xl font-bold text-white">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold uppercase text-white">
          Serving Sargent & Nearby Coastal Areas
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">
          BlueLine Services helps homeowners, rental property owners, and coastal property owners
          throughout Sargent and surrounding Gulf Coast communities.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 text-gray-300 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071428] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-bold uppercase text-white">
            Why Choose <span className="text-blue-400">BlueLine Services?</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-blue-900/40 bg-[#040d1a] p-6 text-center">
              <h3 className="font-display text-xl font-bold text-white">Family-Owned</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Local service with personal attention and pride in the finished result.
              </p>
            </div>
            <div className="rounded-xl border border-blue-900/40 bg-[#040d1a] p-6 text-center">
              <h3 className="font-display text-xl font-bold text-white">Water Experience</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Owned by a licensed Water Systems Operator with real field experience.
              </p>
            </div>
            <div className="rounded-xl border border-blue-900/40 bg-[#040d1a] p-6 text-center">
              <h3 className="font-display text-xl font-bold text-white">Coastal Cleaning Focus</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Built for salt air, algae, mildew, grime, and the cleaning needs of Gulf Coast properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold uppercase text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-xl border border-blue-900/40 bg-[#071428] p-6">
              <h3 className="font-display text-lg font-bold text-white">{q}</h3>
              <p className="mt-3 leading-relaxed text-gray-400">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-14 text-center">
        <h2 className="font-display text-3xl font-bold uppercase text-white">
          Need Pressure Washing in Sargent, TX?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Call or text BlueLine Services today for a free quote on pressure washing, soft washing,
          driveway cleaning, house washing, deck cleaning, fence cleaning, dock cleaning, pier cleaning,
          or boathouse cleaning.
        </p>
        <a
          href="tel:8325578758"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:bg-blue-50"
        >
          Call 832-557-8758
        </a>
      </section>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: a,
              },
            })),
          }),
        }}
      />

      <div className="bg-navy-900 py-6 md:py-8 px-4"><FacebookImageBanner variant="compact" /></div>

      {/* Internal Links & Footer */}
      <section className="bg-navy-800 border-t border-blue-900/30 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-blue-400 hover:text-white transition-colors">Home</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-sargent-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Sargent, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-lake-jackson-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Lake Jackson, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-freeport-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Freeport, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-bay-city-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Bay City, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-sweeny-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Sweeny, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-brazoria-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Brazoria, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-cedar-lake-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Cedar Lake, TX</a>
            <span className="text-gray-600">|</span>
            <a href="/pressure-washing-cedar-lane-tx" className="text-blue-400 hover:text-white transition-colors">Pressure Washing Cedar Lane, TX</a>
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
