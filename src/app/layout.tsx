import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Knewave, Jim_Nightshade } from 'next/font/google';

const knewave = Knewave({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Knewave',
});

const jimNightshade = Jim_Nightshade({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Nightshade',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eternal Story',
  description: 'Eternal Story Official Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${knewave.variable} ${jimNightshade.variable}`}>
      <body
        className={`${inter.className} w-screen overflow-hidden h-[100dvh]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
