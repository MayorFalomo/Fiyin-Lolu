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
import { Toaster } from '@/components/ui/sonner';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${petrona.variable} ${eb_Garamond.variable} ${belleza.variable} ${meow.variable} ${sofia.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
