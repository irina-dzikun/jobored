import React, { useState } from "react";
import { getFavoritesList } from "../../utils/favorites";
import useFavorites from "../../hooks/useFavorites";

import styles from "./style.module.css";

import Header from "../Header";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

const FavoritesPage = () => {
  const [favoritesList] = useState(getFavoritesList());
  const searchFavorites = useFavorites(favoritesList);

  return (
    <div>
      <Header favorites />
      <div className={styles.container}>
        {searchFavorites.isLoading ? (
          <div className={styles.loading}>
            <img
              src="https://avatanplus.com/files/resources/original/5914929e02e2515bf85cb93c.png"
              alt="loading"
              className={styles.loading_img}
            />
          </div>
        ) : searchFavorites.data.objects.length !== 0 ? (
          <>
            {searchFavorites.data.objects.map((item) => (
              <VacanyBrief
                key={item.id}
                id={item.id}
                profession={item.profession}
                town={item.town.title}
                typeOfWork={item.type_of_work.title}
                paymentTo={item.payment_to}
                currency={item.currency}
              />
            ))}
            <PagesButton />
          </>
        ) : (
          <div className={styles.nothing_text}>Ничего нет</div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
