 
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineLightningBolt } from "react-icons/hi";
import { BiLeaf } from "react-icons/bi";
import styles from "./HeroSection.module.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { slides ,featureCards} from "../data";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <div className={styles.heroFallback} />;

  return (
    <div className={styles.heroContainer}>
       <div style={{ display: "none" }}>
        {slides.map((s, i) => (
          <img key={i} src={s.image} alt="preload" />
        ))}
      </div>
      <section className={styles.hero}>
        <div className={styles.slideshowWrapper}>
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              className={styles.bgImageContainer}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={slides[current].image}
                alt="Solar Energy"
                fill
                className={styles.objectCover}
                priority
              />
              <div className={styles.overlay}></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.contentWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={styles.textCenter}
            >
              <span className={styles.tagline}>{slides[current].tagline}</span>
              <h1 className={styles.mainTitle}>{slides[current].title}</h1>
              <div className={styles.btnGroup}>
                <ButtonComponent title="Get Started" href="/services" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
 
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
    </div>
  );
};

export default HeroSection;
