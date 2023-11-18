'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import TitleWithDynamicBG from './TitleWithDynamicBG';
import cp3_1 from '../../public/cp3/1.jpg';
import cp3_2 from '../../public/cp3/2.png';
import cp3_3 from '../../public/cp3/3.png';
import cp3_4 from '../../public/cp3/4.png';
import { useTranslations } from 'next-intl';

function ChapterThree({ options }: { options: EmblaOptionsType }) {
  const t = useTranslations('ChapterThree');

  type ChapterThreeImageType = {
    imgSrc: StaticImageData;
    alt: string;
    id: string;
  };

  const chapterThreeImageItems: ChapterThreeImageType[] = [
    {
      imgSrc: cp3_1,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: cp3_2,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: cp3_3,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: cp3_4,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
  ];

  const autoplayOptions: any = {
    delay: 3000,
    playOnInit: true,
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  return (
    <div
      id="Contact"
      className="flex flex-col items-center max-w-2xl mx-auto bg-black p-14 space-y-7"
    >
      <TitleWithDynamicBG title={t('title')} subTitle={t('sub-title')} />
      <div className="w-screen max-w-2xl overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {chapterThreeImageItems.map((items) => {
            return (
              <div
                className="flex-[1_0_100%] md:flex-[0_0_100%] justify-center items-center flex mt-10 relative h-96"
                key={items.id}
              >
                <Image
                  src={items.imgSrc}
                  alt={items.alt}
                  fill
                  objectFit="cover"
                  placeholder="blur"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ChapterThree;
