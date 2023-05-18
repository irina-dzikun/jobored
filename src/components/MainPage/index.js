import React, { Component, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useSearch from "../../hooks/useSearch";

import styles from "./style.module.css";

import Header from "../Header";
import Filters from "../ Filters";
import InputSearch from "../InputSearch";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

const MainPage = () => {
  const searchVacancies = useSearch();

  return (
    <div>
      <Header main />
      <div className={styles.container}>
        <Filters />
        <div className={styles.search_vacancies}>
          <InputSearch />
          {searchVacancies.isLoading ? (
            <div className={styles.loading}>
              <img
                src="https://avatanplus.com/files/resources/original/5914929e02e2515bf85cb93c.png"
                alt="loading"
                className={styles.loading_img}
              />
            </div>
          ) : (
            <>
              {searchVacancies.data.objects.map((item) => (
                <VacanyBrief
                  profession={item.profession}
                  town={item.town.title}
                  typeOfWork={item.type_of_work.title}
                  paymentTo={item.payment_to}
                  currency={item.currency}
                />
              ))}
              <PagesButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
