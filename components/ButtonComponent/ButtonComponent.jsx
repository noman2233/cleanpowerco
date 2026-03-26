// import React from "react";
// import styles from "./ButtonComponent.module.css";
// const ButtonComponent = ({ title }) => {
//   return <button className={styles.viewMoreBtn}>{title}</button>;
// };

// export default ButtonComponent;

import React from "react";
import Link from "next/link";
import styles from "./ButtonComponent.module.css";

const ButtonComponent = ({ title, href = "#" }) => {
  return (
    <Link href={href} className={styles.viewMoreLink}>
      <button className={styles.viewMoreBtn}>
        {title}
      </button>
    </Link>
  );
};

export default ButtonComponent;