import Video from '@/components/Video';

type Props = {
  title: string;
  subTitle: string;
};

const TitleWithDynamicBG = ({ title, subTitle }: Props) => {
  return (
    <div className="relative flex flex-col items-center w-full py-7">
      <Video
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        source={'/dark-background-dynamic.mp4'}
        autoPlay={true}
      />

      <div className="relative z-10 space-y-3 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-lg font-medium">{subTitle}</h2>
      </div>
    </div>
  );
};

export default TitleWithDynamicBG;
