"use client";

import React from "react";
import styles from "./OfficeGrid.module.css";
import { IoLocationSharp, IoCallOutline } from "react-icons/io5";
import { LuMoveUpRight } from "react-icons/lu";
import { officeData } from "../data";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const OfficeGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {officeData.map((office) => (
            <div key={office.id} className={styles.card}>
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

              <div className={styles.actions}>
                <ButtonComponent title="GET DIRECTIONS" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeGrid;
