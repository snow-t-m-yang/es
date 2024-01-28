"use client";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { ImageWithOverlay } from "./image-with-overlay";

type CarouselProps = {
  chapter?: "ChapterOne" | "ChapterTwo" | "ChapterThree";
  slides: {
    imgSrc: StaticImageData;
    alt: string;
    id: string;
    title?: string;
    description?: string;
    link?: string;
    icon?: StaticImageData;
  }[];
};

export default function Carousel({ chapter, slides }: CarouselProps) {
  const t = useTranslations(chapter);

  // https://splidejs.com/guides/getting-started/#importing-css/
  const options = {
    type: slides.length > 1 ? "loop" : "slide",
    gap: "1.5rem",
    drag: "free",
    arrows: false,
    pagination: false,
    perPage: 1,
    heightRatio: 0.5,
    width: "100%",
    autoScroll:
      slides.length > 1
        ? {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 0.9,
          }
        : false,
  };
  return (
    <div className="px-3 md:px-0">
      <Splide
        options={options}
        extensions={{ AutoScroll }}
        aria-label="carousel"
      >
        {slides.map((slide) => {
          return (
            <SplideSlide key={slide.id}>
              <ImageWithOverlay
                imgSrc={slide.imgSrc}
                imgAlt={slide.alt}
                title={t(slide.title!)}
                description={t(slide.description!)}
                link={slide.link}
                icon={slide.icon}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
