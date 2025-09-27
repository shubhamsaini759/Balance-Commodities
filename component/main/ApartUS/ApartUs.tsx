import React from "react";
import styles from "./ApartUs.module.css";

const ApartUs = () => {
  return (
    <div className={styles.apart}>
      <div className={styles.apartTop}>
        <div className={styles.apartTopHeader}>
          <h2>Charging Technologies</h2>
          <h2>Charging Technologies</h2>
        </div>
        <div className={styles.apartTopDesc}>
          <p>
            Explore our smart, user-friendly EV charging products built for
            speed, safety, and seamless performance wherever the road takes you.
          </p>
        </div>
      </div>
      <div className={styles.apartBottom}>
        <div className={styles.apartBottomContent}>
          <div className={styles.apartBottomContentHeader}>
            <h3>Header</h3>
          </div>
          <div className={styles.apartBottomContentDesc}>description</div>
        </div>
        <div className={styles.apartBottomImageBox}>
          <div className={styles.apartBottomImage}></div>
        </div>
      </div>
    </div>
  );
};

export default ApartUs;
