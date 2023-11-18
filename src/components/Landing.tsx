import Video from '@/components/Video';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Landing = () => {
  const t = useTranslations('Landing');
  const slogan = t('slogan').split(' ');
  
  return (
    <div className="relative flex flex-col items-center justify-center h-full min-w-full overflow-hidden">
      <div className="absolute z-10 grid h-full grid-rows-3 py-7">
        <Image
          className="row-start-2 "
          src="dark-logo.svg"
          width={300}
          height={300}
          alt="Eternal Story Logo"
        />
        <h1 className="self-end row-start-3 pb-16 text-4xl font-bold uppercase">
          {slogan[0]}
          <br />
         { slogan[1]}
          <br />
         {`${slogan[2] ? slogan[2] : ''} ${slogan[3] ? slogan[3] : ''}`}
        </h1>
      </div>

      <Video
        className="scale-[250%] overflow-hidden"
        source="/dark-background-dynamic.mp4"
        autoPlay={true}
      />
    </div>
  );
};

export default Landing;
