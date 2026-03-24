import React from "react";
import LogoSliderTwo from "./LogoSliderTwo";
import LogoSliderOne from "./LogoSliderOne";
import styles from "./LogoSlider.module.css"
const LogoSlider = () => {
  return (
    <div className={styles.mainSlider}>
      <LogoSliderOne />
      <LogoSliderTwo />
    </div>
  );
};

export default LogoSlider;
