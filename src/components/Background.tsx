import Image from "next/image";
type BackgroundProps = {
  className?: string;
};

export default function Background({ className }: BackgroundProps) {
  return (
    <div className={`${className} w-full h-full object-contain`}>
      <Image src="/static-bg.png" alt="background" fill />
    </div>
  );
}
