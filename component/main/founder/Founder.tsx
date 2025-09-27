import React from "react";
import styles from "./Founder.module.css";

const Founder = () => {
  return (
    <div className={styles.founder}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h2>Founder Name</h2>
          <p>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
