import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.css";
import SplitText from "../animatedComponents/SplitText/SplitText";

const WhyChooseUs = () => {
  const features = [
    "Commercialization of ready to deploy renewable.",
    "Energy department research will help eagles.",
    "We have be keeping up the plant with trees.",
    "Help secure the climate and support its normal assets.",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Side: Asymmetric Image Grid */}
        <div className={styles.imageGallery}>
          <div className={styles.leftColumn}>
            <div className={styles.imgBoxSmall}>
              <Image
                src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/why-choose-04.jpg"
                alt="Solar Panel Installation"
                fill
                className={styles.objectCover}
              />
            </div>
            <div className={styles.imgBoxSmall}>
              <Image
                src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/why-choose-05.jpg"
                alt="Renewable Energy Planning"
                fill
                className={styles.objectCover}
              />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <Image
              src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/why-choose-06.jpg"
              alt="Wind Turbine Landscape"
              fill
              className={styles.objectCover}
            />
          </div>
        </div>

        {/* Right Side: Information Content */}
        <div className={styles.content}>
          <p className={styles.subtitle}>WHY CHOOSE US.</p>
          {/* <h2 className={styles.title}>We’re develop & create solar systems</h2> */}
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
            // onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />

          <div className={styles.mainFeature}>
            <div className={styles.iconCircle}>
               <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2cc45"
                strokeWidth="1.5"
              >
                <path
                  d="M12 12L12 22M12 12L18 8M12 12L6 8"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="2" fill="#e2cc45" />
              </svg>
            </div>
            <div className={styles.mainFeatureText}>
              <h3>Wind Generators</h3>
              <p>
                New limit across the sun powered worth chain become important to
                help the PV market’s development.
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
