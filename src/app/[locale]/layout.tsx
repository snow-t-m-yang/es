// import '@/app/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Knewave, Jim_Nightshade } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { Video } from "@/components";
import type { Viewport } from "next";
import Background from "@/components/Background";
import { WavyBackground } from "@/components/ui/wavy-background";

const knewave = Knewave({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Knewave",
});

const jimNightshade = Jim_Nightshade({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Nightshade",
});

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export const metadata: Metadata = {
  title: "Eternal Story",
  description: "Eternal Story Official Website",
};

export const viewport: Viewport = {
  themeColor: { media: "(prefers-color-scheme: dark)", color: "black" },
  colorScheme: "dark",
};

const locales = ["zh", "en"];

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
  unstable_setRequestLocale(locale);
  return (
    <html
      lang={locale}
      className={`${knewave.variable} ${jimNightshade.variable}`}
    >
      <body
        className={`${inter.className} w-screen h-[100dvh] bg-transparent text-white`}
      >
        {/* <Background
          className="fixed top-0 left-0 z-0 object-cover"
        /> */}
        <WavyBackground className="max-w-4xl mx-auto">
          <div className="relative h-[100dvh] z-10">
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Navbar />
              {children}
              <Analytics />
            </NextIntlClientProvider>
          </div>
        </WavyBackground>
      </body>
    </html>
  );
}
