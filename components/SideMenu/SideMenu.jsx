import React from "react"; // Add this line
 import { FiX } from "react-icons/fi";
import styles from "./newsidemenu.module.css";
import { motion } from "framer-motion";
import { CgLogIn } from "react-icons/cg";
import { app_logo, MENU_ITEMS } from "../data";
import Link from "next/link";
import { BiPhone, BiPhoneCall } from "react-icons/bi";

 
const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <motion.div
        className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatarWrapper}>
              <img
                src={app_logo}
                alt="User Avatar"
                className={styles.avatar}
              />
            </div>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX className={styles.icon} />
          </button>
        </div>

        {/* Navigation */}
        <nav className={styles.navLinks}>
       
          {MENU_ITEMS.map((item) => {
            // 1. Determine if this is a separate page (like /about or /dashboard)
            const isExternalPage = item.path !== "/";

            return (
              <Link
                key={item?.label}
                // If it's an external page, use the path. If it's a scroll section, keep it at "/"
                href={item?.path}
                className={styles.navItem}
                onClick={(e) => {
                  if (!isExternalPage) {
                    // 2. Only prevent default and scroll if it's a section on the same page
                    e.preventDefault();
                    scrollToSection(item.id);
                  }
                  // Always close the menu regardless of the link type
                  setIsMenuOpen(false);
                }}
              >
                <div className={styles.menuBox}>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.icon}>{<item.icon />}</span>
                </div>
              </Link>
            );
          })}
          <div className={styles.footer}>
            <Link href="/login">
              <button
                className={styles.logoutBtn}
                onClick={() => console.log("Logout and clear JWT")}
              >
                <BiPhoneCall />
                Contact Us
              </button>
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default SideMenu;