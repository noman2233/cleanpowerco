 
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./Navbar.module.css";
import SideMenu from "../SideMenu/SideMenu";
import { scrollToSection } from '../../app/scroll';
import { app_logo, MENU_ITEMS } from "../data";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <img src={app_logo} alt="Clean Powerco" />
            </Link>
          </div>

          <nav className={styles.nav}>
            {MENU_ITEMS.map((item, index) => {
              // Check if the item is a separate page or a scroll section
              const isAPage = item.path !== "/";

              if (isAPage) {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className={`${styles.link} ${
                      pathname === item.path ? styles.active : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className={`${styles.link} ${
                    item.label === "Home" && pathname === "/" ? styles.active : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();

                    // If user is NOT on home page, go home first, then scroll
                    if (pathname !== "/") {
                      router.push("/");
                      // Small delay to allow the home page to load before scrolling
                      setTimeout(() => scrollToSection(item.id), 100);
                    } else {
                      scrollToSection(item.id);
                    }

                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className={styles.right}>
            <button className={styles.iconBtn}>
              <FaPhone className={styles.navbarIcon} />
            </button>

          

            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiMenu className={styles.mobileMenuIcon} />
              ) : (
                <HiMenu className={styles.mobileMenuIcon} />
              )}
            </button>
          </div>
        </div>
      </header>

      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Navbar;