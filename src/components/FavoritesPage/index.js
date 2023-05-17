import React, { Component } from "react";

import styles from "./style.module.css";

import Header from "../Header";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

class FavoritesPage extends Component {
  render() {
    return (
      <div>
        <Header favorites />
        <div className={styles.container}>
          <VacanyBrief active />
          <VacanyBrief active />
          <PagesButton />
        </div>
      </div>
    );
  }
}

export default FavoritesPage;
