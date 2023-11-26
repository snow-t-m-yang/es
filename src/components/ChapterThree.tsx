'use client';

import Image, { StaticImageData } from 'next/image';
import TitleWithDynamicBG from './TitleWithDynamicBG';
import { carousel1, carousel2, carousel3, carousel4 } from '../../public/cp3';
import { useTranslations } from 'next-intl';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// @ts-expect-error
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

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

function ChapterThree() {
  const t = useTranslations('ChapterThree');

  // https://splidejs.com/guides/getting-started/#importing-css/
  const options = {
    type: 'loop',
    gap: '0.5rem',
    drag: 'free',
    arrows: false,
    pagination: false,
    perPage: 2,
    heightRatio: 1,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 0.9,
    },
  };

  return (
    <div
      id="Contact"
      className="flex flex-col items-center max-w-2xl mx-auto py-14 space-y-7"
    >
      <TitleWithDynamicBG title={t('title')} subTitle={t('sub-title')} />
      <div className="w-screen max-w-2xl">
        <Splide
          options={options}
          extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
        >
          {chapterThreeImageItems.map((slide) => {
            return (
              <SplideSlide key={slide.id}>
                <Image className=' object-cover sm:max-h-[450px] rounded-md' fill src={slide.imgSrc} alt="Image 1" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
export default ChapterThree;
