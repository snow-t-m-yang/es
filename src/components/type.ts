import { StaticImageData } from "next/image";

export type TSlide = {
  imgSrc: StaticImageData;
  alt: string;
  id: string;
  title?: string;
  description?: string;
  link?: string;
  icon?: StaticImageData;
};
