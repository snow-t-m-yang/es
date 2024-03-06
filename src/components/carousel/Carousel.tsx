"use client";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { ImageWithOverlay, ImageWithOverlayProps } from "./image-with-overlay";

export type Tslide = ImageWithOverlayProps & { id: string, alt: string };

type CarouselProps = {
  chapter?: "ChapterOne" | "ChapterTwo" | "ChapterThree";
  clickable?: boolean;
  slides: Tslide[];
};

export default function Carousel({ chapter, slides, clickable }: CarouselProps) {
  const t = useTranslations(chapter);

  // https://splidejs.com/guides/getting-started/#importing-css/
  const options = {
    type: slides.length > 1 ? "loop" : "slide",
    gap: "0.7rem",
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
            speed: 0.5,
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
                alt={slide.alt}
                clickable={clickable}
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
