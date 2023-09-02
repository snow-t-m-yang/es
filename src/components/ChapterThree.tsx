'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

function ChapterThree() {
  const AUTOPLAY_INTERVAL = 4000;

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

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div id="Contact" className="flex flex-col items-center h-full bg-black">
      <div className="flex flex-col items-center justify-center w-[97%] h-28 gap-4 bg-cover bg-banner">
        <h1 className="text-3xl font-bold">CHAPTER THREE</h1>
        <h2 className="text-lg font-medium">Contact us</h2>
      </div>
      <div className="flex w-full" ref={emblaRef}>
        {chapterThreeImageItems.map((items) => {
          return (
            <div className="w-[90%]" key={items.id}>
              <Image
                src={items.imgSrc}
                alt={items.alt}
                width={200}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ChapterThree;
