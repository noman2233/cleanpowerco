import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = ({ title, breadcrumb, bgImage }) => {
  return (
    <section className={styles.banner}>
       <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
         
      </div>
    </section>
  );
};

export default Banner;
