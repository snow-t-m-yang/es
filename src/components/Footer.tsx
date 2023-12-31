import Image from 'next/image';
import Link from 'next/link';
import { instagram } from '../../public/logos';

function Footer() {
  return (
    <footer className="pb-24">
      <p className={`flex justify-center w-full font-semibold text-xl`}>
        eternal.story.cc@gmail.com
      </p>
      <div className="flex flex-col items-center justify-center w-full gap-2 pt-12">
        <Link
          href={
            'https://instagram.com/story.never.die.studio?igshid=OGQ5ZDc2ODk2ZA=='
          }
          target="_blank"
        >
          <Image src={instagram} alt="instagram logo" height={50} width={50} />
        </Link>
        <p className={`text-xl`}>story.never.die.studio</p>
      </div>
      <div className="flex justify-center w-full pt-10 text-xs font-extralight">
        <p>Copyright © 2023 ETERNAL STORY.LTD . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
