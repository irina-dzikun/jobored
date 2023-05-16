import React, { Component } from "react";

import styles from "./style.module.css";

import iconSearch from "../../images/search-icon.svg";

function InputSearch() {
  return (
    <div className={styles.search}>
      <img src={iconSearch} alt="iconSearch"></img>
      <input
        type="text"
        placeholder="Введите название вакансии"
        className={styles.input}
      ></input>
      <button className={styles.button}>Поиск</button>
    </div>
  );
}

export default InputSearch;
