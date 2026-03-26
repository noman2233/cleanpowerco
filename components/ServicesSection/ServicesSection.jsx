 

"use client";
import React from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import { motion } from "framer-motion";
  import Link from "next/link";
import HeadingSubHeading from "../HeadingSubHeading/HeadingSubHeading";

 const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,        
    scale: 0.93,    
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

 

const ServicesSection = ({ services }) => {
  return (
    <section className={styles.container}>
   
       <HeadingSubHeading title="We Offer Different Services" subTitle="OUR SERVICES" />

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true ,amount:0.1}}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
    <Link
                href={`/services/${service.slug}`}
                className={styles.imageLink}
              >
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
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
