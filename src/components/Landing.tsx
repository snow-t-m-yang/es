import Video from '@/components/Video';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-full min-h-screen overflow-x-hidden">
      <div className="absolute z-10 flex flex-col justify-center h-full">
        <Image
          className=""
          src="dark-logo.svg"
          width={300}
          height={300}
          alt="Eternal Story Logo"
        />
        <h1 className="text-3xl font-bold">
          ONLY
          <br />
          STORIES ARE
          <br />
          ETERNAL.
        </h1>
      </div>

      <div className="h-screen scale-[230%]">
        <Video source="/Dynamic-background.webm" autoPlay={true} />
      </div>
    </div>
  );
};

export default Landing;
