import React, { useContext } from "react";
import SpecialityItem from "../components/specialityItem";
import { AppContext } from "../context/appContext";

const DetailsPage = () => {
  const {
    selelctedSpeciality: selected,
    recommended,
    openSpeciality,
    like,
  } = useContext(AppContext);
  if (!selected) return <></>;

  return (
    <div className="flex flex-col w-full min-h-screen bg-emerald-100 font-tajawal">
      <div className="flex-[1.5] flex flex-col px-4 pb-16 pt-4">
        <div className="flex items-center justify-between">
          <button>back</button> <button>share</button>
        </div>
        <div className="flex-1 items-center justify-center flex py-8">
          <img src={selected.image} />
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
            <h1>{selected.title}</h1>
            <span>{selected.dugree}</span>
          </div>
          <p className="text-neutral-500 leading-4 w-56">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-2 space-x-4 text-sm  text-neutral-400">
            <span>{selected.region.name}</span>
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
          {recommended.map((speciality) => (
            <SpecialityItem {...{ speciality }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
