import React, { useState } from "react";

import useSearch from "../../hooks/useSearch";

import styles from "./style.module.css";

import Header from "../Header";
import Filters from "../Filters";
import InputSearch from "../InputSearch";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

const MainPage = () => {
  const [keyword, setKeyword] = useState("");
  const [paymentFrom, setPaymentFrom] = useState("");
  const [paymentTo, setPaymentTo] = useState("");
  const [catalogues, setCatalogues] = useState("");
  const [page, setPage] = useState(1);

  const searchVacancies = useSearch(
    keyword,
    paymentFrom,
    paymentTo,
    catalogues,
    page
  );

  return (
    <div>
      <Header main />
      <div className={styles.container}>
        <Filters
          onSubmit={(paymentFrom, paymentTo, catalogues) => {
            setPaymentFrom(paymentFrom);
            setPaymentTo(paymentTo);
            setCatalogues(catalogues);
          }}
        />
        <div className={styles.search_vacancies}>
          <InputSearch onSubmit={(value) => setKeyword(value)} />
          {searchVacancies.isLoading ? (
            <div className={styles.loading}>
              <img
                src="https://avatanplus.com/files/resources/original/5914929e02e2515bf85cb93c.png"
                alt="loading"
                className={styles.loading_img}
              />
            </div>
          ) : searchVacancies.data.objects.length !== 0 ? (
            <>
              {searchVacancies.data.objects.map((item) => (
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

              <PagesButton
                onChange={(page) => {
                  setPage(page);
                }}
                page={page}
              />
            </>
          ) : (
            <div className={styles.nothing_text}>Ничего не найдено</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
