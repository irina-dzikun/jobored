import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  favoriteHasId,
  addFavoritesList,
  removeFavoritesList,
} from "../../utils/favorites";
import styles from "./style.module.css";

import iconLocation from "../../images/location-icon.svg";
import iconSave from "../../images/save-icon.svg";
import iconfavoriteSave from "../../images/favorite-save-icon.svg";

const VacanyBrief = ({
  id,
  alt,
  profession,
  town,
  typeOfWork,
  paymentTo,
  currency,
}) => {
  const [favorite, setFavorite] = useState(favoriteHasId(id));

  function toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    setFavorite((favorite) => !favorite);
    if (!favorite) {
      addFavoritesList(id);
    } else {
      removeFavoritesList(id);
    }
  }

  return (
    <Link to={`/vacancy/${id}`} className={styles.container}>
      <div className={styles.content}>
        <div className={alt ? styles.content_title_alt : styles.content_title}>
          {profession}
        </div>
        <div className={alt ? styles.content_info_alt : styles.content_info}>
          <b>
            з/п от {paymentTo} {currency}
          </b>{" "}
          • {typeOfWork}
        </div>
        <div className={styles.content_location}>
          <img
            src={iconLocation}
            alt="icon-location"
            className={styles.img_location}
          />
          <div
            className={alt ? styles.location_text_alt : styles.location_text}
          >
            {town}
          </div>
        </div>
      </div>
      <div>
        <img
          onClick={toggleFavorite}
          src={favorite ? iconfavoriteSave : iconSave}
          alt="icon-save"
        />
      </div>
    </Link>
  );
};

export default VacanyBrief;
