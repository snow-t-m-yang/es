import ChapterOne from '@/components/ChapterOne';
import ChapterTwo from '@/components/ChapterTwo';
import Landing from '@/components/Landing';
import ChapterTwo2 from '@/components/ChapterTwo2';
import ChapterThree from '@/components/ChapterThree';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full h-full overflow-y-auto text-white bg-black">
      <Landing />
      <ChapterOne />
      <ChapterTwo />
      <ChapterTwo2 />
      <ChapterThree options={{ align: 'center' }} />

      <Footer />
    </main>
  );
}
