import comicIcon from '../../public/cp2/comic.svg';
import filmIcon from '../../public/cp2/film.svg';
import fingureIcon from '../../public/cp2/fingure.svg';
import Image from 'next/image';
import Link from 'next/link';
import mangaPic1 from '../../public/cp2/manga-pic1.jpg';
import mangaPic2 from '../../public/cp2/manga-pic2.png';
import mangaPic3 from '../../public/cp2/manga-pic3.jpg';
import pic1 from '../../public/cp2/pic1.jpg';
import shortFilm from '../../public/cp2/shortFilm.png';
import shortShooting from '../../public/cp2/shortShooting.png';

function ChapterTwo() {
  return (
    <div className="w-full max-w-2xl pt-20 pb-24 mx-auto">
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
                src={shortFilm}
                alt="shortFilmPhoto"
                width={180}
                height={80}
                className="rounded-md"
              />
              <p className="pt-1 text-xs text-center">Short film</p>
            </div>
            <div>
              <Image
                src={shortShooting}
                alt="shortShootingPhoto"
                width={180}
                height={80}
                className="rounded-md"
                placeholder='blur'
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
        <Link href="https://www.youtube.com/@documentary6012">
          <Image
            src={pic1}
            alt="picPhoto"
            width={200}
            height={40}
            className="rounded-md cursor-pointer"
            placeholder='blur'
          />
        </Link>
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
              src={mangaPic1}
              alt="Photo"
              width={210}
              height={40}
              className="rounded-2xl"
              placeholder='blur'
            />
          </div>
          <div className="flex justify-center">
            <div className="flex">
              <Image
                src={mangaPic2}
                alt="Photo"
                width={210}
                height={20}
                className="self-center rounded-2xl"
                placeholder='blur'
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
              src={mangaPic3}
              alt="Photo"
              width={210}
              height={20}
              className=" rounded-2xl"
              placeholder='blur'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChapterTwo;
