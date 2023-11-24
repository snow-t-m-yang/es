import Image, { StaticImageData } from 'next/image';
import TitleWithDynamicBG from './TitleWithDynamicBG';
import cp1_1 from '../../public/chapterOne-1.png';
import cp1_2 from '../../public/chapterOne-2.png';
import cp1_3 from '../../public/chapterOne-3.png';
import cp1_4 from '../../public/chapterOne-4.png';
import { useTranslations } from 'next-intl';

type ChapterOneItemsType = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
  id: string;
};

const chapterOneItems: ChapterOneItemsType[] = [
  {
    title: 'interactive-technology',
    imgSrc: cp1_1,
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
  {
    title: 'filming',
    imgSrc: cp1_2,
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
  {
    title: 'web-page-creation',
    imgSrc: cp1_3,
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
  {
    title: 'graphic-design',
    imgSrc: cp1_4,
    alt: 'chapterOne photo',
    id: crypto.randomUUID(),
  },
];

function ChapterOne() {
  const t = useTranslations('ChapterOne');

  return (
    <div
      id="Services"
      className="flex flex-col items-center w-full h-full max-w-2xl gap-8 mx-auto bg-black pt-14 space-y-7"
    >
      <TitleWithDynamicBG
        title={t('title')}
        subTitle={t('sub-title')}
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
                placeholder='blur'
              />
              <p className="absolute w-full px-10 text-lg font-semibold leading-tight text-center bottom-2">
                {t(item.title)}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="w-[80%] text-sm text-center mt-4">
        <p>
          {t('description')}
        </p>
      </div>
    </div>
  );
}
export default ChapterOne;
