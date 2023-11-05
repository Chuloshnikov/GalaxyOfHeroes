"use client"

import React from 'react';
import { CiSquareChevDown } from "react-icons/ci";
import { motion } from 'framer-motion';

const ScrollDownButton = () => {
    
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      };

  return (
    <motion.button 
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
        repeat: Infinity,
        duration: 1.5, // Тривалість одного переміщення вверх і назад вниз
        repeatType: "loop",
        ease: "easeInOut"
    }}
    onClick={scrollToBottom}
    >
        <CiSquareChevDown className="w-14 h-14"/>
    </motion.button>
  )
}

export default ScrollDownButton;