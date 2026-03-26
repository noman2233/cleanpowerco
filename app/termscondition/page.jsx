import React from "react";
import styles from "../../styles/TermsAndConditions.module.css";
import { TERMS_DATA } from "@/components/data";
import WebLayout from "@/components/layout/WebLayout";
import Banner from "@/pageComponents/Banner/Banner";

const TermsAndConditions = () => {
  return (
    <WebLayout>
      <Banner
        title="Terms and Conditions"
        bgImage="https://img.freepik.com/premium-photo/aerial-view-large-sustainable-electrical-power-plant-with-rows-solar-photovoltaic-panels-producing-clean-ecological-electric-energy-renewable-electricity-with-zero-emission-concept_127089-14886.jpg"
      />
      <div className={styles.pageContainer}>
        <main className={styles.contentWrapper}>
          {TERMS_DATA.map((item) => (
            <section key={item.id} className={styles.section}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.desc}</p>
            </section>
          ))}
        </main>
      </div>
    </WebLayout>
  );
};

export default TermsAndConditions;
