import {
  activeIcon,
  activity1,
  comic1,
  comic2,
  comic3,
  comicIcon,
  film1,
  film2,
  filmIcon,
  game1,
  gameIcon,
} from "../../public/cp2/index";
import Image from "next/image";
import TitleWithDynamicBG from "./TitleWithDynamicBG";
import { useTranslations } from "next-intl";
import GameBoy from "./GameBoy";
import Carousel, { Tslide } from "./carousel/Carousel";
import Link from "next/link";
import { ImageWithOverlay } from "./carousel/image-with-overlay";

type ChapterTwoItemsType = {
  activity: {
    slides: Tslide[];
  };
  film: {
    slides: Tslide[];
  };
  game: {
    slides: Tslide[];
  };
  comic: {
    slides: Tslide[];
  };
};

const ChapterTwoItems: ChapterTwoItemsType = {
  activity: {
    slides: [
      {
        imgSrc: activity1,
        alt: "activity1",
        id: crypto.randomUUID(),
        title: "activity-slide0-title",
        description: "activity-slide0-description",
      },
    ],
  },
  film: {
    slides: [
      {
        imgSrc: film1,
        alt: "film1",
        id: crypto.randomUUID(),
        title: "film-slide0-title",
        description: "film-slide0-description",
        link: "https://www.youtube.com/watch?v=_um_JCkSeig&ab_channel=%E5%BA%A6%E6%A9%8B%E7%84%A1%E9%8C%A2%E4%B8%A8Documentary",
        icon: "youtube",
      },
      {
        imgSrc: film2,
        alt: "film2",
        id: crypto.randomUUID(),
        title: "film-slide1-title",
        description: "film-slide1-description",
        link: "https://www.youtube.com/watch?v=qulZqOvdLqk&t=31s&ab_channel=%E5%BA%A6%E6%A9%8B%E7%84%A1%E9%8C%A2%E4%B8%A8Documentary",
        icon: "youtube",
      },
    ],
  },
  game: {
    slides: [
      {
        imgSrc: game1,
        alt: "game1",
        id: crypto.randomUUID(),
        title: "game-slide0-title",
        description: "game-slide0-description",
      },
    ],
  },
  comic: {
    slides: [
      {
        imgSrc: comic1,
        alt: "comic1",
        id: crypto.randomUUID(),
        title: "comic-slide0-title",
        description: "comic-slide0-description",
        icon: "read",
        link: "https://instagram.com/arsamu_milktea?igshid=OGQ5ZDc2ODk2ZA==",
      },
      {
        imgSrc: comic2,
        alt: "comic2",
        id: crypto.randomUUID(),
        title: "comic-slide1-title",
        description: "comic-slide1-description",
        icon: "read",
        link: "https://www.webtoons.com/zh-hant/canvas/%E8%B6%85%E8%B3%BD%E5%8D%9A%E5%AE%85%E7%94%B7/list?title_no=762940",
      },
      {
        imgSrc: comic3,
        alt: "comic3",
        id: crypto.randomUUID(),
        title: "comic-slide2-title",
        description: "comic-slide2-description",
        icon: "read",
        link: "https://instagram.com/detective_donbut?igshid=OGQ5ZDc2ODk2ZA==",
      },
    ],
  },
};

function ChapterTwo() {
  const t = useTranslations("ChapterTwo");

  return (
    <div
      id="Product"
      className="flex flex-col items-center max-w-2xl mx-auto space-y-7"
    >
      <TitleWithDynamicBG title={t("title")} subTitle={t("sub-title")} />
      {/* Activity */}
      <div className="flex w-full gap-3 px-3 md:px-0">
        <Image
          src={activeIcon}
          alt="activeIcon"
          className=""
          width={32}
          height={38}
        />
        <p className="self-end font-semibold">{t("recent-activities")}</p>
      </div>
      <div className="w-full h-full">
        <Carousel
          chapter="ChapterTwo"
          slides={ChapterTwoItems.activity.slides as Tslide[]}
          clickable={true}
        />
      </div>

      {/* Game */}
      {/* <div className="relative flex flex-col w-full space-y-5 md:pb-16"> */}
      <div className="flex w-full gap-3 px-3 md:px-0">
        <Image src={gameIcon} alt="gameIcon" width={20} height={26} />
        <p className="self-end font-semibold">{t("game-development")}</p>
      </div>
      <div className="w-full h-full">
        <Carousel
          chapter="ChapterTwo"
          slides={ChapterTwoItems.game.slides as Tslide[]}
          clickable={true}
        />
      </div>
      {/* <div className="hidden md:block absolute -top-[470px] right-3">
          <GameBoy />
        </div> */}
      {/* </div> */}

      {/* Film */}
      <div className="relative flex flex-col w-full space-y-5">
        <div className="flex w-full gap-3 px-3 md:px-0">
          <Image src={filmIcon} alt="filmIcon" width={20} height={26} />
          <p className="self-end font-semibold">{t("film-product")}</p>
        </div>
        <div className="w-full h-full pt-2">
          <Carousel
            chapter="ChapterTwo"
            slides={ChapterTwoItems.film.slides as Tslide[]}
            clickable={true}
          />
        </div>
      </div>

      {/* Comic */}
      <div className="w-full space-y-5">
        <div className="flex w-full gap-3 px-3 md:px-0">
          <Image src={comicIcon} alt="comicIcon" width={28} height={26} />
          <p className="self-end font-semibold ">{t("comic-art")}</p>
        </div>

        <ul className="relative flex flex-col h-[300px] sm:h-[600px] justify-center gap-y-3 px-3 md:px-0 transition-all duration-300">
          {ChapterTwoItems.comic.slides.map(
            ({ imgSrc, id, alt, title, description, icon, link }) => {
              return (
                <li key={id} className="w-full h-full">
                  <ImageWithOverlay
                    imgSrc={imgSrc}
                    alt={alt}
                    clickable={true}
                    title={t(title)}
                    description={t(description)}
                    icon={icon}
                    link={link}
                  />
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
}
export default ChapterTwo;
