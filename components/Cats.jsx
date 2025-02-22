import { CgProfile } from "react-icons/cg";

const Cats = () => {
  return (
    <div className="lg:w-1/2 w-full h-fit grid grid-cols-2 gap-y-5 justify-between items-center bg-zinc-800 rounded-lg lg:p-5 p-1 mt-10 md:me-5 font-semibold">
      <h1 className="col-span-2 text-2xl font-mono text-center mb-5 border-b pb-2">
        Oyuncular
      </h1>

      <div className="grid grid-cols-6 items-center justify-center lg:gap-x-6 gap-x-3">
        <CgProfile className="w-full h-full col-span-2 text-slate-300 hover:text-white cursor-pointer" />
        <div className="grid col-span-4">
          <h2 className="text-orange-400 font-bold">Test Oyuncu</h2>
          <span className="text-sm text-gray-400">Film Adı</span>
        </div>
      </div>

      <div className="grid grid-cols-6 items-center justify-center lg:gap-x-6 gap-x-3">
        <CgProfile className="w-full h-full col-span-2 text-slate-300 hover:text-white cursor-pointer" />
        <div className="grid col-span-4">
          <h2 className="text-orange-400 font-bold">Test Oyuncu</h2>
          <span className="text-sm text-gray-400">Film adı</span>
        </div>
      </div>
      <div className="grid grid-cols-6 items-center justify-center lg:gap-x-6 gap-x-3">
        <CgProfile className="w-full h-full col-span-2 text-slate-300 hover:text-white cursor-pointer" />
        <div className="grid col-span-4">
          <h2 className="text-orange-400 font-bold">Test Oyuncu</h2>
          <span className="text-sm text-gray-400">Film adı</span>
        </div>
      </div>

      <div className="grid grid-cols-6 items-center justify-center lg:gap-x-6 gap-x-3">
        <CgProfile className="w-full h-full col-span-2 text-slate-300 hover:text-white cursor-pointer" />
        <div className="grid col-span-4">
          <h2 className="text-orange-400 font-bold">Test Oyuncu</h2>
          <span className="text-sm text-gray-400">Film adı</span>
        </div>
      </div>
      <div className="grid grid-cols-6 items-center justify-center lg:gap-x-6 gap-x-3">
        <CgProfile className="w-full h-full col-span-2 text-slate-300 hover:text-white cursor-pointer" />
        <div className="grid col-span-4">
          <h2 className="text-orange-400 font-bold">Test Oyuncu</h2>
          <span className="text-sm text-gray-400">Film adı</span>
        </div>
      </div>

      <div className="grid grid-cols-6 items-center justify-center lg:gap-x-6 gap-x-3">
        <CgProfile className="w-full h-full col-span-2 text-slate-300 hover:text-white cursor-pointer" />
        <div className="grid col-span-4">
          <h2 className="text-orange-400 font-bold">Test Oyuncu</h2>
          <span className="text-sm text-gray-400">Film adı</span>
        </div>
      </div>
    </div>
  );
};

export default Cats;
