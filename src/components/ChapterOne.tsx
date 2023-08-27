import Image from 'next/image';

type ChapterOneItemsType = {
  title: string;
  imgSrc: string;
  alt: string;
  id: string;
};

const chapterOneItems: ChapterOneItemsType[] = [
  {
    title: 'Interactive technology',
    imgSrc: '/chapterOne-1.jpg',
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
  {
    title: 'Filming',
    imgSrc: '/chapterOne-2.jpg',
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
  {
    title: 'Web page creation',
    imgSrc: '/chapterOne-3.jpg',
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
  {
    title: 'Graphic design',
    imgSrc: '/chapterOne-4.jpg',
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
];

function ChapterOne() {
  return (
    <div className="flex flex-col items-center h-screen gap-8 pt-20 bg-black">
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="text-3xl font-bold">CHAPTER ONE</h1>
        <h2 className="text-lg font-medium">Services we provide</h2>
      </div>
      <ul className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2">
        {chapterOneItems.map((item) => {
          return (
            <li className="relative" key={item.id}>
              <Image
                src={item.imgSrc}
                width={180}
                height={180}
                alt={item.alt}
              />
              <p className="absolute w-full px-10 text-lg font-semibold leading-tight text-center bottom-2">
                {item.title}
              </p>
            </li>
          );
        })}
        {/* <div className="relative">
        
        <div className="relative">
          <Image
            src="/chapterOne-2.jpg"
            width={180}
            height={180}
            alt="chapterOne photo"
          />
          <p className="absolute w-full text-lg font-semibold text-center bottom-2">
            Filming
          </p>
        </div>
        <div className="relative">
          <Image
            src="/chapterOne-3.jpg"
            width={180}
            height={180}
            alt="chapterOne photo"
          />
          <p className="absolute w-full text-lg font-semibold text-center bottom-2 ">
            Web page creation
          </p>
        </div>
        <div className="relative">
          <Image
            src="/chapterOne-4.jpg"
            width={180}
            height={180}
            alt="chapterOne photo"
          />
          <p className="absolute w-full text-lg font-semibold text-center bottom-2 ">
            Graphic design
          </p>
  </div> */}
      </ul>
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
