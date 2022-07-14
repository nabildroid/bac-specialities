import React, {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { IAppProvider, Option, Speciality } from "../models";
import { DataContext } from "./dataProvider";

const initialData: IAppProvider = {
  allOptions: [],
  degree: 12,
  page: "filters",
  selectedOptions: [],
  suggested: [],
} as any;

export const AppContext = createContext<IAppProvider>(initialData);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { allOptions, specialities } = useContext(DataContext);

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const [degree, setDegree] = useState(10);

  const [suggested, setSuggested] = useState<Speciality[]>([]);

  const [recommended, setRecommended] = useState<Speciality[]>([]);

  const [selelctedSpeciality, setSelelctedSpeciality] = useState<Speciality>();

  const page = useMemo(() => {
    if (recommended.length) return "details";
    if (suggested.length) return "specialites";
    return "filters";
  }, [suggest, recommended]);

  function toggleOption(type: string, name: string) {
    const option = `${type}/${name}`;
    // todo implmenet conditioned options like selecting only one region, or one speciality!

    if (selectedOptions.some((a) => a.path == option)) {
      setSelectedOptions((a) => a.filter((b) => b.path != option));
    } else {
      setSelectedOptions([
        ...selectedOptions,
        allOptions.find((a) => a.path == option)!,
      ]);
    }
  }

  async function like(speciality: Speciality) {
    //todo implmenet this!
  }

  function suggest() {
    if (selectedOptions.length && degree > 9) {
      setSuggested(specialities);
    }
  }
  useEffect(() => {
    setSelectedOptions(allOptions);
    setSuggested(specialities);
  }, []);

  async function openSpeciality(speciality: Speciality) {
    // todo scroll to top
    setSelelctedSpeciality(speciality);

    setRecommended(specialities);
  }

  const values = {
    like,
    suggest,
    suggested,
    openSpeciality,
    allOptions,
    selectedOptions,
    toggleOption,
    degree,
    setDegree,
    page: page as any,
    selelctedSpeciality,
    recommended,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
