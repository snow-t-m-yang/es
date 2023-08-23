import Image from 'next/image';
function ChapterOne() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-black">
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="text-3xl font-bold">CHAPTER ONE</h1>
        <h2 className="text-lg font-medium">Services we provide</h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2">
        <div className="relative">
          <Image
            src="/chapterOne-1.jpg"
            width={180}
            height={180}
            alt="chapterOne photo"
          />
          <p className="absolute bottom-10">Interactive technology</p>
        </div>
        <Image
          src="/chapterOne-2.jpg"
          width={180}
          height={180}
          alt="chapterOne photo"
        />
        <Image
          src="/chapterOne-3.jpg"
          width={180}
          height={180}
          alt="chapterOne photo"
        />
        <Image
          src="/chapterOne-4.jpg"
          width={180}
          height={180}
          alt="chapterOne photo"
        />
      </div>
      <div className="w-[80%] text-sm text-center mt-4">
        <p>
          We provide customers with professional, high-quality and creative
          design and services.
        </p>
      </div>
    </div>
  );
}
export default ChapterOne;
