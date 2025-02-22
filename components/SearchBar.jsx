"use client";
import { FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { getSearchResults } from "@/utils/helpers/Datafetcher";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  async function handleResults() {
    setResults(await getSearchResults(searchText, setMessage));
  }

  // durum mesajı süresi
  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value), handleResults();
            }}
            className="rounded-lg bg-black text-center w-full md:w-48 lg:w-full text-white p-2 pl-10 border border-zinc-600 bg-opacity-40 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Film/Dizi Ara"
          />
          <button>
            <FaSearch className="absolute left-3 top-3 text-red-700" />
          </button>
          {searchText.length > 0 && (
            <button
              onClick={() => {
                setSearchText(""), setResults([]);
              }}
            >
              <AiFillCloseCircle className="absolute right-3 top-3 text-red-700" />
            </button>
          )}
        </div>
      </div>

      <div className="relative flex justify-center">
        <ul className="absolute z-10">
          {results.map((result, index) => (
            <Link
              key={index}
              href={`/Watch/${result.id}`}
              onClick={() => {
                setResults([]);
              }}
            >
              <li className="p-3 flex hover:bg-stone-900 bg-stone-950 w-[400px] items-center">
                <div className="w-[70px] h-[80px] relative">
                  <Image
                    className="rounded-md"
                    src={result.image_path}
                    alt={result.title}
                    quality={30}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="
                                        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU+Q8AAV0BLQfuLZ4AAAAASUVORK5CYII=
                                        "
                  />
                </div>
                <div className="grid ms-5 gap-y-2">
                  <h2>{result.title}</h2>
                  <hr />
                  <div className="flex gap-x-3 text-gray-500 text-sm">
                    <p>{result.type}</p>
                    <p>{result.release_date}</p>
                    <p>IMDB: {result.imdb_score}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchBar;
