import React from "react";
import SplitText from "../animatedComponents/SplitText/SplitText";
import styles from "./HeadingSubHeading.module.css"
const HeadingSubHeading = ({title,subTitle}) => {
  return (
    <div className={styles.header}>
      <span className={styles.subtitle}>{subTitle}.</span>

      <SplitText
        text={title}
        className={styles.title}
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        showCallback
      />
    </div>
  );
};

export default HeadingSubHeading;
