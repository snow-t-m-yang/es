import {
  ChapterOne,
  ChapterTwo,
  Landing,
  ChapterThree,
  ChapterTwo2,
  Footer,
  Video,
} from '@/components/';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Intro from '@/components/Intro';

export default function Home({ params: { locale } }: any) {
  const t = useTranslations('Intro');

  unstable_setRequestLocale(locale);

  return (
    <>
      <main className="z-20 w-full h-full overflow-y-auto">
        <Landing />
        <Intro />
        <ChapterOne />
        <ChapterTwo />
        <ChapterTwo2 />
        <ChapterThree />
        <Footer />
      </main>
    </>
  );
}
