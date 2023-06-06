import React, { useState } from "react";

import styles from "./style.module.css";

import VectorLeft from "../../images/vector-left.svg";
import VectorRight from "../../images/vector-right.svg";

const PagesButton = ({ onChange, page }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => (page <= 1 ? page === 1 : onChange(page - 1))}
      >
        <img src={VectorLeft} alt="vector-left"></img>
      </button>
      <button className={`${styles.button} active`}>{page}</button>
      <button className={styles.button} onClick={() => onChange(page + 1)}>
        <img src={VectorRight} alt="vector-right"></img>
      </button>
    </div>
  );
};

export default PagesButton;
