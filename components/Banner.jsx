import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import MusicPLayer from "./MusicPlayer";

const Banner = ({ bannerInfo }) => {
  const { image_path, title, description, music_path, id } = bannerInfo;

  return (
    <div className="flex flex-col py-5 md:py-10 gap-6 md:gap-12 max-w-screen-xl mx-auto px-2">
      <div>
        <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
        <p className="text-xl mt-3 max-w-xl ">{description}</p>
      </div>
      <div className="flex gap-2">
        <Link
          href={`/Watch/${id}`}
          className="flex items-center justify-center bg-white text-black hover:bg-black hover:text-red-500 transition duration-300 px-20 md:px-28 py-5 rounded-full text-xl font-extrabold whitespace-nowrap overflow-hidden"
        >
          Watch !
        </Link>
        <button
          aria-label="ekle"
          className="flex items-center justify-center px-4 rounded-full text-2xl border-2 border-white hover:border-red-600 hover:text-red-600 hover:bg-black"
        >
          <FaPlus />
        </button>
        <div className="flex items-center justify-center px-2 rounded-full text-xl border-2 border-white hover:border-red-600 hover:bg-black">
          <MusicPLayer music={music_path} />
        </div>
      </div>
      <div className="absolute inset-0 h-[550px] md:h-[600px] -z-10 max-w-screen-xl mx-auto">
        <div className="bg-gradient-to-t from-black to-transparents absolute bottom-0 p-20 w-full"></div>
        <Image
          className="-z-20 opacity-50"
          src={image_path}
          alt={title}
          placeholder="empty"
          quality={100}
          fill
        />
      </div>
    </div>
  );
};

export default Banner;
