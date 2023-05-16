import React, { Component } from "react";

import styles from "./style.module.css";

function Filters() {
  return (
    <form className={styles.container}>
      <div className={styles.title}>
        <div className={styles.title_text}>Фильтры</div>
        <div className={styles.title_reset}>Сбросить все x</div>
      </div>
      <div className={styles.department_text}>Отрасль</div>
      <select className={styles.department_input}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div className={styles.salary_text}>Оклад</div>
      <input
        type="number"
        step="1"
        min="1"
        placeholder="От"
        className={styles.salary_input_from}
      />
      <input
        type="number"
        step="1"
        min="1"
        placeholder="До"
        className={styles.salary_input_to}
      />
      <button className={styles.button}>Применить</button>
    </form>
  );
}

export default Filters;
