import React, { Component, useState } from "react";

import styles from "./style.module.css";

import Header from "../Header";
import Filters from "../ Filters";
import InputSearch from "../InputSearch";
import VacanyBrief from "../VacancyBrief";
import PagesButton from "../PagesButton";

const MainPage = () => {
  return (
    <div>
      <Header main />
      <div className={styles.container}>
        <Filters />
        <div className={styles.search_vacancies}>
          <InputSearch />
          <VacanyBrief />
          <VacanyBrief />
          <VacanyBrief />
          <VacanyBrief />
          <PagesButton />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

// class MainPage extends Component {
//   render() {
//     return (
//       <div>
//         <Header main />
//         <div className={styles.container}>
//           <Filters />
//           <div className={styles.search_vacancies}>
//             <InputSearch />
//             <VacanyBrief />
//             <VacanyBrief />
//             <VacanyBrief />
//             <VacanyBrief />
//             <PagesButton />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
