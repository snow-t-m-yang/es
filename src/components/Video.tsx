type VideoProps = {
  source: string;
  autoPlay?: boolean;
};

const Video = ({ source, autoPlay }: VideoProps) => {
  return (
    <video
      className="h-screen"
      autoPlay={autoPlay}
      loop
      playsInline
      muted
      width="100%"
    >
      <source src={source} type="video/webm" />
      Sorry, your browser does not support videos.
    </video>
  );
};

export default Video;
