import React from "react";
import Link from "next/link";
import { FaLocationPin, FaMailchimp, FaPhone } from "react-icons/fa6";
import styles from "./Footer.module.css";
import { app_logo, footer_text, website_email, website_phone } from "../data";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoLocationOutline, IoMailOpenOutline, IoPhonePortraitOutline } from "react-icons/io5";

const Footer = () => {
  const data = new Date()?.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logo}>
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
                {/* <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />
                  <Link href="/faq">Faq's</Link>
                </li> */}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Services</h4>
              <ul>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/services">Solar Solutions</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/services">Solar System Design</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/services">Residential Solutions</Link>
                </li>
                <li>
                  <FaAngleDoubleRight className={styles.forwardIcon} />

                  <Link href="/services">Commercial Solutions</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contact us</h4>
              <div className={styles.contactList}>
                {/* <div className={styles.footerContact}>
                  <IoLocationOutline className={styles.iconLocation} />
                  <p>Office 1405 92 Castle Street, Ireland</p>
                </div> */}
                <div className={styles.footerContact}>
                  <IoMailOpenOutline className={styles.iconLocation} />
                              <Link href={`mailto:${website_email}`}>
                  <p>{website_email}</p>
</Link>
                </div>
                <div className={styles.footerContact}>
                  <IoPhonePortraitOutline className={styles.iconLocation} />
                                 <Link href={`tel:${website_phone}`}>

                  <p>{website_phone}</p>
                                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>
            Copyright @ {data}
            {""}
            <span className={styles.ownername}>cleanpowerco.com</span>{""} All
            rights Reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/termscondition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
