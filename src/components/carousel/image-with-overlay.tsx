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
    <div className="relative w-full h-full" onClick={handleClick}>
      <Image
        className="object-cover rounded-md"
        fill
        src={imgSrc}
        alt={imgAlt}
        placeholder="blur"
      />
      {clickable && isClicked && (
        <div className={``}>
          <div className="absolute inset-0 bg-black rounded-md opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-5">
              <h1 className="sm:text-3xl text-xl font-semibold text-white">{title}</h1>
              <p className="text-sm px-3 text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
