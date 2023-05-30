import React from "react";
import { useParams } from "react-router-dom";
import useVacanciesId from "../../hooks/useVacanciesId";

import styles from "./style.module.css";

import Header from "../Header";
import VacanyBrief from "../VacancyBrief";

const VacancyPage = () => {
  const { id } = useParams();
  const searchVacanciesId = useVacanciesId(id);

  return (
    <div>
      <Header />
      {searchVacanciesId.isLoading ? (
        <div className={styles.loading}>
          <img
            src="https://avatanplus.com/files/resources/original/5914929e02e2515bf85cb93c.png"
            alt="loading"
            className={styles.loading_img}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <VacanyBrief
            id={Number(id)}
            alt
            profession={searchVacanciesId.data.profession}
            town={searchVacanciesId.data.town.title}
            typeOfWork={searchVacanciesId.data.type_of_work.title}
            paymentTo={searchVacanciesId.data.payment_to}
            currency={searchVacanciesId.data.currency}
          />
          <div className={styles.description}>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: searchVacanciesId.data.vacancyRichText,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacancyPage;
