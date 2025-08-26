import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';

const interSans = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--inter',
});

const bricolage = Bricolage_Grotesque({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--bricolage',
});

export const metadata: Metadata = {
  title: 'ETH Floripa November 11 - 12 in Florianópolis, Brazil',
  description:
    'ETH Floripa is a curated, off-the-record, retreat between ETH LATAM and Devconnect designed for ~150 top global builders, founders, and researchers November 11-12, 2025 in Florianópolis, Brazil.',
  openGraph: {
    title: 'ETH Floripa November 11 - 12 in Florianópolis, Brazil',
    description:
      'ETH Floripa is a curated, off-the-record, retreat between ETH LATAM and Devconnect designed for ~150 top global builders, founders, and researchers. November 11-12, 2025 in Florianópolis, Brazil.',
    type: 'website',
    siteName: 'ETH Floripa',
    url: 'https://lu.ma/m5hujc9a',
    countryName: 'Brazil',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${interSans.variable} ${bricolage.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
