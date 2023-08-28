import ChapterOne from '@/components/ChapterOne';
import ChapterTwo from '@/components/ChapterTwo';
import Landing from '@/components/Landing';
import ChapterTwo2 from '@/components/ChapterTwo2';

export default function Home() {
  return (
    <main className="w-full h-full overflow-y-auto text-white ">
      <Landing />
      <ChapterOne />
      <ChapterTwo />
      <ChapterTwo2 />
    </main>
  );
}
