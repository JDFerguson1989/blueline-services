import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'BlueLine Services | Pressure Washing & Soft Washing | 832-557-8758',
  description:
    'BlueLine Services provides professional pressure washing and soft washing in Sargent, TX. We clean beach houses, driveways, roofs, docks, piers, and coastal properties. Free quotes available.',
  keywords:
    'pressure washing Sargent TX, soft washing Sargent TX, house washing Sargent TX, roof cleaning Sargent TX, driveway cleaning Sargent TX, deck cleaning Sargent TX, dock cleaning Sargent TX, pier cleaning Sargent TX, boat house cleaning Sargent TX, gutter cleaning Sargent TX, trash can cleaning Sargent TX, beach house cleaning Sargent TX, exterior cleaning Sargent TX, pressure washing Lake Jackson TX, pressure washing Bay City TX, pressure washing Brazoria TX, pressure washing near me, soft washing near me, coastal pressure washing Texas',

  openGraph: {
    title: 'BlueLine Services',
    description: 'Coastal Pressure Washing & Exterior Cleaning in Sargent, TX',
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
    description: 'Coastal Pressure Washing & Exterior Cleaning in Sargent, TX',
    images: ['https://www.bluelineproservices.com/OGimage.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-navy-900 text-white antialiased">{children}</body>
    </html>
  );
}
