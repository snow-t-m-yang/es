import Video from '@/components/Video';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <div className="absolute z-10 grid h-full grid-rows-[20%_40%_40%]">
        <Image
          className="row-start-2 "
          src="dark-logo.svg"
          width={300}
          height={300}
          alt="Eternal Story Logo"
        />
        <h1 className="row-start-3 text-4xl font-bold">
          ONLY
          <br />
          STORIES ARE
          <br />
          ETERNAL.
        </h1>
      </div>

      <div className="scale-[250%]">
        <Video source="/dark-background-dynamic.mp4" autoPlay={true} />
      </div>
    </div>
  );
};

export default Landing;
