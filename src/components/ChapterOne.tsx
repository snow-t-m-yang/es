import Image from 'next/image';
import TitleWithDynamicBG from './titleWithDynamicBG';

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
    <div
      id="Services"
      className="flex flex-col items-center w-full h-full max-w-2xl gap-8 mx-auto bg-black pt-14 space-y-7"
    >
      <TitleWithDynamicBG
        title={'CHAPTER ONE'}
        subTitle={'Services we provide'}
      />
      <ul className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-2">
        {chapterOneItems.map((item) => {
          return (
            <li className="relative" key={item.id}>
              <Image
                src={item.imgSrc}
                width={170}
                height={180}
                alt={item.alt}
              />
              <p className="absolute w-full px-10 text-lg font-semibold leading-tight text-center bottom-2">
                {item.title}
              </p>
            </li>
          );
        })}
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
