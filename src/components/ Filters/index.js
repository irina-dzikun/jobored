import React, { useState } from "react";

import styles from "./style.module.css";

import useCatalogues from "../../hooks/useCatalogues";

function Filters({ onSubmit }) {
  const [paymentFrom, setPaymentFrom] = useState("");
  const [paymentTo, setPaymentTo] = useState("");
  const [catalogues, setCatalogues] = useState("");

  const searchCatalogues = useCatalogues();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.title_text}>Фильтры</div>
        <div className={styles.title_reset}>Сбросить все x</div>
      </div>
      <div className={styles.department_text}>Отрасль</div>
      <select
        className={
          catalogues ? styles.department_input_active : styles.department_input
        }
        onChange={(e) => setCatalogues(e.target.value)}
        value={catalogues}
      >
        {searchCatalogues.isLoading ? (
          ""
        ) : (
          <>
            <option value="" disabled hidden>
              Выберете отрасль
            </option>
            {searchCatalogues.data.map((item) => (
              <option key={item.key} value={item.key}>
                {item.title}
              </option>
            ))}
          </>
        )}
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
        onClick={() => onSubmit(paymentFrom, paymentTo, catalogues)}
      >
        Применить
      </button>
    </div>
  );
}

export default Filters;
