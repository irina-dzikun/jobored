import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

import iconTitle from "../../images/title-icon.svg";

const Header = ({ main, favorites }) => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.title}>
        <img src={iconTitle} alt="icon-title" />
        <div className={styles.title_text}>Jobored</div>
      </Link>

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
};
export default Header;
