import React, { Component, useState } from "react";

import styles from "./style.module.css";

import Header from "../Header";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

const FavoritesPage = () => {
  return (
    <div>
      <Header favorites />
      <div className={styles.container}>
        <VacanyBrief />
        <VacanyBrief />
        <PagesButton />
      </div>
    </div>
  );
};

export default FavoritesPage;
