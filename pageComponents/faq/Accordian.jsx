"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { faqPageData } from '@/components/data';
import styles from "./Accordian.module.css"
import HeadingSubHeading from '@/components/HeadingSubHeading/HeadingSubHeading';
const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className={styles.container}>
         <HeadingSubHeading
        title="Addressing Your Concerns"
        subTitle="FAQ's"
      />
      
        <div className={styles.accordionSide}>
          {faqPageData.map((item, index) => (
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
  )
}

export default Accordian
