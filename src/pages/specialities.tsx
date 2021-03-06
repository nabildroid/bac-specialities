import React, { useContext, useMemo } from "react";
import SpecialityItem from "../components/specialityItem";
import { AppContext } from "../context/appContext";
import { DataContext } from "../context/dataProvider";

const SpecialitiesPage = () => {
  const { degree, selectedOptions, suggested, openSpeciality, like } =
    useContext(AppContext);
  const { popular } = useContext(DataContext);

  return (
    <div className="   flex flex-col w-full min-h-screen bg-stone-900 font-tajawal">
      <div className="w-full overflow-hidden flex py-4 h-40 px-4 text-center space-y-2">
        <div className="self-end flex-1 text-left">
          <p className="text-xl font-bold text-neutral-300">You Got</p>
          <h2 className="text-3xl text-white font-bold">{degree} point!</h2>
          <p className="text-neutral-400">
            explore the best specialities for you
          </p>
        </div>
        <div className="relative flex-1 flex justify-center items-center">
          <img
            className="absolute inset-0 ml-5 -mt-6 block opacity-40"
            src="../art.png"
          />
          <img
            className="w-12 h-12 relative block ml-9 -mt-8 rounded-full shadow-inner"
            src="https://laknabil.me/nabil.png"
          />
        </div>
      </div>

      <div className="flex-1  py-4 px-4  bg-slate-100 rounded-t-3xl">
        <div>
          <label className="text-lg font-bold">Most demanded</label>
          <div className="mt-2 -mx-4 h-36 flex snap-x overflow-x-auto space-x-8">
            {popular.map((speciality) => (
              <div
                key={speciality.id}
                className="snap-start p-6 pb-8 flex flex-col justify-between scroll-ml-6 flex-shrink-0 w-32 h-full rounded-xl bg-pink-100"
              >
                <img src="../art.png" className="w-12 h-12" />
                <div className="flex-1 space-y-1">
                  <p className="text-md">scientific</p>
                  <h2 className="text-lg font-bold leading-3">
                    {speciality.title}
                  </h2>
                  <p className="text-sm">{speciality.dugree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bg-slate-100 [@supports(backdrop-filter:blur(0))]:bg-slate-100/25  backdrop-blur-sm top-0 mt-2 py-2">
          <label className="text-lg font-bold">Filters</label>
          <div className="-mx-4 mt-1 py-1 flex snap-x overflow-x-auto space-x-4">
            <div className="shadow-sm bg-white rounded-full px-8 py-1 text-sm font-bold font-mono">
              {degree}
            </div>

            {selectedOptions.map((o) => (
              <div
                key={o.path}
                className="shadow-sm bg-white rounded-full px-4 py-1 text-sm font-semibold"
              >
                {o.path.split("/")[1]}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-lg mt-2 font-bold">
            Best specialities for you
          </label>
          <div className="space-y-4 mt-4">
            {suggested.map((speciality) => (
              <SpecialityItem {...{ speciality }} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SpecialitiesPage;
