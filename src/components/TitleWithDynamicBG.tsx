import Video from "@/components/Background";

type Props = {
  title: string;
  subTitle: string;
};

const TitleWithDynamicBG = ({ title, subTitle }: Props) => {
  return (
    <div className="relative flex flex-col items-center w-full py-7">
      <div className="relative text-white z-10 space-y-3 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-lg font-medium">{subTitle}</h2>
      </div>
    </div>
  );
};

export default TitleWithDynamicBG;
