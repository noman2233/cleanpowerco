// import React from 'react';
// import Image from 'next/image';
// import { FaQuoteLeft } from 'react-icons/fa';
// import styles from './Testimonials.module.css';
// import { testimonialsData } from '../data';
// import SplitText from '../animatedComponents/SplitText/SplitText';

 
// const Testimonials = () => {
//   return (
//     <section className={styles.testimonialsSection}>
//       <div className={styles.header}>
//         <span className={styles.subtitle}>OUR TESTIMONIALS.</span>
//         {/* <h2 className={styles.title}>What Our Clients Says</h2> */}

//             <SplitText
//             text="What Our Clients Says"
//             className={styles.title}
//             delay={50}
//             duration={1.25}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 40 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//              showCallback
//           />

//       </div>

//       <div className={styles.grid}>
//         {testimonialsData.map((item, index) => (
//           <div 
//             key={index} 
//             className={`${styles.card} ${item.highlighted ? styles.greenCard : styles.whiteCard}`}
//           >
//             <div className={styles.quoteWrapper}>
//               <FaQuoteLeft className={styles.quoteIcon} />
//             </div>
            
//             <p className={styles.testimonialText}>{item.text}</p>
            
//             <div className={styles.profile}>
//               <div className={styles.avatarWrapper}>
//                 <Image 
//                   src={item.image} 
//                   alt={item.name} 
//                   width={60} 
//                   height={60} 
//                   className={styles.avatar}
//                 />
//               </div>
//               <div className={styles.info}>
//                 <h4 className={styles.name}>{item.name}</h4>
//                 <p className={styles.role}>- {item.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./Testimonials.module.css";
import { testimonialsData } from "../data";
import SplitText from "../animatedComponents/SplitText/SplitText";
import { motion } from "framer-motion";

/* 🔥 Parent stagger container */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* 🔥 Zoom-out animation (from inside screen to normal) */
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,   // starts small (inside screen feel)
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // premium smooth easing
    },
  },
};

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.subtitle}>OUR TESTIMONIALS.</span>

        <SplitText
          text="What Our Clients Says"
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

      {/* GRID */}
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