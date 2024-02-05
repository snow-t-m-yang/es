type VideoProps = {
  source: string;
  autoPlay?: boolean;
  className?: string;
};

const Video = ({ source, autoPlay, className }: VideoProps) => {
  return (
    // <video
    //   className={className}
    //   autoPlay={autoPlay}
    //   loop
    //   playsInline
    //   muted
    //   width="100%"
    // >
    //   <source src={source} type="video/webm" />
    //   Sorry, your browser does not support videos.
    // </video>
    <div
      className={`${className} w-full h-screen bg-gradient-to-tr from-sky-950 via-blue-950 to-slate-700 background-animate`}
    ></div>
  );
};

export default Video;
