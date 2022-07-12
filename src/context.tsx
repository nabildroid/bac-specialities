import React, { useContext, createContext, useState, useMemo } from "react";
import { IProvider, Option, Speciality } from "./models";

const Context = createContext<IProvider>(null!);

const allOptions: Option[] = [
  {
    path: "language/arabic",
  },
  {
    path: "language/français",
  },
  {
    path: "work/programmer",
  },
  {
    path: "work/medcine",
  },

  {
    path: "region/16",
  },
  {
    path: "region/18",
  },

  {
    path: "region/01",
  },
];

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const [degree, setDegree] = useState(12);

  const [suggested, setSuggested] = useState<Speciality[]>([]);

  const [recommended, setRecommended] = useState<Speciality[]>([]);

  const page = useMemo(() => {
    if (recommended.length) return "details";
    if (suggested.length) return "specialites";
    return "filters";
  }, [suggest, recommended]);

  async function like(id: string) {
    //todo implmenet this!
  }

  function suggest() {}

  async function openSpeciality(id: string) {}

  const values = {
    like,
    suggest,
    suggested,
    openSpeciality,
    allOptions,
    selectedOptions,
    setSelectedOptions,
    degree,
    setDegree,
    page: page as any,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
