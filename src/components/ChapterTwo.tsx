import {
  activeIcon,
  activePhoto1,
  activePhoto2,
  gameIcon,
} from '../../public/cp2/index';
import Image from 'next/image';
import TitleWithDynamicBG from './TitleWithDynamicBG';
import { useTranslations } from 'next-intl';
import GameBoy from './GameBoy';

function ChapterTwo() {
  const t = useTranslations('ChapterTwo');

  return (
    <div
      id="Product"
      className="flex flex-col items-center max-w-2xl mx-auto bg-black pt-14"
    >
      <TitleWithDynamicBG title={t('title')} subTitle={t('sub-title')} />
      <div className="flex w-full gap-3 pt-20 pl-3">
        <Image
          src={activeIcon}
          alt="activeIcon"
          className=""
          width={32}
          height={38}
        />
        <p className="self-end font-semibold">{t('recent-activities')}</p>
      </div>
      <div className="flex justify-center w-full gap-2 pt-2">
        <Image
          src={activePhoto1}
          alt="activePhoto"
          width={120}
          height={80}
          placeholder="blur"
        />
        <Image
          src={activePhoto2}
          alt="activePhoto"
          width={230}
          height={100}
          placeholder="blur"
        />
      </div>
      <div className="w-full pt-3 pl-4 text-xs">
        <p>{t('2023-tap-siac-craft-market-in-spring')}</p>
      </div>
      {/* Game development */}
      <div className="relative flex flex-col w-full">
        <div className="flex w-full gap-3 pt-20 pl-6">
          <Image
            src={gameIcon}
            alt="gameIcon"
            className=""
            width={20}
            height={26}
          />
          <p className="self-end font-semibold">{t('game-development')}</p>
        </div>
        <div className="self-center w-[97%] gap-2 mt-4 bg-cover h-48 bg-gameBanner opacity-60 saturate-100">
          <div className="w-full h-full bg-gradient-to-r from-stone-950/20 via-neutral-950/40 to-stone-950/95"></div>
        </div>
        <div className="absolute flex w-full gap-1 bottom-2 ">
          <div className="flex flex-col w-1/2 pl-8">
            <p className="text-base font-bold text-white">
              {t('house-of-whisker-mouse')}
            </p>
            <p className="w-full text-xs font-normal">
              {t('house-of-whisker-mouse-description')}
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute -top-[400px] right-3">
          <GameBoy />
        </div>
      </div>
    </div>
  );
}
export default ChapterTwo;
