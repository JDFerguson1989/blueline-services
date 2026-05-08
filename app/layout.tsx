import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'BlueLine Services | Pressure Washing & Soft Washing | 832-557-8758',
  description:
    'BlueLine Services provides professional pressure washing and soft washing across Sargent, Lake Jackson, Freeport, Bay City, Sweeny, Brazoria, Cedar Lake, Cedar Lane, and nearby Gulf Coast Texas areas. We clean homes, driveways, roofs, decks, fences, docks, piers, and boathouses. Free quotes available. Call 832-557-8758.',
  keywords:
    'pressure washing Sargent TX, soft washing Sargent TX, house washing Sargent TX, roof cleaning Sargent TX, driveway cleaning Sargent TX, deck cleaning Sargent TX, dock cleaning Sargent TX, pier cleaning Sargent TX, boat house cleaning Sargent TX, gutter cleaning Sargent TX, trash can cleaning Sargent TX, beach house cleaning Sargent TX, exterior cleaning Sargent TX, pressure washing Lake Jackson TX, pressure washing Bay City TX, pressure washing Brazoria TX, pressure washing near me, soft washing near me, coastal pressure washing Texas',

  openGraph: {
    title: 'BlueLine Services',
    description: 'BlueLine Services | Professional Pressure Washing and Soft Washing | Sargent, Lake Jackson, Freeport, Bay City, Sweeny, Brazoria, Cedar Lake, Cedar Lane, TX | Free Quotes',
    url: 'https://www.bluelineproservices.com',
    siteName: 'BlueLine Services',
    images: [
      {
        url: 'https://www.bluelineproservices.com/OGimage.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BlueLine Services',
    description: 'BlueLine Services | Professional Pressure Washing and Soft Washing | Sargent, Lake Jackson, Freeport, Bay City, Sweeny, Brazoria, Cedar Lake, Cedar Lane, TX | Free Quotes',
    images: ['https://www.bluelineproservices.com/OGimage.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-navy-900 text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'BlueLine Services',
              telephone: '832-557-8758',
              url: 'https://www.bluelineproservices.com',
              priceRange: '$$',
              description:
                'Family-owned professional soft wash, pressure washing, and exterior cleaning in Southeast Texas. Free quotes.',
              areaServed: [
                { '@type': 'City', name: 'Sargent, TX' },
                { '@type': 'City', name: 'Lake Jackson, TX' },
                { '@type': 'City', name: 'Bay City, TX' },
                { '@type': 'City', name: 'Sweeny, TX' },
                { '@type': 'City', name: 'Cedar Lake, TX' },
                { '@type': 'City', name: 'Cedar Lane, TX' },
                { '@type': 'City', name: 'Brazoria, TX' },
                { '@type': 'City', name: 'Matagorda, TX' },
                { '@type': 'City', name: 'Van Vleck, TX' },
                { '@type': 'City', name: 'Markham, TX' },
                { '@type': 'City', name: 'Freeport, TX' },
                { '@type': 'City', name: 'Clute, TX' },
                { '@type': 'City', name: 'Angleton, TX' },
              ],
              serviceType: [
                'Pressure Washing',
                'Soft Washing',
                'Exterior Cleaning',
                'House Washing',
                'Roof Cleaning',
                'Driveway Cleaning',
                'Gutter Cleaning',
                'Trash Can Cleaning',
                'Deck Cleaning',
                'Fence Cleaning',
                'Patio Cleaning',
                'Pier Cleaning',
                'Dock Cleaning',
                'Boathouse Cleaning',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
