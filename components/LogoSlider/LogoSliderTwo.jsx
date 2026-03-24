"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LogoSlider.module.css';

// Using the map method for clean, reusable code
const logos = [
 
  { id: 4, name: 'TCL', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0UXGFLfIzIDsklT10VCKZ6IENyU8_uIHH8sve3whdQ&s&ec=121585071' },
  { id: 5, name: 'Whirlpool', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUao0mCZ2mHdw0ug-iOnnAusGrsN11cshtJF7oh8NSfw&s&ec=121585071' },
  { id: 6, name: 'Xbox', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_SMA.svg/250px-Logo_SMA.svg.png' },
  { id: 7, name: 'Beko', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRFDgYg8nfTPlKGM9YGqFMNJW1qmKhqLTiQ&s' },
  { id: 8, name: 'Hisense', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmh4JAXsZ7Y5Ma8BzVfNreXHchhLHkDF3AlA&s' },
];

const LogoSliderTwo = () => {
  // To create a seamless infinite loop, we double the array
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.sliderContainer}>
      {/* <div className={styles.fadeOverlayLeft}></div> */}
      
      <motion.div 
        className={styles.logoTrack}
        animate={{
          x: ['-50%', '0%'], // Moves half the track width
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

export default LogoSliderTwo;