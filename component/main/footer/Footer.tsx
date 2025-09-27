import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopAdd}>
            <p className={styles.footerTopAddHeader}>content</p>
            <p className={styles.footerTopAddDesc}>hello</p>
          </div>
          <div className={styles.footerTopAdd}>
            <p className={styles.footerTopAddHeader}>content</p>
            <p className={styles.footerTopAddDesc}>hello</p>
          </div>
          <div className={styles.footerTopAdd}>
            <p className={styles.footerTopAddHeader}>content</p>
            <p className={styles.footerTopAddDesc}>hello</p>
          </div>
          <div className={styles.footerTopLink}>
            <p className={styles.footerTopLinkHeader}>Contact Us</p>
            <p className={styles.footerTopLinkIcon}>hello</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerLogoBox}>
            <div className={styles.footerLogo}></div>
          </div>
          <p className={styles.copyRight}>
            © 2024 Trilo, Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
