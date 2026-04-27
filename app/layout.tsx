import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'BlueLine Services | Professional Soft Wash | 832-557-8758',
  description:
    'BlueLine Services — family-owned professional soft wash and exterior cleaning in Sargent, Bay City, Lake Jackson, Sweeny, and Brazoria. Licensed Water Systems Operator. Call 832-557-8758 for a free quote.',
  keywords: 'soft wash, pressure washing, house washing, roof cleaning, driveway cleaning, Sargent TX, Bay City TX, Lake Jackson TX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="bg-navy-900 text-white antialiased">{children}</body>
    </html>
  );
}
