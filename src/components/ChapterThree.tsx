"use client";

import Image, { StaticImageData } from "next/image";
import TitleWithDynamicBG from "./TitleWithDynamicBG";
import { carousel1, carousel2, carousel3, carousel4 } from "../../public/cp3";
import { useTranslations } from "next-intl";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { ImageWithOverlay } from "./carousel/image-with-overlay";

type ChapterThreeImageType = {
  imgSrc: StaticImageData;
  alt: string;
  id: string;
};

const chapterThreeImageItems: ChapterThreeImageType[] = [
  {
    imgSrc: carousel1,
    alt: "chapter3 photo",
    id: crypto.randomUUID(),
  },
  {
    imgSrc: carousel2,
    alt: "chapter3 photo",
    id: crypto.randomUUID(),
  },
  {
    imgSrc: carousel3,
    alt: "chapter3 photo",
    id: crypto.randomUUID(),
  },
  {
    imgSrc: carousel4,
    alt: "chapter3 photo",
    id: crypto.randomUUID(),
  },
];

// https://splidejs.com/guides/getting-started/#importing-css/
const options = {
  type: "loop",
  gap: "0.5rem",
  drag: "free",
  arrows: false,
  pagination: false,
  heightRatio: 0.6,

  perPage: 1,
  autoScroll: {
    pauseOnHover: true,
    pauseOnFocus: false,
    rewind: false,
    speed: 0.9,
  },
};

function ChapterThree() {
  const t = useTranslations("ChapterThree");

  return (
    <div id="Contact">
      <TitleWithDynamicBG title={t("title")} subTitle={t("sub-title")} />
      <Splide
        options={options}
        extensions={{ AutoScroll }}
        aria-label="My Favorite Images"
      >
        {chapterThreeImageItems.map((slide) => {
          return (
            <SplideSlide key={slide.id}>
              <ImageWithOverlay imgSrc={slide.imgSrc} imgAlt={slide.alt} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
export default ChapterThree;
