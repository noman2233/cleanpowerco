"use client";
import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import SplitText from "../animatedComponents/SplitText/SplitText";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    "Commercialization of ready to deploy renewable.",
    "Energy department research will help eagles.",
    "We have be keeping up the plant with trees.",
    "Help secure the climate and support its normal assets.",
  ];

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
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageGallery}>
          <div className={styles.leftColumn}>
            <motion.div
              className={styles.imgBoxSmall}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={zoomVariants}
            >
              <Image
                src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/why-choose-04.jpg"
                alt="Solar Panel Installation"
                fill
                className={styles.objectCover}
              />
            </motion.div>
            <motion.div
              className={styles.imgBoxSmall}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={zoomVariants}
              transition={{ delay: 0.2, ...zoomVariants.visible.transition }}
            >
              <Image
                src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/why-choose-05.jpg"
                alt="Renewable Energy Planning"
                fill
                className={styles.objectCover}
              />
            </motion.div>
          </div>
          <motion.div
            className={styles.rightColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={zoomVariants}
            transition={{ delay: 0.4, ...zoomVariants.visible.transition }}
          >
            <Image
              src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/why-choose-06.jpg"
              alt="Wind Turbine Landscape"
              fill
              className={styles.objectCover}
            />
          </motion.div>
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>WHY CHOOSE US.</p>
          <SplitText
            text="We’re develop & create solar systems"
            className={styles.title}
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            showCallback
          />

          <div className={styles.mainFeature}>
            <div className={styles.iconCircle}>
         <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e2cc45" // Keeping your exact yellow/gold color
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* The Frame of the Panel */}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    
    {/* Vertical Grid Lines */}
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    
    {/* Horizontal Grid Line */}
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
            </div>
            <div className={styles.mainFeatureText}>
              <h3>Energy Innovation</h3>
              <p>
                Smart solar technology designed to get the most out of your roof
                and lower your power bills for decades.
              </p>
            </div>
          </div>

          <div className={styles.checklist}>
            {features.map((text, i) => (
              <div key={i} className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
