import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.career}>
      <div className={styles.main}></div>
      <div className={styles.careerSection}>
        {/* top */}
        <div className={styles.careerSectionTop}>
          <div className={styles.careerSectionDetailHeader}>
            <p>Let’s Grow </p>
            <p>Together</p>
          </div>
          <div className={styles.careerSectionDetailDesc}>
            <p>
              Our team is here to help you charge forward with the right
              solutions reach out and let’s start the conversation.
            </p>
          </div>
        </div>
        {/* image */}
        <div className={styles.careerSectionImageBox}>
          <div className={styles.careerSectionImage}></div>
        </div>
      </div>
    </div>
  );
};

export default page;
