'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import TitleWithDynamicBG from './TitleWithDynamicBG';
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
} from '../../public/cp3';

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
      imgSrc: carousel1,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: carousel2,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: carousel3,
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: carousel4,
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
      className="flex flex-col items-center max-w-2xl mx-auto p-14 space-y-7"
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
