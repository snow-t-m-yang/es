import activeIcon from '../../public/cp2/active-icon.svg';
import activePhoto1 from '../../public/cp2/activePhoto.jpg';
import activePhoto2 from '../../public/cp2/activePhoto2.png';
import gameIcon from '../../public/cp2/gameIcon.svg';
import Image from 'next/image';
import TitleWithDynamicBG from './TitleWithDynamicBG';
import { useTranslations } from 'next-intl';

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
        <div className="absolute w-full gap-1 bottom-2 ">
          <div className="flex w-full pl-8">
            <p className="text-base font-bold text-white">
              {t('house-of-whisker-mouse')}
            </p>
          </div>
          <div className="w-full text-xs font-normal pl-7">
            <p>{t('house-of-whisker-mouse-description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChapterTwo;
