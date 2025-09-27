import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.mainSectionContainer}>
          <div className={styles.mainImageContent}>
            <div className={styles.mainImageContentHeader}>
              <h1 className={styles.mainImageContentHeaderTop}>
                POWER UP WITH SMART
              </h1>
              <h1 className={styles.mainImageContentHeaderBottom}>ENERGY</h1>
            </div>
            <div className={styles.mainContainerTopHeaderDesc}>
              <p>Balance is not somthing you find.</p>
              <p>It's somthing you create.</p>
            </div>
          </div>
        </div>
        <div className={styles.mainSectionBg}></div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContainerTop}>
            <div className={styles.heroContainerTopHeader}>
              <p>About US </p>
            </div>
            <div className={styles.heroContainerTopText}>
              <p>
                Life is all about finding the right balance and we believe that
                balance is achieved only when it is challenged.Here at Balance,
                we trade electricity to match supply with demand.No fuss, just
                the essentials.
              </p>
            </div>
          </div>
          <div className={styles.heroContainerImage}>
            <div className={styles.image}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
