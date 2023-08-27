import ChapterOne from '@/components/ChapterOne';
import ChapterTwo from '@/components/ChapterTwo';
import Landing from '@/components/Landing';

export default function Home() {
  return (
    <main className="w-full h-full overflow-y-auto text-white">
      <Landing />
      <ChapterOne />
      <ChapterTwo />
    </main>
  );
}
