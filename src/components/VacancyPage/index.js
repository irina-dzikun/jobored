import React, { Component } from "react";

import styles from "./style.module.css";

import Header from "../Header";
import VacanyBrief from "../VacancyBrief";

class VacancyPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <VacanyBrief />
          <div className={styles.description}>
            <div className={styles.description_title}>Обязанности:</div>
            <div className={styles.description_text}>
              Разработка дизайн-макетов для наружной, интерьерной рекламы,
              полиграфии, сувенирной продукции. Подготовка и вёрстка макетов в
              CorelDraw, Adobe photoshop. Создание дизайна логотипов и
              брендбуков Управленческая функция: обучение, адаптация дизайнеров,
              их контроль, оценка
            </div>
            <div className={styles.description_title}>Требования:</div>
            <div className={styles.description_text}>
              Собеседование – после успешного прохождения тестового задания
              Рассматриваются кандидаты только с опытом работы Обязательно -
              наличие портфолио Умение самостоятельно принимать решения, умение
              объективно оценивать свою работу, работать в режиме
              многозадачности и переключаться с одного задания к другому и
              планировать свой день. Соблюдать сроки. Ответственный,
              исполнительный, целеустремленный, большим плюсом будет опыт
              управления
            </div>
            <div className={styles.description_title}>Условия:</div>
            <div className={styles.description_text}>
              Оформление по контракту Полный социальный пакет Премирование по
              результатам работы
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VacancyPage;
