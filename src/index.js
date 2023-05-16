import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import MainPage from ".//components/MainPage";
import VacancyPage from "./components/VacancyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VacancyPage />
  </React.StrictMode>
);
