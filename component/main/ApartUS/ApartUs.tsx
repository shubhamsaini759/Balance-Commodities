"use client";

import React, { useRef, useEffect } from "react";
import styles from "./ApartUs.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const list = [
  { header: "header one", desc: "desc one" },
  { header: "header two", desc: "desc two" },
  { header: "header three", desc: "desc three" },
  { header: "header four", desc: "desc four" },
];

const ApartUs = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const stickyCards = gsap.utils.toArray<HTMLElement>(".sticky-card");

      stickyCards.forEach((card, ind) => {
        if (ind < list.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1] as Element,
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (ind < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[ind + 1] as Element,
            start: "top bottom",
            end: "top top",
          });
        }
      });
    }, container);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      <div className={styles.apart}>
        <div className={styles.apartTop}>
          <div className={styles.apartTopHeader}>
            <h2>Charging Technologies</h2>
            <h2>Charging Technologies</h2>
          </div>
          <div className={styles.apartTopDesc}>
            <p>
              Explore our smart, user-friendly EV charging products built for
              speed, safety, and seamless performance wherever the road takes
              you.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.cardApart} ref={container}>
        {list.map((x, ind) => (
          <div className={`${styles.apartBottom} sticky-card`} key={ind}>
            <div className={styles.apartBottomContent}>
              <div className={styles.apartBottomContentHeader}>
                <h3>{x.header}</h3>
              </div>
              <div className={styles.apartBottomContentDesc}>{x.desc}</div>
            </div>
            <div className={styles.apartBottomImageBox}>
              <div className={styles.apartBottomImage}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApartUs;
