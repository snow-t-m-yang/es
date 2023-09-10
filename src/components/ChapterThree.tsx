'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import FanPageIcon from './Footer';

function ChapterThree({ options }: { options: EmblaOptionsType }) {
  type ChapterThreeImageType = {
    imgSrc: string;
    alt: string;
    id: string;
  };

  const chapterThreeImageItems: ChapterThreeImageType[] = [
    {
      imgSrc: '/cp3/1.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/2.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/3.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/4.jpg',
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
      className="flex flex-col items-center h-full max-w-2xl mx-auto bg-black"
    >
      <div className="flex flex-col items-center justify-center w-[97%] h-28 gap-4 bg-cover bg-banner">
        <h1 className="text-3xl font-bold">CHAPTER THREE</h1>
        <h2 className="text-lg font-medium">Contact us</h2>
      </div>
      <div className="w-screen max-w-2xl overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {chapterThreeImageItems.map((items) => {
            return (
              <div
                className="flex-[0_0_100%] md:flex-[0_0_50%] justify-center items-center flex mt-10 relative h-72 "
                key={items.id}
              >
                <Image
                  src={items.imgSrc}
                  alt={items.alt}
                  fill
                  objectFit="contain"
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
