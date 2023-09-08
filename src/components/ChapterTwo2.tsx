import Image from 'next/image';
import filmIcon from '../../public/cp2/film.svg';
import comicIcon from '../../public/cp2/comic.svg';
import fingureIcon from '../../public/cp2/fingure.svg';

function ChapterTwo() {
  return (
    <div className="w-full pt-20 pb-24">
      <div className="flex flex-col w-full gap-2 px-3 pt-4">
        <div className="flex gap-3">
          <Image
            src={filmIcon}
            alt="filmIcon"
            className="flex pb-1"
            width={28}
            height={32}
          />
          <p className="self-end font-semibold ">Film product</p>
        </div>
        <div>
          <div className="flex justify-center w-full gap-2 pt-2">
            <div>
              <Image
                src="/cp2/shortFilm.jpg"
                alt="shortFilmPhoto"
                width={180}
                height={80}
                className="rounded-md"
              />
              <p className="pt-1 text-xs text-center">Short film</p>
            </div>
            <div>
              <Image
                src="/cp2/shortShooting.jpg"
                alt="shortShootingPhoto"
                width={180}
                height={80}
                className="rounded-md"
              />
              <p className="pt-1 text-xs text-center">Event shooting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full pt-10 ">
        <div className="w-[70%] flex flex-col">
          <p className="pl-4 font-medium">IDEA HAS NO MONEY</p>
          <p className="text-[10px] font-light pl-2">
            The channel focuses on story creation. The direction of film
            creation is mainly divided into several categories. There are
            creations that focus on secondary creations, creations that promote
            Macau culture, and original stories.
          </p>
        </div>
        <Image
          src="/cp2/pic1.jpg"
          alt="picPhoto"
          width={200}
          height={40}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col w-full gap-2 px-3 pt-10">
        <div className="flex gap-3">
          <Image src={comicIcon} alt="comicIcon" width={28} height={32} />
          <p className="self-end font-semibold ">Comic art</p>
        </div>
        <div>
          <div className="flex justify-center w-full gap-8 pt-3">
            <span className="flex gap-2 bg-[#7575759E]/60 w-[100px] justify-end items-center  h-9 rounded-xl">
              <p className="text-xs ">了解更多</p>
              <Image
                src={fingureIcon}
                width={30}
                height={30}
                alt="fingure"
                className="animate-pulse"
              />
            </span>
            <Image
              src="/cp2/manga-pic1.jpg"
              alt="Photo"
              width={210}
              height={40}
              className="rounded-2xl"
            />
          </div>
          <div className="flex justify-center">
            <div className="flex">
              <Image
                src="/cp2/manga-pic2.png"
                alt="Photo"
                width={210}
                height={20}
                className="self-center rounded-2xl"
              />
            </div>
            <Image
              src="/cp2/add-pic2.svg"
              alt="Photo"
              width={140}
              height={80}
              className="z-0 self-start pt-0"
            />
          </div>
          <div className="flex items-start justify-center w-full gap-6 pb-2 pl-10 ">
            <Image
              src="/cp2/add-pic3.svg"
              alt="Photo"
              width={80}
              height={100}
              className="flex"
            />

            <Image
              src="/cp2/manga-pic3.jpg"
              alt="Photo"
              width={210}
              height={20}
              className=" rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChapterTwo;
