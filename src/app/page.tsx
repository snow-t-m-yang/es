import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Image src={'/logo1.png'} alt='logo' width={100} height={100}/>
      <h1 className="z-10 text-4xl font-bold text-center capitalize">
        Eternal Story .LTD
      </h1>
      <Image src={'/background.png'} fill alt='logg'/>
    </main>
  )
}
