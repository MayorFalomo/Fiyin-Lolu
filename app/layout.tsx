import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Petrona,
  EB_Garamond,
  Belleza,
  Meow_Script,
  Sofia,
} from 'next/font/google';
import './globals.css';
import { Toaster } from '@/app/ui/sonner';
import SmoothScrolling from './components/animations/SmoothScrolling';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const petrona = Petrona({
  variable: '--font-petrona',
  subsets: ['latin'],
});
const eb_Garamond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
});

const belleza = Belleza({
  weight: '400',
  variable: '--font-belleza',
  subsets: ['latin'],
});

const meow = Meow_Script({
  weight: '400',
  variable: '--font-meow',
  subsets: ['latin'],
});
const sofia = Sofia({
  weight: '400',
  variable: '--font-sofia',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fiyin & Lolu',
  description: "Fiyin & Lolu's wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>OluwaLolu & Judah</title>
        <meta
          name="description"
          content="Website for the wedding of OluwaLolu & Judah."
        />
        <meta
          name="keywords"
          content="Wedding, Judah, FiyinFunloluwa, OluwaLolu, Judah & Olowalolu, Fiyin & OluwaLolu"
        />
        <meta name="author" content="Falomo Mayowa" />
        <meta property="og:title" content="Judah & OluwaLolu" />
        <meta
          property="og:description"
          content="Website for the wedding and union of OluLoluwa and Judah."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsghy4siv/image/upload/v1741350691/wedding_hero_opvtre.webp"
        />
        <meta
          property="og:url"
          content="https://res.cloudinary.com/dsghy4siv/image/upload/v1741350709/fisco_gallery_i9cwm8.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="Website for the wedding of OluwaLolu & Judah.."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dsghy4siv/image/upload/v1741350709/fisco_gallery_i9cwm8.webp"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://treate.ng" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${petrona.variable} ${eb_Garamond.variable} ${belleza.variable} ${meow.variable} ${sofia.variable} antialiased`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
        <Toaster />
      </body>
    </html>
  );
}
