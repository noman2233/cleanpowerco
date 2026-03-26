"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
 import styles from "./AboutSection.module.css";
import { aboutTabs } from "@/components/data";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import SplitText from "@/components/animatedComponents/SplitText/SplitText";
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0]);
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
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          <div className={styles.imageSide}>
            <motion.div
              className={styles.mainImageWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} 
              variants={zoomVariants}
           
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000"
                alt="Engineers with Solar"
                fill
                className={styles.imgCover}
              />
            </motion.div>
            <div className={styles.accentBars}></div>
          </div>

          <div className={styles.contentSide}>
            <div className={styles.badge}>
              <span className={styles.badgeHighlight}>ABOUT</span> COMPANY
            </div>

            {/* <h2 className={styles.mainTitle}>
              Produce Your Own Clean
              <br />
              Save The Environment
            </h2> */}
            <SplitText
              text="Make Your Own Energy. Save The Environment
"
              className={styles.mainTitle}
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
                        from={{ opacity: 0, y: 20 }}

              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              // onLetterAnimationComplete={handleAnimationComplete}
              showCallback
            />
            

            <div className={styles.tabHeader}>
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabBtn} ${
                    activeTab.id === tab.id ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={styles.tabBody}>
              <p className={styles.description}>{activeTab.content}</p>

              <div className={styles.featureRow}>
                <div className={styles.smallImgWrapper}>
                  <Image
                    src="https://img.freepik.com/free-photo/foreman-businessman-solar-energy-station_1157-35687.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Solar Panel Small"
                    fill
                    className={styles.imgCover}
                  />
                </div>
                <ul className={styles.featureList}>
                  {activeTab.features.map((item, idx) => (
                    <li key={idx}>
                      <FaCircleCheck className={styles.checkIcon} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.footerActions}>
              <ButtonComponent title="View Services" href="/services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
