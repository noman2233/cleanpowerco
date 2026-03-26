"use client";
import React, { use } from "react"; // 1. Import the 'use' hook
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../../styles/ServiceDetail.module.css";
import WebLayout from "@/components/layout/WebLayout";
import Banner from "@/pageComponents/Banner/Banner";
import { detailedServices } from "@/components/data";

const ServiceDetail = ({ params }) => {
  const resolvedParams = use(params); 
  const slug = resolvedParams.slug;
 
  const service = detailedServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <WebLayout>
        <div style={{ padding: "100px", textAlign: "center" }}>
          <h1>Service Not Found</h1>
          <Link href="/services" style={{ color: "var(--color-green)" }}>Return to Services</Link>
        </div>
      </WebLayout>
    );
  }

  return (
    <WebLayout>
      <Banner 
        title={service.bannerTitle} 
        bgImage={service.heroImage} 
      />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.layout}>
            
            {/* LEFT: MAIN CONTENT AREA */}
            <main className={styles.mainContent}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className={styles.imgCover}
                  priority
                />
              </div>

              <h1 className={styles.title}>{service.title}</h1>
              <p className={styles.description}>{service.description}</p>
              <p className={styles.description}>{service.subDescription}</p>

              <h2 className={styles.subTitle}>Service Benefits</h2>
              <p className={styles.description}>
                Our approach to {service.title} ensures that your project meets 
                the highest standards of efficiency and long-term reliability.
              </p>

              <div className={styles.benefitSection}>
                <ul className={styles.benefitList}>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className={styles.square}></span> {benefit}
                    </li>
                  ))}
                </ul>

                <div className={styles.benefitImages}>
                  <div className={styles.smallImg}>
                    <Image
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500"
                      alt="Solar Installation Quality"
                      fill
                      className={styles.imgCover}
                    />
                  </div>
                  <div className={styles.smallImg}>
                    <Image
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=500"
                      alt="Clean Energy Maintenance"
                      fill
                      className={styles.imgCover}
                    />
                  </div>
                </div>
              </div>
            </main>

            {/* RIGHT: SIDEBAR */}
            <aside className={styles.sidebar}>
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>All Services</h3>
                <div className={styles.linkList}>
                  {detailedServices.map((item) => (
                    <Link 
                      key={item.id} 
                      href={`/services/${item.slug}`} 
                      className={`${styles.serviceLink} ${slug === item.slug ? styles.activeLink : ""}`}
                    >
                      {item.title} 
                      <FaArrowRight className={styles.linkIcon} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.ctaWidget}>
                <h4>Need Expert Advice?</h4>
                <p>Contact our engineers for a free site assessment today.</p>
                <Link href="/contact" className={styles.ctaBtn}>
                  Contact Us
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </WebLayout>
  );
};

export default ServiceDetail;