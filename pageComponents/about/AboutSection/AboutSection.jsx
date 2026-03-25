"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCircleCheck, FaPlay } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./AboutSection.module.css";
import { aboutTabs } from "@/components/data";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import SplitText from "@/components/animatedComponents/SplitText/SplitText";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          <div className={styles.imageSide}>
            <div className={styles.mainImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000"
                alt="Engineers with Solar"
                fill
                className={styles.imgCover}
              />
            </div>
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
              text="Produce Your Own Clean. Save The Environment
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
              <ButtonComponent title="View Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
