import Image from 'next/image';

function ChapterTwo() {
  return (
    <div
      id="Product"
      className="flex flex-col items-center h-full gap-8 bg-black"
    >
      <div className="flex flex-col items-center justify-center w-full h-32 gap-4 bg-cover bg-banner">
        <h1 className="text-3xl font-bold">CHAPTER TWO</h1>
        <h2 className="text-lg font-medium">Our products</h2>
      </div>
    </div>
  );
}
export default ChapterTwo;
