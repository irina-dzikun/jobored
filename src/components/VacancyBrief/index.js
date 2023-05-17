import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

import iconLocation from "../../images/location-icon.svg";
import iconSave from "../../images/save-icon.svg";
import iconfavoriteSave from "../../images/favorite-save-icon.svg";

function VacanyBrief({ active, alt }) {
  return (
    <Link to="/vacancy" className={styles.container}>
      <div className={styles.content}>
        <div className={alt ? styles.content_title_alt : styles.content_title}>
          Менеджер-дизайнер
        </div>
        <div className={alt ? styles.content_info_alt : styles.content_info}>
          <b>з/п от 70000 rub</b> • Полный рабочий день
        </div>
        <div className={styles.content_location}>
          <img
            src={iconLocation}
            alt="icon-location"
            className={styles.img_location}
          ></img>
          <div
            className={alt ? styles.location_text_alt : styles.location_text}
          >
            Новый Уренгой
          </div>
        </div>
      </div>
      <div>
        <img src={active ? iconfavoriteSave : iconSave} alt="icon-save"></img>
      </div>
    </Link>
  );
}

export default VacanyBrief;
