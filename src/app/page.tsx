import ChapterOne from '@/components/ChapterOne';
import ChapterTwo from '@/components/ChapterTwo';
import Landing from '@/components/Landing';
import ChapterTwo2 from '@/components/ChapterTwo2';
import ChapterThree from '@/components/ChapterThree';

export default function Home() {
  return (
    <main className="w-full h-full overflow-y-auto text-white ">
      <Landing />
      <ChapterOne />
      <ChapterTwo />
      <ChapterTwo2 />
      <ChapterThree />
    </main>
  );
}
