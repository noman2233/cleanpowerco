"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineLightningBolt } from "react-icons/hi";
import { BiLeaf } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi2";
import styles from "./HeroSection.module.css";

const bgImages = [
  "https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/slide-04.jpg",
  "https://gepsenergy.com/assets/images/blog/single/hyrbird-power.webp",
  "https://cdn.shopify.com/s/files/1/0497/4749/3026/files/1_7733b6f3-c80f-452c-92e4-ad853201dec1_1024x1024.png?v=1686314683",
];

const featureCards = [
  {
    icon: <HiOutlineShieldCheck size={40} color="#27a770" />,
    title: "Trust & Warranty",
    text: "In power departure, land procurement, liaisoning and working with state.",
  },
  {
    icon: <HiOutlineLightningBolt size={40} color="#27a770" />,
    title: "Efficiency & Power",
    text: "In power departure, land procurement, liaisoning and working with state.",
  },
  {
    icon: <BiLeaf size={40} color="#27a770" />,
    title: "Simple & Easy",
    text: "In power departure, land procurement, liaisoning and working with state.",
  },
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Fix Hydration Error: Only run logic after component is mounted on client
  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Prevent server-client mismatch by not rendering the dynamic parts until mounted
  if (!isMounted) return <div className={styles.heroFallback} />;

  return (
    <section className={styles.hero}>
      <div className={styles.slideshowWrapper}>
        <AnimatePresence>
          <motion.div
            key={currentBg}
            className={styles.bgImageContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={bgImages[currentBg]}
              alt="Clean Energy Background"
              fill
              className={styles.objectCover}
              priority // Keeps it ready
            />
            <div className={styles.overlay}></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.contentWrapper}>
        <span className={styles.tagline}>INSTANT . SIMPLE . EXCELLENCE</span>
        <h1 className={styles.mainTitle}>
         TURN SOLAR 
          <br />
          INTO POWER
        </h1>
        <button className={styles.getStartedBtn}>
          Get Started <HiArrowRight className={styles.arrow} />
        </button>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.cardContainer}>
          {featureCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <div className={styles.cardText}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
