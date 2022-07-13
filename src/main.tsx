import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import AppProvider from "./context/appContext";
import DataProvider from "./context/dataProvider";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </DataProvider>
  </React.StrictMode>
);
