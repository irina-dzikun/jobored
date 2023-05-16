import React, { Component } from "react";

import styles from "./style.module.css";

import iconLocation from "../../images/location-icon.svg";
import iconSave from "../../images/save-icon.svg";

function VacanyBriefly() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_title}>Менеджер-дизайнер</div>
        <div className={styles.content_info}>
          <b>з/п от 70000 rub</b> • Полный рабочий день
        </div>
        <div className={styles.content_location}>
          <img
            src={iconLocation}
            alt="icon-location"
            className={styles.img_location}
          ></img>
          <div className={styles.location_text}>Новый Уренгой</div>
        </div>
      </div>
      <div>
        <img src={iconSave} alt="icon-save"></img>
      </div>
    </div>
  );
}

export default VacanyBriefly;
