import React from "react";
import styles from "./AnnouncementBar.module.css";
import { FiZap, FiMapPin } from "react-icons/fi";
import { CgFacebook, CgInstagram, CgMail, CgTwitter } from "react-icons/cg";
import { website_email, website_phone } from "../data";
import { BiLogoLinkedin, BiPhone } from "react-icons/bi";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const AnnouncementBar: React.FC = () => {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.container}>
         <div className={styles.leftSection}>
          <div className={styles.item}>
            <BiPhone className={styles.icon} />
            <span>{website_phone}</span>
          </div>
          <div className={styles.divider}>|</div>
          <div className={styles.item}>
            <CgMail className={styles.icon} />
            <Link href={`mailto:${website_email}`}>
            <span>{website_email}</span>
            </Link>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <Link href="/">
            <CgFacebook className={styles.icon} />
          </Link>
          <Link href="/">
            <CgInstagram className={styles.icon} />
          </Link>
          <Link href="/">
            <BiLogoLinkedin className={styles.icon} />
          </Link>
             <Link href="/">
            <FaTwitter className={styles.icon} />
          </Link>
        </div>
     
      </div>
    </div>
  );
};

export default AnnouncementBar;
