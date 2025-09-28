import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/component/main/hero/Hero";
import Vision from "@/component/main/vision/Vision";

import Founder from "@/component/main/founder/Founder";
import Footer from "@/component/main/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        {/* hero */}
        <Hero />
        {/* vision */}
        <Vision />
        {/* ApartUs */}

        {/* founder */}
        <Founder />
        {/* footer */}

        <Footer />
      </div>
    </div>
  );
}
