"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section class="grid place-items-center p-5 my-28 w-fit mx-auto rounded-lg border border-zinc-700">
      <div className="text-center">
        <p className="text-base font-semibold text-sky-600">
          Bir Problem Var !
        </p>

        <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold tracking-light text-white">
          {error.message || "Birşeyler Yanlış Gitti"}
        </h1>

        <p className="mt-6 text-base leading-7 text-zinc-400">
          Daha sonra Tekrar Dene
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          className="rounded-lg bg-cyan-700 bg-opacity-50 hover:bg-opacity-100  p-2 font-medium "
          onClick={() => reset()}
        >
          Tekrar Dene
        </button>
        <Link
          href="/"
          className="rounded-lg border p-2 border-slate-800 text-slate-300 hover:text-white"
        >
          AnaSayfa
        </Link>
      </div>
    </section>
  );
}
