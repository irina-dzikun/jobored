import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import MainPage from ".//components/MainPage";
// import VacancyPage from "./components/VacancyPage";
import FavoritesPage from "./components/FavoritesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoritesPage />
  </React.StrictMode>
);
