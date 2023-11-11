"use client"
import React, { useEffect, useState } from 'react';
import { CiCircleChevUp } from 'react-icons/ci';
import { motion } from 'framer-motion';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Визначте, чи кнопка має бути видимою або ні
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Задайте власний поріг, наприклад, 200 пікселів
  };

  useEffect(() => {
    // Додайте обробник прокрутки при монтуванні компонента
    window.addEventListener('scroll', handleScroll);
    
    // Прибирайте обробник при розмонтовуванні компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <CiCircleChevUp className="text-smouthText w-14 h-14" />
    </motion.button>
  );
};

export default ScrollUpButton;