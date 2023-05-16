import React, { Component } from "react";

import styles from "./style.module.css";

import Header from "../Header";
import Filters from "../ Filters";
import InputSearch from "../InputSearch";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Filters />
          <div className={styles.search_vacancies}>
            <InputSearch />
            <VacanyBrief />
            <VacanyBrief />
            <VacanyBrief />
            <VacanyBrief />
            <PagesButton />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
