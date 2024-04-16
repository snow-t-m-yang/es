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
      <body className={`${inter.className} text-white mx-auto`}>
        <WavyBackground className="">
          <div className="relative h-[100dvh] w-screen mx-auto z-10 backdrop-blur-xl bg-black/30">
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
