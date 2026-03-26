"use client";

import React from "react";
import styles from "./OfficeGrid.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { officeData, website_phone } from "../data";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { motion } from "framer-motion";
import Link from "next/link";

const OfficeGrid = () => {
  const zoomVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {officeData.map((office) => (
            <motion.div
              key={office.id}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={zoomVariants}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconContainer}>
                  <IoLocationSharp size={22} color="#24a022" />
                </div>
                <span className={styles.statusBadge}>{office.status}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.officeName}>{office.state} Office</h3>
                <p className={styles.addressText}>{office.address}</p>
              </div>

                <Link href={`tel:${website_phone}`} className={styles.iconLink}>
              <div className={styles.actions}>
                  <ButtonComponent title="Get in Touch" />
              </div>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeGrid;
