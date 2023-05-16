import React, { Component } from "react";

import styles from "./style.module.css";

import VectorLeft from "../../images/vector-left.svg";
import VectorRight from "../../images/vector-right.svg";

function PagesButton() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <img src={VectorLeft} alt="vector-left"></img>
      </button>
      <button className={`${styles.button} active`}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>
        <img src={VectorRight} alt="vector-right"></img>
      </button>
    </div>
  );
}

export default PagesButton;
