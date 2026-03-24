import React from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

const services = [
  {
    id: 1,
    title: "Solar Solutions",
    description: "An ideal mix of involvement and skill to further our focus on technology.",
    image: "https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/services-1.jpg",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M7 10v11M12 10v11M17 10v11M3 15h18M3 10l9-7 9 7" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Wind Turbine",
    description: "An ideal mix of involvement and skill to further our focus on technology.",
    image: "https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/services-2.jpg",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M12 12L12 22M12 12L18 8M12 12L6 8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Renewable Energy",
    description: "An ideal mix of involvement and skill to further our focus on technology.",
    image: "https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/services-3.jpg",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M9 18h6M10 22h4M12 2v3M5 8l2 2M19 8l-2 2" />
        <path d="M12 5a7 7 0 0 0-7 7c0 2.5 2 4.5 4 5h6c2-.5 4-2.5 4-5a7 7 0 0 0-7-7z" />
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>OUR SERVICES.</p>
        <h2 className={styles.title}>We Offer Different Services</h2>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            {/* Image Section */}
            <div className={styles.imageWrapper}>
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className={styles.objectCover}
              />
              {/* Overlapping Green Icon Box */}
              <div className={styles.iconBox}>
                {service.icon}
              </div>
            </div>

            {/* Content Section */}
            <div className={styles.cardBody}>
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </div>

              {/* Vertical Yellow "Read More" Sidebar */}
              <button className={styles.readMoreBtn}>
                <span>READ MORE</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;