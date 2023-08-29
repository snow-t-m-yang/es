import 'lightgallery/css/lightgallery.css';

function ChapterThree() {
  type ChapterThreeImageType = {
    imgSrc: string;
    alt: string;
    id: string;
  };

  const ChapterThreeImageItems: ChapterThreeImageType[] = [
    {
      imgSrc: '/cp3/1.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/2.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/3.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
    {
      imgSrc: '/cp3/4.jpg',
      alt: 'chapter3 photo',
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div id="Contact" className="flex flex-col items-center h-full bg-black">
      <div className="flex flex-col items-center justify-center w-[97%] h-28 gap-4 bg-cover bg-banner">
        <h1 className="text-3xl font-bold">CHAPTER THREE</h1>
        <h2 className="text-lg font-medium">Contact us</h2>
      </div>
    </div>
  );
}
export default ChapterThree;
