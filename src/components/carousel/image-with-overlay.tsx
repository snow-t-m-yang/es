"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { youtube, read } from "../../../public/logos";
import { cn } from "@/lib/utils";

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

  const isYoutube = icon === "youtube";
  const isRead = icon === "read";
  const iconSize = isYoutube ? 100 : 50;

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
            <div className="relative flex flex-col justify-center h-full gap-y-16">
              <div
                className={cn(
                  "flex flex-col px-3 py-5 gap-y-5 md:px-20",
                  isRead && "flex-row justify-between items-center",
                )}
              >
                <div
                  className={cn(
                    "text-center md:space-y-5",
                    isRead && "text-left",
                  )}
                >
                  <h1 className="font-semibold text-white md:text-2xl text-md">
                    {title}
                  </h1>
                  <p className="text-sm leading-tight text-gray-200 md:text-xl md:leading-normal md:text2xl">
                    {description}
                  </p>
                </div>
                <div className="self-end shrink-0">
                  {link && icon && (
                    <Link
                      className={cn("")}
                      href={link}
                      target="_blank"
                    >
                      <Image
                        src={isYoutube ? youtube : read}
                        alt="instagram logo"
                        height={iconSize}
                        width={iconSize}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
