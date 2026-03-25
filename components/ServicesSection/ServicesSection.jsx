"use client";
import React from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import { motion } from "framer-motion";

 
const ServicesSection = ({ services }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>OUR SERVICES.</p>
        <h2 className={styles.title}>We Offer Different Services</h2>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
             <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.objectCover}
              />
               <div className={styles.iconBox}>{service.icon}</div>
            </div>

             <div className={styles.cardBody}>
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </div>

               <button className={styles.readMoreBtn}>
                <span>READ MORE</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default ServicesSection;
