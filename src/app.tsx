import React, { useContext } from "react";
import { AppContext } from "./context/appContext";
import DetailsPage from "./pages/details";
import FilterPage from "./pages/filters";
import SpecialitiesPage from "./pages/specialities";

const App = () => {
  const { page } = useContext(AppContext);

  // todo use a valide route management system!

  if (page == "details") return <DetailsPage />;

  if (page == "specialites") return <SpecialitiesPage />;

  return <FilterPage />;
};

export default App;
