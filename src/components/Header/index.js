import React, { Component } from "react";

import styles from "./style.module.css";

import iconTitle from "../../images/title-icon.svg";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={iconTitle} alt="icon-title"></img>
        <div className={styles.title_text}>Jobored</div>
      </div>

      <div className={styles.pages}>
        <div className={`${styles.pages_text} active`}>Поиск Вакансий</div>
        <div className={styles.pages_text}>Избранное</div>
      </div>
    </div>
  );
}
export default Header;
