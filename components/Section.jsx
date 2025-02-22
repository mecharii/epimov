import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight, FaPlay } from "react-icons/fa";

const Section = ({ sectionTitle, movies }) => {
  return (
    <section className="max-w-screen-xl mx-auto px-2 my-10">
      <div className="flex justify-between items-center text-center mb-10">
        <h2 className="md:text-2xl text-xl font-bold">{sectionTitle}</h2>
        <hr className="border-t-2 border-slate-800 flex-grow mx-4" />
        <span className="flex justify-center items-center gap-2 cursor-pointer hover:text-red-600">
          Tümü <FaRegArrowAltCircleRight />{" "}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
        {movies.map((movie) => (
          <div
            className="group overflow-hidden rounded-lg h-96 w-full  relative transition-transform duration-200 ease-in-out hover:z-10 hover:transition-transform hover:scale-110"
            key={movie.id}
          >
            <Link href={`/Watch/${movie.id}`}>
              <Image
                className="md:group-hover:opacity-30 md:opacity-100 opacity-70 transition duration-200"
                src={movie.image_path}
                alt={movie.title}
                quality={50}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="
                                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU+Q8AAV0BLQfuLZ4AAAAASUVORK5CYII=
                                "
              />
              <div className="relative md:opacity-0 group-hover:opacity-100 transition duration-200 w-ful h-full">
                <FaPlay className="absolute top-0 left-0 text-2xl text-red-600 m-3" />
                <span className="absolute bottom-0 left-0 p-2 font-semibold">
                  {movie.title}
                </span>
                <span className="absolute right-0 bottom-0 text-center text-red-500 font-bold bg-black p-2 rounded-lg">
                  {movie.imdb_score || "?"}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
