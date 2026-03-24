"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LogoSlider.module.css';

// Using the map method for clean, reusable code
const logos = [
  { id: 1, name: 'Panasonic', src: 'https://upload.wikimedia.org/wikipedia/en/7/74/Jinko_Solar_logo.svg' },
  { id: 2, name: 'Samsung', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOkLqi_8whVKC8dPUcZjl_HRvBpNT-eIDotUmqh0yPg&s&ec=121585071' },
  { id: 3, name: 'Sony', src:'https://www.energypartners.com.au/wp-content/uploads/2021/11/canadian-solar-logo.png' },
  { id: 4, name: 'TCL', src: 'https://solar-distribution.baywa-re.cz/out/media/byd-logo.png' },
  { id: 4, name: 'TCL', src: 'https://lh4.googleusercontent.com/proxy/UWtsodogh5l2WF4NGSjCcVtAO5KUYRtNGUXX_go05OnCoPvVXygLSJOsZEkjzHepKfX0wl4baFYna3AqFFrilFBj7W3jAgd_EESRNr5MoxVaXhJdxQ' },
 
];

const LogoSliderOne = () => {
  // To create a seamless infinite loop, we double the array
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.sliderContainer}>
      {/* <div className={styles.fadeOverlayLeft}></div> */}
      
      <motion.div 
        className={styles.logoTrack}
        animate={{
          x: ['0%', '-50%'], // Moves half the track width
        }}
        transition={{
          duration: 20, // Adjust speed here (higher = slower)
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className={styles.logoItem}>
            <img 
              src={logo.src}
              alt={logo.name} 
              className={styles.logoImage} 
            />
          </div>
        ))}
      </motion.div>

      {/* <div className={styles.fadeOverlayRight}></div> */}
      
    </div>
  );
};

export default LogoSliderOne;