import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-12 flex justify-between items-start">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">jsopn</h1>
        <p className="text-xl text-gray-500">sleep deprived developer</p>
      </div>
      <Image
        src="/placeholder.svg?height=80&width=80"
        width={80}
        height={80}
        alt="Pixel art avatar"
        className="rounded"
      />
    </header>
  );
}
