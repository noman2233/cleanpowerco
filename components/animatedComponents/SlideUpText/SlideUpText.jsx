"use client";
import React from "react";
import { motion } from "framer-motion";

const SlideUpText = ({
  children,
  className,
  delay = .3,
  duration = 0.8,
}) => {
  return (
    <motion.p
      className={className}
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],  
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.p>
  );
};

export default SlideUpText;