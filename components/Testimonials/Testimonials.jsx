"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./Testimonials.module.css";
import { testimonialsData } from "../data";
import { motion } from "framer-motion";
import HeadingSubHeading from "../HeadingSubHeading/HeadingSubHeading";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

 

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: .9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
     
      <HeadingSubHeading
        title="What Our Clients Says"
        subTitle="OUR TESTIMONIALS"
      />
 

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${
              item.highlighted ? styles.greenCard : styles.whiteCard
            }`}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 180 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* QUOTE */}
            <div className={styles.quoteWrapper}>
              <FaQuoteLeft className={styles.quoteIcon} />
            </div>

            {/* TEXT */}
            <p className={styles.testimonialText}>{item.text}</p>

            {/* PROFILE */}
            <div className={styles.profile}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.info}>
                <h4 className={styles.name}>{item.name}</h4>
                <p className={styles.role}>- {item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
