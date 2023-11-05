// import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Knewave, Jim_Nightshade } from 'next/font/google';
import { useLocale, useTranslations } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

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

export function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }];
}

export const metadata: Metadata = {
  title: 'Eternal Story',
  description: 'Eternal Story Official Website',
};

const locales = ['zh', 'en'];

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  // const isValidLocale = locales.some((cur) => cur === locale);
  // if (!isValidLocale) notFound();

   const messages = await getMessages(locale);

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${knewave.variable} ${jimNightshade.variable}`}
    >
      <body
        className={`${inter.className} w-screen overflow-hidden h-[100dvh]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
