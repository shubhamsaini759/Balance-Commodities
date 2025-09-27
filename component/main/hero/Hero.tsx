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
            <p>
              Charge smarter and drive further with seamless, intelligent EV
              solutions designed for modern living powering your journey toward
              a cleaner, more connected future.
            </p>
          </div>
        </div>
        <div className={styles.mainSectionBg}></div>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContainerTop}>
            <div className={styles.heroContainerTopHeader}>
              <p>Empowering the Future of </p>
              <p>Sustainable EV Charging</p>
            </div>
            <div className={styles.heroContainerTopText}>
              <p>
                We’re building more than just charging solutions we’re shaping
                the future of clean mobility with intelligent technology, bold
                vision, and a commitment to a greener planet.
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
