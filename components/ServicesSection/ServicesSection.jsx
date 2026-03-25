"use client";
import React from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import { motion } from "framer-motion";
import SplitText from "../animatedComponents/SplitText/SplitText";

 
const ServicesSection = ({ services }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>OUR SERVICES.</p>
        {/* <h2 className={styles.title}></h2> */}
           <SplitText
            text="We Offer Different Services"
            className={styles.title}
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
             showCallback
          />
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
