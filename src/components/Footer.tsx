import Image from 'next/image';
import { Knewave, Jim_Nightshade } from 'next/font/google';

const familyKnewave = Knewave({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const familyJimNightshade = Jim_Nightshade({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

function Footer() {
  return (
    <footer className=" -mt-80">
      <p
        className="flex justify-center w-full text-xl"
        style={familyKnewave.style}
      >
        eternal.story.cc@gmail.com
      </p>
      <div className="flex flex-col items-center justify-center w-full gap-2 pt-12">
        <Image src="/cp3/Instagram.svg" alt="Discord" height={50} width={50} />
        <p style={familyJimNightshade.style} className="text-xl ">
          story.never.die.studio
        </p>
      </div>
      <div className="flex justify-center w-full pt-10 text-xs font-extralight">
        <p>Copyright © 2023 ETERNAL STORY.LTD . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
