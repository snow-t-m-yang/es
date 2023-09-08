import Image from 'next/image';

function Footer() {
  return (
    <footer className=" -mt-80">
      <p className="flex justify-center w-full text-lg font-medium">
        eternal.story.cc@gmail.com
      </p>
      <div className="flex justify-center w-full gap-10 pt-12">
        <Image src="/cp3/discord.svg" alt="Discord" height={50} width={50} />

        <Image src="/cp3/facebook.svg" alt="Discord" height={50} width={50} />

        <Image src="/cp3/instagram.svg" alt="Discord" height={50} width={50} />
      </div>
      <div className="flex justify-center w-full pt-10 text-xs font-extralight">
        <p>Copyright © 2023 ETERNAL STORY.LTD . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
