import React from "react";

const FilterPage = () => {
  return (
    <div className="py-4 px-4 flex flex-col w-full min-h-screen bg-stone-900 font-tajawal">
      <div className="w-full text-center space-y-2">
        <h1 className="text-2xl text-white font-bold tracking-wider">
          Explore bac specialities
        </h1>
        <p className="w-52 mx-auto text-stone-400 text-left leading-tight">
          we help you explore and choose the right sepciality taking in
          consideration your degree and interests
        </p>
      </div>

      <div className="flex-1 py-4 space-y-4">
        <div>
          <label className="text-white text-sm">enter your degree</label>
          <div className="w-full h-8 bg-stone-500"></div>
        </div>
        <div>
          <label className="text-white text-sm">choose your speciality</label>
          <div className="-ml-4 -mr-4 flex snap-x overflow-x-auto space-x-2">
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              math
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              math techinique
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              math techinique
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              scientifique
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              langauge
            </button>
          </div>
        </div>

        <div className="">
          <label className="text-white text-sm">choose filters</label>
          <div className="-ml-4 -mr-4 flex snap-x overflow-x-auto space-x-2">
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              math
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              math techinique
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              math techinique
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              scientifique
            </button>
            <button className="snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white">
              langauge
            </button>
          </div>
        </div>
      </div>
      <div>
        <button className="inline-bloc w-full py-1 bg-neutral-700 rounded-md text-neutral-200">
          suggest!
        </button>
      </div>
    </div>
  );
};



export default FilterPage;