import React from "react";

const DetailsPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-emerald-100 font-tajawal">
      <div className="flex-[1.5] flex flex-col px-4 pb-16 pt-4">
        <div className="flex items-center justify-between">
          <button>back</button> <button>share</button>
        </div>
        <div className="flex-1 items-center justify-center flex py-8">
          <img src="https://laknabil.me/nabil.png" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button className="rounded-full p-1 bg-teal-600"></button>
          <button className="rounded-full p-1 bg-teal-400"></button>
          <button className="rounded-full p-1 bg-teal-400"></button>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl px-8">
        <div className="w-full bg-white shadow-lg rounded-lg h-28 -mt-14 p-2 px-4">
          <div className="flex items-center justify-between text-xl leading-relaxed font-semibold text-teal-900">
            <h1>Informatique</h1>
            <span>15</span>
          </div>
          <p className="text-neutral-500 leading-4 w-56">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-2 space-x-4 text-sm  text-neutral-400">
            <span>alger</span>
            <span>|</span>
            <span>lmd</span>
          </div>
        </div>

        <div className="mt-4 space-y-4 pb-8 mb-8 border-b-2 border-dashed border-teal-200">
          <div className="flex space-x-4 items-start">
            <img
              className="w-10  rounded-full"
              src="https://laknabil.me/nabil.png"
            />
            <div>
              <h2 className="font-bold text-teal-800 mt-1">Description</h2>
              <p className="leading-5 text-neutral-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus veniam vero harum
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <img
              className="w-10  rounded-full"
              src="https://laknabil.me/nabil.png"
            />
            <div>
              <h2 className="font-bold text-teal-800 mt-1">Description</h2>
              <p className="leading-5 text-neutral-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus veniam vero harum
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pb-8">
          <div className="shadow-xl bg-stone-50 rounded-md w-full">
            <div className="flex justify-between items-center pt-2 px-4 pb-2 border-b-2 border-slate-100">
              <div className="flex-1">
                <p className="text-neutral-600">algeria</p>
              </div>
              <div>
                <button>Like</button>
              </div>
            </div>

            <div className="flex p-4 space-x-12">
              <div>
                <img src="https://laknabil.me/nabil.png" className="w-12" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center w-full">
                  <h1 className="text-xl font-bold flex-1">Medcine</h1>
                  <span className="font-mono text-neutral-500 text-xs">
                    12 likes
                  </span>
                </div>

                <div className="flex -ml-2 mt-2 space-x-4 flex-wrap items-center">
                  <div className="shadow-sm border border-neutral-200 rounded-full px-2 py-1 text-xs font-semibold">
                    scientific
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg text-neutral-500">points </span>
                  <span className="text-lg font-bold">12 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl bg-stone-50 rounded-md w-full">
            <div className="flex justify-between items-center pt-2 px-4 pb-2 border-b-2 border-slate-100">
              <div className="flex-1">
                <p className="text-neutral-600">algeria</p>
              </div>
              <div>
                <button>Like</button>
              </div>
            </div>

            <div className="flex p-4 space-x-12">
              <div>
                <img src="https://laknabil.me/nabil.png" className="w-12" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center w-full">
                  <h1 className="text-xl font-bold flex-1">Medcine</h1>
                  <span className="font-mono text-neutral-500 text-xs">
                    12 likes
                  </span>
                </div>

                <div className="flex -ml-2 mt-2 space-x-4 flex-wrap items-center">
                  <div className="shadow-sm border border-neutral-200 rounded-full px-2 py-1 text-xs font-semibold">
                    scientific
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg text-neutral-500">points </span>
                  <span className="text-lg font-bold">12 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl bg-stone-50 rounded-md w-full">
            <div className="flex justify-between items-center pt-2 px-4 pb-2 border-b-2 border-slate-100">
              <div className="flex-1">
                <p className="text-neutral-600">algeria</p>
              </div>
              <div>
                <button>Like</button>
              </div>
            </div>

            <div className="flex p-4 space-x-12">
              <div>
                <img src="https://laknabil.me/nabil.png" className="w-12" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center w-full">
                  <h1 className="text-xl font-bold flex-1">Medcine</h1>
                  <span className="font-mono text-neutral-500 text-xs">
                    12 likes
                  </span>
                </div>

                <div className="flex -ml-2 mt-2 space-x-4 flex-wrap items-center">
                  <div className="shadow-sm border border-neutral-200 rounded-full px-2 py-1 text-xs font-semibold">
                    scientific
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg text-neutral-500">points </span>
                  <span className="text-lg font-bold">12 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
