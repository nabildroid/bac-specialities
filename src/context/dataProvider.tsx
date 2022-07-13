import React, { createContext } from "react";

import { Option, Speciality } from "../models";

type IData = {
  allOptions: Option[];
  specialities: Speciality[];
  popular: Speciality[];
};

export const DataContext = createContext<IData>({
  allOptions: [],
  specialities: [],
  popular: [],
});

// todo get data directly from Notion
const DataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const values: IData = {
    allOptions: [
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
    ],
    specialities: [
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
    ],

    popular: [
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
      {
        dimensions: [],
        dugree: 15,
        id: "aa",
        image: "https://laknabil.me/nabil.png",
        options: [],
        region: {
          id: 16,
          name: "alger",
        },
        title: "Hello World",
      },
    ],
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
