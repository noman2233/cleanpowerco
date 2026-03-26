// import React from "react";
// import Image from "next/image";
// import styles from "./WorkProcess.module.css";
// import { workProcessData } from "@/components/data";
// import SplitText from "@/components/animatedComponents/SplitText/SplitText";

// const WorkProcess = () => {
//   return (
//     <section className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <div className={styles.leftHeader}>
//             <div className={styles.tag}>
//               <span className={styles.dot}></span> WORK PROCESS
//             </div>
//             {/* <h2 className={styles.mainTitle}>
//               How We Engineer Success: Our End-to-End Project Methodology
//             </h2> */}

//             <SplitText
//             text="Our End-to-End Project Methodology"
//             className={styles.mainTitle}
//             delay={50}
//             duration={1.25}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 20 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//              showCallback
//           />
//           </div>
//           <div className={styles.rightHeader}>
//             <p className={styles.description}>
//               We take a hands-on, data-driven approach to every project. By
//               conducting rigorous site assessments and utilizing precision
//               topography mapping, our team ensures that your infrastructure is
//               optimized for maximum output and long-term environmental
//               sustainability.
//             </p>
//           </div>
//         </div>

//         <div className={styles.grid}>
//           {workProcessData.map((step) => (
//             <div key={step.id} className={styles.card}>
//               <div className={styles.imageContainer}>
//                 <Image
//                   src={step.image}
//                   alt={step.title}
//                   fill
//                   className={styles.image}
//                 />
//                 <div className={styles.numberBadge}>{step.id}</div>
//               </div>
//               <h3 className={styles.cardTitle}>{step.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkProcess;

"use client";
import React from "react";
import Image from "next/image";
import styles from "./WorkProcess.module.css";
import { workProcessData } from "@/components/data";
import SplitText from "@/components/animatedComponents/SplitText/SplitText";
import { motion } from "framer-motion";
import SlideUpText from "@/components/animatedComponents/SlideUpText/SlideUpText";

/* 🔥 Stagger container */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/* 🔥 Smooth modern card animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

const WorkProcess = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.leftHeader}>
            <div className={styles.tag}>
              <span className={styles.dot}></span> WORK PROCESS
            </div>

            <SplitText
              text="Our End-to-End Project Methodology"
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
              showCallback
            />
          </div>

          <div className={styles.rightHeader}>
            <p className={styles.description}>
              We take a hands-on, data-driven approach to every project. By
              conducting rigorous site assessments and utilizing precision
              topography mapping, our team ensures that your infrastructure is
              optimized for maximum output and long-term environmental
              sustainability.
            </p>
                 {/* <SplitText
              text="Our End-to-End Project Methodology"
              className={styles.description}
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              showCallback
            /> */}

        
          </div>
        </div>

        {/* GRID */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workProcessData.map((step) => (
            <motion.div
              key={step.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.04,
                rotate: 0.5,
              }}
              transition={{ type: "spring", stiffness: 180 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* IMAGE */}
              <div className={styles.imageContainer}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className={styles.image}
                />

                {/* 🔥 Animated number badge */}
                <motion.div
                  className={styles.numberBadge}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {step.id}
                </motion.div>
              </div>

              {/* TITLE */}
              <h3 className={styles.cardTitle}>{step.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
