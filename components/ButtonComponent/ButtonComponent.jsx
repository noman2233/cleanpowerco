import React from "react";
import styles from "./ButtonComponent.module.css";
const ButtonComponent = ({ title }) => {
  return <button className={styles.viewMoreBtn}>{title}</button>;
};

export default ButtonComponent;
