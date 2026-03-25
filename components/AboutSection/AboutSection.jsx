import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";
import { website_phone } from "../data";
import TextType from "../animatedComponents/TextType/TextType";

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Side: Image Content */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/about4.jpg"
              alt="Wind turbines in a field"
              layout="fill"
              objectFit="cover"
              className={styles.mainImage}
            />
            {/* The decorative white notch at the bottom left */}
            <div className={styles.notch}></div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className={styles.contentContainer}>
          <div className={styles.label}>
            <span className={styles.square}></span> ABOUT US
          </div>

          <h2 className={styles.title}>
            <TextType
              text={[
                "20 Years of Experience in Solar Panels Services",
                "Empowering Communities Through Affordable Solar Energy",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className={styles.subHeading}
            />
          </h2>

          <p className={styles.description}>
            We Provide clean, dependable, environmentally friendly, and
            cost-effective electrical energy to people all over the world in
            order to save our planet for future generations.
          </p>

          <ul className={styles.features}>
            <li>
              <span className={styles.check}>✔</span> Ground Mounting System
            </li>
            <li>
              <span className={styles.check}>✔</span> Flat Roof Mounting System
            </li>
            <li>
              <span className={styles.check}>✔</span> Solar Carport
            </li>
          </ul>

          <div className={styles.footer}>
            <div className={styles.contactInfo}>
              <div className={styles.phoneIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className={styles.phoneLabel}>
                  The Future of Solar Energy
                </span>
                {/* <span className={styles.phoneNumber}>123-456-789</span> */}
                <span className={styles.phoneNumber}>{website_phone}</span>
              </div>
            </div>

            <div className={styles.trustBox}>
              <h3>We’re trusted by more than 30k clients</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
