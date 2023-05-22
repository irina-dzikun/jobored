import React, { Component, useState } from "react";

import styles from "./style.module.css";

function Filters({ onSubmit }) {
  const [paymentFrom, setPaymentFrom] = useState("");
  const [paymentTo, setPaymentTo] = useState("");

  return (
    <div className={styles.container}>
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
        min="0"
        placeholder="От"
        className={styles.salary_input_from}
        onChange={(e) => setPaymentFrom(e.target.value)}
        value={paymentFrom}
      />
      <input
        type="number"
        step="1"
        min="0"
        placeholder="До"
        className={styles.salary_input_to}
        onChange={(e) => setPaymentTo(e.target.value)}
        value={paymentTo}
      />
      <button
        className={styles.button}
        onClick={() => onSubmit(paymentFrom, paymentTo)}
      >
        Применить
      </button>
    </div>
  );
}

export default Filters;
