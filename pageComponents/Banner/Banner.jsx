import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = ({ title, breadcrumb, bgImage }) => {
  return (
    <section className={styles.banner}>
      {/* Next.js Image component for better optimization */}
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
        <p className={styles.breadcrumbText}>
          Home <span className={styles.separator}>■</span> {breadcrumb}
        </p>
      </div>
    </section>
  );
};

export default Banner;
