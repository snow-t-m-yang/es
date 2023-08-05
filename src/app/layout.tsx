import Video from '@/components/Video';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute bg-black/10 backdrop-blur-md">
          <Video source="/Dynamic-background.webm" autoPlay={true} />
        </div>
        {children}
      </body>
    </html>
  );
}
