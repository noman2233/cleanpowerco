import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';
import { testimonialsData } from '../data';

 
const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <span className={styles.subtitle}>OUR TESTIMONIALS.</span>
        <h2 className={styles.title}>What Our Clients Says</h2>
      </div>

      <div className={styles.grid}>
        {testimonialsData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${item.highlighted ? styles.greenCard : styles.whiteCard}`}
          >
            <div className={styles.quoteWrapper}>
              <FaQuoteLeft className={styles.quoteIcon} />
            </div>
            
            <p className={styles.testimonialText}>{item.text}</p>
            
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;