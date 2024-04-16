import {
  ChapterOne,
  ChapterTwo,
  Landing,
  ChapterThree,
  Footer,
} from "@/components/";
import { unstable_setRequestLocale } from "next-intl/server";
import ShuffleHero from "./components/ShuffleHero";
import Partners from "@/components/Partners";

export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <main className="z-20 w-full h-full space-y-24 overflow-y-auto">
        <Landing />
        <ShuffleHero />
        <Partners />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <Footer />
      </main>
    </>
  );
}
