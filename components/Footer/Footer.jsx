import React from "react";
import Link from "next/link";
import { FaLocationPin, FaMailchimp, FaPhone } from "react-icons/fa6";
import styles from "./Footer.module.css";
import { app_logo, footer_text } from "../data";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  const data = new Date()?.getFullYear();
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

            <p className={styles.companyInfo}>{footer_text}</p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />
                  <Link href="/about">Services</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />
                  <Link href="/faq">Faq's</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Services</h4>
              <ul>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/features">Solar Solutions</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/pricing">Categories</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/integrations">Featured Product</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/team">Our Team</Link>
                </li>
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
          <p>
            Copyright @ {data}
            {""}
            <span className={styles.ownername}>cleanpowerco.com</span> All
            rights reserved.
          </p>
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
