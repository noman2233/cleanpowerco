import React from "react";
import Link from "next/link";
import {
 
  FaLocationPin,
  FaMailchimp,
  FaPhone,
} from "react-icons/fa6";
import styles from "./Footer.module.css";
import { app_logo } from "../data";
 

const Footer =() => {
  const data=new Date()?.getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logo}>
                {/* Ensure app_logo is defined or replace with a string path */}
                <img src={app_logo} alt="Logo" className={styles.applogo} />
              </div>
            </Link>
            
      
            <p className={styles.companyInfo}>
              Our furniture shop blends timeless craftsmanship with modern
              design to transform your living spaces into personalized
              sanctuaries of comfort and style.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <ul>
                <li><Link href="/features">Products</Link></li>
                <li><Link href="/pricing">Categories</Link></li>
                <li><Link href="/integrations">Featured Product</Link></li>
                <li><Link href="/team">Our Team</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Useful Links</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/return-policy">Return Policy</Link></li>
                <li><Link href="/shipping-policy">Shipping</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contact us</h4>
              <div className={styles.contactList}>
                <div className={styles.footerContact}>
                  <FaLocationPin className={styles.iconLocation} />
                  <p>Office 1405 92 Castle Street, Ireland</p>
                </div>
                <div className={styles.footerContact}>
                  <FaMailchimp className={styles.iconLocation} />
                  <p>contact@career.co.uk</p>
                </div>
                <div className={styles.footerContact}>
                  <FaPhone className={styles.iconLocation} />
                  <p>+9203246773140</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p> @ {data}  <span className={styles.ownername}>cleanpowerco.com</span> All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;