// import React from "react"; // Add this line
//  import { FiX } from "react-icons/fi";
// import styles from "./newsidemenu.module.css";
// import { motion } from "framer-motion";
// import { app_logo, MENU_ITEMS } from "../data";
// import Link from "next/link";
// import { BiPhoneCall } from "react-icons/bi";

 
// const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
//   return (
//     <>
//       <div
//         className={`${styles.overlay} ${isMenuOpen ? styles.show : ""}`}
//         onClick={() => setIsMenuOpen(false)}
//       />

//       <motion.div
//         className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}
//       >
//         <div className={styles.header}>
//           <div className={styles.userInfo}>
//             <div className={styles.avatarWrapper}>
//               <img
//                 src={app_logo}
//                 alt="User Avatar"
//                 className={styles.avatar}
//               />
//             </div>
//           </div>
//           <button
//             className={styles.closeBtn}
//             onClick={() => setIsMenuOpen(false)}
//             aria-label="Close menu"
//           >
//             <FiX className={styles.icon} />
//           </button>
//         </div>

//         <nav className={styles.navLinks}>
       
//           {MENU_ITEMS.map((item) => {
//             const isExternalPage = item.path !== "/";

//             return (
//               <Link
//                 key={item?.label}
//                 href={item?.path}
//                 className={styles.navItem}
//                 onClick={(e) => {
//                   if (!isExternalPage) {
//                     e.preventDefault();
//                     scrollToSection(item.id);
//                   }
//                   setIsMenuOpen(false);
//                 }}
//               >
//                 <div className={styles.menuBox}>
//                   <span className={styles.label}>{item.label}</span>
//                   <span className={styles.icon}>{<item.icon />}</span>
//                 </div>
//               </Link>
//             );
//           })}
//           <div className={styles.footer}>
//             <Link href="/contact">
//               <button
//                 className={styles.logoutBtn}
//                 onClick={() => console.log("Logout and clear JWT")}
//               >
//                 <BiPhoneCall />
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </motion.div>
//     </>
//   );
// };

// export default SideMenu;


"use client";
 

import React from "react"; 
 import { FiX } from "react-icons/fi";
import styles from "./newsidemenu.module.css";
import { motion } from "framer-motion";
import { app_logo, MENU_ITEMS } from "../data";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
 
const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar Container */}
      <motion.div
        className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatarWrapper}>
              <img
                       src={app_logo}
                 alt="Clean Power Co Logo"
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

        <nav className={styles.navLinks}>
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)} // Just close the menu, let Link handle the rest
            >
              <div className={styles.menuBox}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.icon}>
                  <item.icon />
                </span>
              </div>
            </Link>
          ))}

          <div className={styles.footer}>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className={styles.logoutBtn}>
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