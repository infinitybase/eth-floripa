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
  metadataBase: new URL('https://www.ethfloripa.com/'),
  title: 'ETH Floripa November 11 - 12 in Florianópolis, Brazil',
  description:
    'ETH Floripa is a curated, off-the-record, retreat between ETH LATAM and Devconnect designed for ~150 top global builders, founders, and researchers November 11-12, 2025 in Florianópolis, Brazil.',
  robots: 'index, follow',
  icons: [
    {
      url: '/favicon.ico',
      type: 'image/x-icon',
      rel: 'shortcut icon',
    },
    {
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
      rel: 'apple-touch-icon',
    },
    {
      url: '/android-chrome-192x192.png',
      type: 'image/png',
      sizes: '192x192',
      rel: 'icon',
    },
    {
      url: '/android-chrome-512x512.png',
      type: 'image/png',
      sizes: '512x512',
      rel: 'icon',
    },
  ],
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ETH Floripa November 11 - 12 in Florianópolis, Brazil',
    description:
      'ETH Floripa is a curated, off-the-record, retreat between ETH LATAM and Devconnect designed for ~150 top global builders, founders, and researchers. November 11-12, 2025 in Florianópolis, Brazil.',
    type: 'website',
    siteName: 'ETH Floripa',
    url: 'https://www.ethfloripa.com/',
    countryName: 'Brazil',
    images: [
      {
        url: '/eth-floripa-og.png',
        width: 1200,
        height: 630,
        alt: 'ETH Floripa',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="br">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${interSans.variable} ${bricolage.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
