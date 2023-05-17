import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

import iconTitle from "../../images/title-icon.svg";

function Header({ main, favorites }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={iconTitle} alt="icon-title"></img>
        <div className={styles.title_text}>Jobored</div>
      </div>

      <div className={styles.pages}>
        <Link
          to="/"
          className={main ? styles.pages_text_active : styles.pages_text}
        >
          Поиск Вакансий
        </Link>
        <Link
          to="/favorites"
          className={favorites ? styles.pages_text_active : styles.pages_text}
        >
          Избранное
        </Link>
      </div>
    </div>
  );
}
export default Header;
