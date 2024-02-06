"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageWithOverlayProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  clickable?: boolean;
  title?: string;
  description?: string;
  link?: string;
  icon?: StaticImageData;
};

export function ImageWithOverlay({
  imgSrc,
  imgAlt,
  clickable = false,
  title,
  description,
  link,
  icon,
}: ImageWithOverlayProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="relative h-full w-full" onClick={handleClick}>
      <Image
        className="rounded-md h-auto w-full object-cover"
        fill
        src={imgSrc}
        alt={imgAlt}
        placeholder="blur"
      />
      {clickable && isClicked && (
        <div className={``}>
          <div className="absolute inset-0 bg-black rounded-md opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md">
            <div className="space-y-5 text-center">
              <h1 className="text-xl font-semibold text-white sm:text-3xl">
                {title}
              </h1>
              <p className="px-3 text-sm text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
