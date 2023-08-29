import Image from 'next/image';
import activeIcon from '../../public/cp2/active-icon.svg';
import gameIcon from '../../public/cp2/gameIcon.svg';

function ChapterTwo() {
  return (
    <div id="Product" className="flex flex-col items-center bg-black">
      <div className="flex flex-col items-center justify-center w-[97%] h-28 gap-4 bg-cover bg-banner">
        <h1 className="text-3xl font-bold">CHAPTER TWO</h1>
        <h2 className="text-lg font-medium">Our products</h2>
      </div>
      <div className="flex w-full gap-3 pt-20 pl-3">
        <Image
          src={activeIcon}
          alt="activeIcon"
          className=""
          width={32}
          height={38}
        />
        <p className="self-end font-semibold">Recent activities</p>
      </div>
      <div className="flex justify-center w-full gap-2 pt-2">
        <Image
          src="/cp2/activePhoto.jpg"
          alt="activePhoto"
          width={120}
          height={80}
        />
        <Image
          src="/cp2/activePhoto2.jpg"
          alt="activePhoto"
          width={230}
          height={100}
        />
      </div>
      <div className="w-full pt-3 pl-4 text-xs">
        <p>2023 Tap Siac Craft Market in Spring</p>
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
          <p className="self-end font-semibold">Game development</p>
        </div>
        <div className="self-center w-[97%] gap-2 mt-4 bg-cover h-48 bg-gameBanner opacity-60 saturate-100">
          <div className="w-full h-full bg-gradient-to-r from-stone-950/20 via-neutral-950/40 to-stone-950/95"></div>
        </div>
        <div className="absolute w-full gap-1 bottom-2 ">
          <div className="flex w-full pl-8">
            <p className="text-white">HOUSE OF WHISKER MOUSE</p>
          </div>
          <div className="w-full text-xs pl-7">
            <p>The first casual pixel-style video game in Macau,</p>
            <p>with original stories and characters as an </p>
            <p>extension of brand creation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChapterTwo;
