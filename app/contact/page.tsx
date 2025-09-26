import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.main}>
        {/* info */}
        <div className={styles.contactSection}>
          {/* top */}
          <div className={styles.contactSectionTop}>
            <div className={styles.contactSectionDetailHeader}>
              <p>Let’s Connect And</p>
              <p>Power What’s Next</p>
            </div>
            <div className={styles.contactSectionDetailDesc}>
              <p>
                Our team is here to help you charge forward with the right
                solutions reach out and let’s start the conversation.
              </p>
            </div>
          </div>
          {/* detail */}
          <div className={styles.contactSectionDetail}>
            <div className={styles.info}>
              <h5>Address</h5>
              <p>1425 Maple Street, 1425 Maple Street </p>
            </div>
            <div className={styles.info}>
              <h5>E Mail</h5>
              <p>hello@volthaus.com</p>
            </div>
            <div className={styles.info}>
              <h5>Contact</h5>
              <p>+1 254 861 2190</p>
            </div>
          </div>
          {/* image */}
          <div className={styles.contactSectionImageBox}>
            <div className={styles.contactSectionImage}></div>
          </div>
        </div>
        {/* form */}
        <div className={styles.formSection}>
          <div className={styles.formSectionContainer}>
            <div className={styles.formSectionWrapper}>
              <div className={styles.formSectionWrapperLeft}>
                <div className={styles.formSectionWrapperLeftHeader}>
                  <h2>Send Us</h2>
                  <h2>A Message</h2>
                </div>
                <div className={styles.formSectionWrapperLeftText}>
                  <p>
                    Fill out the form below and our team will get back to you as
                    soon as possible.
                  </p>
                </div>
              </div>
              <div className={styles.formSectionWrapperRight}>
                <div className={styles.form}>
                  <div className={styles.inputs}>
                    <div className={styles.inputBox}>
                      <p className={styles.inputTitle}>Name</p>
                      <input className={styles.input} />
                    </div>
                    <div className={styles.inputBox}>
                      <p className={styles.inputTitle}>Email</p>
                      <input className={styles.input} />
                    </div>
                    <div className={styles.inputBox}>
                      <p className={styles.inputTitle}>Message</p>
                      <input className={styles.input} />
                    </div>
                    <div className={styles.submitButton}>Submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
