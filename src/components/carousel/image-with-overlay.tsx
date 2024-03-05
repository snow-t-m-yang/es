"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { youtube } from "../../../public/logos";

export type ImageWithOverlayProps = {
  imgSrc: StaticImageData;
  alt: string;
  clickable?: boolean;
  title?: string;
  description?: string;
  link?: string;
  icon?: string;
};

export function ImageWithOverlay({
  imgSrc,
  alt,
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
        alt={alt}
        placeholder="blur"
      />
      {clickable && isClicked && (
        <div className={``}>
          <div className="absolute inset-0 bg-black rounded-md opacity-80"></div>
          <div className="absolute inset-0 h-full backdrop-blur-md">
            <div className="relative flex flex-col justify-center h-full text-center gap-y-16">
              <div className="flex flex-col px-3 py-5 gap-y-5 md:px-20">
                <div className="gap-y-5">
                  <h1 className="text-xl font-semibold text-white sm:text-3xl">
                    {title}
                  </h1>
                  <p className="text-sm text-gray-200">{description}</p>
                </div>
                {link && icon && (
                  <Link className="self-end" href={link} target="_blank">
                    <Image
                      src={youtube}
                      alt="instagram logo"
                      height={100}
                      width={100}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
