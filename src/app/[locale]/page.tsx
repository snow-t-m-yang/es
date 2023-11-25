import ChapterOne from '@/components/ChapterOne';
import ChapterTwo from '@/components/ChapterTwo';
import Landing from '@/components/Landing';
import ChapterTwo2 from '@/components/ChapterTwo2';
import ChapterThree from '@/components/ChapterThree';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Intro from '@/components/Intro';

export default function Home({ params: { locale } }: any) {
  const t = useTranslations('Intro');

  unstable_setRequestLocale(locale);

  return (
    <main className="w-full h-full overflow-y-auto">
      <Landing />
      <Intro />
      <ChapterOne />
      <ChapterTwo />
      <ChapterTwo2 />
      <ChapterThree options={{ align: 'center' }} />
      <Footer />
    </main>
  );
}
