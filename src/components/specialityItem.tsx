import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Speciality } from "../models";

const SpecialityItem: React.FC<{ speciality: Speciality }> = ({
  speciality,
}) => {
  const { openSpeciality, like } = useContext(AppContext);

  // todo add state for like loading indicator

  return (
    <div key={speciality.id} className="shadow-md bg-white rounded-md w-full">
      <div className="flex justify-between items-center pt-2 px-4 pb-2 border-b-2 border-slate-100">
        <div className="flex-1">
          <p className="text-neutral-600">{speciality.region.name}</p>
        </div>
        <div>
          <button onClick={() => like(speciality)}>Like</button>
        </div>
      </div>

      <button
        onClick={() => openSpeciality(speciality)}
        className="flex p-4 space-x-12 w-full"
      >
        <div>
          <img src={speciality.image} className="w-12" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center w-full">
            <h1 className="text-xl font-bold flex-1">{speciality.title}</h1>
            <span className="font-mono text-neutral-500 text-xs">
              {speciality.likes ?? 0} likes
            </span>
          </div>

          <div className="flex -ml-2 mt-2 space-x-4 flex-wrap items-center">
            {/* todo extract the speciality from options */}
            <div className="shadow-sm border border-neutral-200 rounded-full px-2 py-1 text-xs font-semibold">
              scientific
            </div>
          </div>

          <div className="text-right">
            <span className="text-lg text-neutral-500">points </span>
            <span className="text-lg font-bold">{speciality.dugree}</span>
          </div>
        </div>
      </button>
    </div>
  );
};


export default SpecialityItem;