"use client";
import { useState, useEffect } from "react";
import {
  addData,
  deleteData,
  updateData,
  getAllData,
} from "@/utils/helpers/Datafetcher";

const initialFormState = {
  title: "",
  description: "",
  country: "",
  image_path: "",
  music_path: "",
  video_path: "",
  type: "Film",
  category1: "Aksiyon",
  category2: "Aksiyon",
  release_date: "",
  time: "",
  imdb_score: "",
};

const Admin = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [fsData, setFsData] = useState([]);
  const [message, setMessage] = useState("");

  // Veriler çekilir ve izlenir
  useEffect(() => {
    async function fetchData() {
      const data = await getAllData();
      setFsData(data);
    }
    fetchData();
  }, [fsData]);

  //durum mesajının süresi
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
    <section className="max-w-screen-xl mx-auto">
      {/* Durum mesajı */}

      {message && (
        <div className="text-center mt-5 me-5">
          <div className="font-mono rounded-lg bg-gray-800 inline-block p-2">
            {message}
          </div>
        </div>
      )}

      {/* Kontroller  */}

      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto md:w-2/3 gap-x-5 gap-y-5 lg:gap-y-0 p-3 my-10 bg-gray-900 rounded-lg font-bold">
        <button
          onClick={() => addData(formData, setMessage)}
          className="rounded-full py-3  text-green-600 hover:text-green-500 bg-black"
        >
          EKLE
        </button>
        <button
          onClick={() => deleteData(formData, setMessage)}
          className="rounded-full py-3  text-red-600 hover:text-red-500 bg-black"
        >
          SİL
        </button>
        <button
          onClick={() => updateData(formData, setMessage)}
          className="rounded-full py-3  text-cyan-600 hover:text-cyan-500 bg-black"
        >
          GÜNCELLE
        </button>

        <button
          onClick={() => setOpenSideBar(!openSideBar)}
          type="button"
          className="rounded-full py-3 text-white bg-black md:hidden"
        >
          {openSideBar ? "Close" : "Open"}
        </button>
      </div>

      <div className="grid grid-cols-6 gap-x-2">
        {/* Side bar */}

        <aside
          className={`h-full absolute md:relative  md:col-span-2 transition-transform  ${
            openSideBar
              ? "-translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto text-white bg-gray-800 rounded-lg">
            <ul className="space-y-2">
              {fsData.map((movie, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setFormData(movie);
                      setOpenSideBar(false);
                    }}
                    className="flex justify-between items-center p-2 border-b hover:text-black w-full rounded-lg hover:bg-gray-300 group"
                  >
                    <span className="font-bold">{index}</span>
                    <span className="ml-3 font-semibold">{movie.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Form */}

        <form className="grid grid-cols-2 h-fit col-span-6 md:col-span-4 md:grid-cols-3 mx-auto gap-y-8 gap-x-5 p-5  bg-sky-950 rounded-lg font-bold">
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="desc">
              Description
            </label>
            <textarea
              type="text"
              id="desc"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              value={formData.description}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="countryy">
              Country
            </label>
            <input
              type="text"
              id="countryy"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              value={formData.country}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="image">
              İmage Url
            </label>
            <input
              type="text"
              id="image"
              onChange={(e) =>
                setFormData({ ...formData, image_path: e.target.value })
              }
              value={formData.image_path}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="music">
              Music Url
            </label>
            <input
              type="text"
              id="music"
              onChange={(e) =>
                setFormData({ ...formData, music_path: e.target.value })
              }
              value={formData.music_path}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="video">
              Video Url
            </label>
            <input
              type="text"
              id="video"
              onChange={(e) =>
                setFormData({ ...formData, video_path: e.target.value })
              }
              value={formData.video_path}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              value={formData.type}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            >
              <option value="Film">Film</option>
              <option value="Dizi">Dizi</option>
            </select>
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="category1">
              Category One
            </label>
            <select
              id="category1"
              onChange={(e) =>
                setFormData({ ...formData, category1: e.target.value })
              }
              value={formData.category1}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            >
              <option value="Aksiyon">Aksiyon</option>
              <option value="Dram">Dram</option>
              <option value="Komedi">Komedi</option>
              <option value="Fantastik">Fantastik</option>
              <option value="Gerilim">Gerilim</option>
              <option value="Romantik">Romantik</option>
            </select>
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="category2">
              Category Two
            </label>
            <select
              id="category2"
              onChange={(e) =>
                setFormData({ ...formData, category2: e.target.value })
              }
              value={formData.category2}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            >
              <option value="Aksiyon">Aksiyon</option>
              <option value="Dram">Dram</option>
              <option value="Komedi">Komedi</option>
              <option value="Fantastik">Fantastik</option>
              <option value="Gerilim">Gerilim</option>
              <option value="Romantik">Romantik</option>
            </select>
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="release">
              Release Date
            </label>
            <input
              type="text"
              id="release"
              onChange={(e) =>
                setFormData({ ...formData, release_date: e.target.value })
              }
              value={formData.release_date}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="time">
              Time
            </label>
            <input
              type="text"
              id="time"
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              value={formData.time}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
          <div className="">
            <label className="block mb-2 font-semibold" htmlFor="imdb">
              IMDB Score
            </label>
            <input
              type="text"
              id="imdb"
              onChange={(e) =>
                setFormData({ ...formData, imdb_score: e.target.value })
              }
              value={formData.imdb_score}
              className="w-full border rounded px-2 py-1 text-black"
              placeholder="Write Here.."
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;
