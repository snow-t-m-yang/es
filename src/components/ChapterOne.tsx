import Image, { StaticImageData } from "next/image";
import TitleWithDynamicBG from "./TitleWithDynamicBG";
import {
  brandIdentity0,
  brandIdentity1,
  brandIdentity2,
  ComicIllustration0,
  EventImage0,
  EventImage1,
  VideoProduction0,
  VideoProduction1,
} from "../../public/cp1";
import { useTranslations } from "next-intl";
import Carousel from "./carousel/Carousel";

type ChapterOneItemsType = {
  title: string;
  slides?: {
    imgSrc: StaticImageData;
    alt: string;
    id: string;
    title?: string;
    description?: string;
    link?: string;
    icon?: StaticImageData;
  }[];
  id: string;
};

const newLocal = "video-production-slide1-title";
const chapterOneItems: ChapterOneItemsType[] = [
  {
    title: "brand-identity",
    id: crypto.randomUUID(),
    slides: [
      {
        imgSrc: brandIdentity0,
        alt: "brand identity",
        id: crypto.randomUUID(),
        title: "brand-identity-slide0-title",
        description: "brand-identity-slide0-description",
      },
      {
        imgSrc: brandIdentity1,
        alt: "brand identity",
        id: crypto.randomUUID(),
        title: "brand-identity-slide1-title",
        description: "brand-identity-slide1-description",
      },
      {
        imgSrc: brandIdentity2,
        alt: "brand identity",
        id: crypto.randomUUID(),
        title: "brand-identity-slide2-title",
        description: "brand-identity-slide2-description",
      },
    ],
  },
  {
    title: "event-image",
    id: crypto.randomUUID(),
    slides: [
      {
        imgSrc: EventImage0,
        alt: "Event Image 1",
        id: crypto.randomUUID(),
        title: "event-image-slide0-title",
        description: "event-image-slide0-description",
      },
      {
        imgSrc: EventImage1,
        alt: "Event Image 2",
        id: crypto.randomUUID(),
        title: "event-image-slide1-title",
        description: "event-image-slide1-description",
      },
    ],
  },
  {
    title: "comic-illustration",
    id: crypto.randomUUID(),
    slides: [
      {
        imgSrc: ComicIllustration0,
        alt: "Comic Illustration 1",
        id: crypto.randomUUID(),
        title: "comic-illustration-slide0-title",
        description: "comic-illustration-slide0-description",
      },
    ],
  },
  {
    title: "video-production",
    id: crypto.randomUUID(),
    slides: [
      {
        imgSrc: VideoProduction0,
        alt: "Video Production 1",
        id: crypto.randomUUID(),
        title: "video-production-slide0-title",
        description: "video-production-slide0-description",
      },
      {
        imgSrc: VideoProduction1,
        alt: "Video Production 2",
        id: crypto.randomUUID(),
        title: newLocal,
        description: "video-production-slide1-description",
      },
    ],
  },
];

function ChapterOne() {
  const t = useTranslations("ChapterOne");

  return (
    <div
      id="Services"
      className="flex flex-col items-center w-full max-w-2xl gap-8 mx-auto space-y-7"
    >
      <TitleWithDynamicBG title={t("title")} subTitle={t("sub-title")} />
      <ul className="w-full h-full space-y-7">
        {chapterOneItems.map((item) => {
          return (
            <li className="relative space-y-5" key={item.id}>
              <p className="w-full px-10 text-xl font-semibold text-center">
                {t(item.title)}
              </p>
              <Carousel slides={item.slides!} chapter={"ChapterOne"} clickable={true}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ChapterOne;
