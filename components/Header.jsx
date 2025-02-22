"use client";
import { FaPlayCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/utils/FireBase";
import Navigation from "@/components/Link";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setIsLogin(true) : setIsLogin(false);
    });
  });

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="bg-gradient-to-b from-black to-transparent">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 md:py-10 px-2">
        <Link
          href="/"
          className="flex items-center bg-transparent rounded-full p-1 text-red-600 md:text-2xl lg:text-3xl text-xl font-semibold shadow-2xl shadow-red-600/100"
        >
          <FaPlayCircle className="animate-pulse mr-1" />
          FurkanPal
        </Link>

        <button
          onClick={() => setMenu(!menu)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl rounded-lg md:hidden"
        >
          {menu ? <TiThMenu /> : <AiFillCloseCircle />}
        </button>

        <div
          className={`items-center justify-between bg-black rounded-lg text-center md:bg-transparent w-full md:flex md:w-fit ${
            menu && "hidden"
          } `}
        >
          <div className="flex flex-col p-4 md:p-0 font-semibold mt-4 md:flex-row lg:space-x-8 md:space-x-5 md:mt-0 gap-y-5 md:gap-y-0">
            <SearchBar />
            <Navigation
              navLinks={[
                {
                  name: "FİLMLER",
                  href: "/Category/Film",
                  active: "text-red-500 border-red-600",
                  ınActive: "text-slate-300",
                  style:
                    "hover:text-red-500  border-b-4  hover:border-red-600 transition duration-200",
                },
                {
                  name: "DİZİLER",
                  href: "/Category/Dizi",
                  active: "text-red-500 border-red-600",
                  ınActive: "text-slate-300",
                  style:
                    "hover:text-red-500  border-b-4  hover:border-red-600 transition duration-200",
                },
                {
                  name: "ANİMELER",
                  href: "/Category/Anime",
                  active: "text-red-500 border-red-600",
                  ınActive: "text-slate-300",
                  style:
                    "hover:text-red-500  border-b-4  hover:border-red-600 transition duration-200",
                },
              ]}
            />
            {isLogin ? (
              <button
                onClick={handleSignOut}
                type="button"
                className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Çıkış Yap
              </button>
            ) : (
              <Link
                href="/Login"
                type="button"
                className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Giriş Yap
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
