import React, { useContext, useMemo } from "react";
import { AppContext } from "../context/appContext";
import { cn, OptionName, OptionType } from "../utils";

const FilterPage = () => {
  const {
    degree,
    setDegree,
    suggest,
    allOptions,
    selectedOptions,
    toggleOption,
  } = useContext(AppContext);

  const filters = useMemo(() => {
    return allOptions.reduce((acc, v) => {
      if (!acc[OptionType(v)]) acc[OptionType(v)] = [];

      acc[OptionType(v)].push([OptionName(v), selectedOptions.includes(v)]);
      return acc;
    }, {} as { [key: string]: [string, boolean][] });
  }, [allOptions, selectedOptions]);

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
          <input
            value={degree}
            onChange={(e) => setDegree(parseInt(e.target.value))}
            className="w-full h-8 bg-stone-500"
          />
        </div>

        {Object.entries(filters).map(([k, v]) => (
          <div key={k}>
            <label className="text-white text-sm">{k}</label>
            <div className="-ml-4 -mr-4 flex snap-x overflow-x-auto space-x-2">
              {v.map((i) => (
                <button
                  key={`${k}/${i[0]}`}
                  onClick={() => toggleOption(k, i[0])}
                  className={cn(
                    "snap-start flex-shrink-0 px-2 py-1 rounded-full border-2 border-white text-white",
                    i[1] && "border-teal-400"
                  )}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => suggest()}
          className="inline-bloc w-full py-1 bg-neutral-700 rounded-md text-neutral-200"
        >
          suggest!
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
