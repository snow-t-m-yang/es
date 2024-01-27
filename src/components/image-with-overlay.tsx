'use client'

import Image, { StaticImageData } from 'next/image';
import {useState} from 'react';

type ImageWithOverlayProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  title?: string;
  text?: string;
};

export function ImageWithOverlay({imgSrc, imgAlt}: ImageWithOverlayProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      <Image
        className=" object-cover sm:max-h-[450px] rounded-md"
        fill
        src={imgSrc}
        alt={imgAlt}
      />
      {isClicked && (
        <div className={``}>
          <div className="absolute inset-0 bg-black rounded-md opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white">Hello World</h1>
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
