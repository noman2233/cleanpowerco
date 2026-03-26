// "use client";
// import React from "react";
// import Image from "next/image";
// import styles from "./ServicesSection.module.css";
// import { motion } from "framer-motion";
// import SplitText from "../animatedComponents/SplitText/SplitText";

 
// const ServicesSection = ({ services }) => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.header}>
//         <p className={styles.subtitle}>OUR SERVICES.</p>
//         {/* <h2 className={styles.title}></h2> */}
//            <SplitText
//             text="We Offer Different Services"
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
//         {services.map((service) => (
//           <div key={service.id} className={styles.card}>
//              <div className={styles.imageWrapper}>
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 fill
//                 className={styles.objectCover}
//               />
//                <div className={styles.iconBox}>{service.icon}</div>
//             </div>

//              <div className={styles.cardBody}>
//               <div className={styles.textContainer}>
//                 <h3 className={styles.cardTitle}>{service.title}</h3>
//                 <p className={styles.cardText}>{service.description}</p>
//               </div>

//                <button className={styles.readMoreBtn}>
//                 <span>READ MORE</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
    
//     </section>
//   );
// };

// export default ServicesSection;

"use client";
import React from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import { motion } from "framer-motion";
import SplitText from "../animatedComponents/SplitText/SplitText";
import { FiShield } from "react-icons/fi";

/* 🔥 Parent container (for stagger animation) */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* 🔥 Card animation (smooth slide-up) */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // smooth modern easing
    },
  },
};

const ServicesSection = ({ services }) => {
  return (
    <section className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <p className={styles.subtitle}>OUR SERVICES.</p>

        <SplitText
          text="We Offer Different Services"
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

      {/* GRID WITH STAGGER */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* IMAGE */}
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.objectCover}
              />
              <div className={styles.iconBox}>{service.icon}</div>
            </div>

            {/* CONTENT */}
            <div className={styles.cardBody}>
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>
                  {service.description}
                </p>
              </div>

              <button className={styles.readMoreBtn}>
                <span>READ MORE</span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;