import Image from 'next/image';

function Footer() {
  return (
    <footer className="pb-24">
      <p className={`flex justify-center w-full text-xl font-Knewave`}>
        eternal.story.cc@gmail.com
      </p>
      <div className="flex flex-col items-center justify-center w-full gap-2 pt-12">
        <Image src="/cp3/instagram.svg" alt="ins" height={50} width={50} />
        <p className={`text-xl font-Nightshade`}>
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
