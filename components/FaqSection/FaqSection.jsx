"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FaqSection.module.css";
import { faqData } from "../data";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SplitText from "../animatedComponents/SplitText/SplitText";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    "Commercialization of ready to deploy renewable",
    "We have be keeping up the plant with trees.",
    "Energy department research will help eagles",
    "Help secure the climate and support its normal assets.",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Side: Content */}
        <div className={styles.contentSide}>
          <span className={styles.subHeading}>Home Service</span>
          {/* <h2 className={styles.mainHeading}>Have Any Questions?</h2> */}

            <SplitText
            text="Have Any Questions?"
            className={styles.mainHeading}
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


          <ul className={styles.featureList}>
            {features.map((item, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <ButtonComponent title="View Services" />
        </div>

        {/* Right Side: Accordion */}
        <div className={styles.accordionSide}>
          {faqData.map((item, index) => (
            <div key={item.id} className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${
                  activeIndex === index ? styles.activeHeader : ""
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
              >
                <span
                  className={
                    activeIndex === index ? styles.activeQuestionText : ""
                  }
                >
                  {item.question}
                </span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.accordionContent}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
