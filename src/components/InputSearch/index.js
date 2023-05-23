import React, { useState } from "react";

import styles from "./style.module.css";

import iconSearch from "../../images/search-icon.svg";

const InputSearch = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.search}>
      <img src={iconSearch} alt="iconSearch"></img>
      <input
        type="text"
        placeholder="Введите название вакансии"
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button className={styles.button} onClick={() => onSubmit(value)}>
        Поиск
      </button>
    </div>
  );
};

export default InputSearch;
