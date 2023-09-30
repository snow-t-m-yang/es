'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import TitleWithDynamicBG from './titleWithDynamicBG';

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
      imgSrc: '/cp3/2.png',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/3.png',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/4.png',
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
      className="flex flex-col items-center h-full max-w-2xl mx-auto bg-black pt-14 space-y-7"
    >
      <TitleWithDynamicBG title={'CHAPTER THREE'} subTitle={'Contact Us'} />
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
