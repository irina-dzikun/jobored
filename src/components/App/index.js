import React, { Component } from "react";

import styles from "./style.module.css";

import Header from "../Header";
import Filters from "../ Filters";
import InputSearch from "../InputSearch";
import VacanyBriefly from "../VacancyBriefly";
import PagesButton from "../PagesButton";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Filters />
          <div className={styles.search_vacancies}>
            <InputSearch />
            <VacanyBriefly />
            <VacanyBriefly />
            <VacanyBriefly />
            <VacanyBriefly />
            <PagesButton/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
