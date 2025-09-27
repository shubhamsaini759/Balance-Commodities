import React from "react";
import styles from "./Vision.module.css";

const Vision = () => {
  return (
    <>
      <div className={styles.vision}>
        <div className={styles.visionContainer}>
          <p>
            Our mission stays the same: advancing mobility with smart,
            sustainable, accessible EV charging for all.
          </p>
        </div>
      </div>
      {/* vision card */}
      <div className={styles.visionCard}>
        <div className={styles.visionCardContainer}>
          <div className={styles.visionCardWrapper}>
            <div className={styles.visionCardImageBox}>
              <div className={styles.visionCardImage}></div>
            </div>
            <div className={styles.visionCardContent}>
              <div className={styles.visionCardContentHeader}>
                <p>Advancing Green</p>
                <p>For Our Future</p>
              </div>
              <div className={styles.visionCardContentDesc}>
                <p>
                  We aim to create a world where electric vehicles are
                  seamlessly integrated into everyday life paving the way for a
                  cleaner, smarter, and more efficient future driven by
                  sustainable energy and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mission card */}
      <div className={styles.missionCard}>
        <div className={styles.missionCardContainer}>
          <div className={styles.missionCardWrapper}>
            <div className={styles.missionCardContent}>
              <div className={styles.missionCardContentHeader}>
                <p>Innovation Fuels</p>
                <p>Every Charge</p>
              </div>
              <div className={styles.missionCardContentDesc}>
                <p>
                  Innovation at Volthaus means creating smart solutions that
                  make life easier, businesses stronger, and our planet cleaner.
                  We're not just building chargers we're building a better
                  future.
                </p>
              </div>
            </div>
            <div className={styles.missionCardImageBox}>
              <div className={styles.missionCardImage}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
