import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setHeaderHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(headerElement);
      return () => resizeObserver.unobserve(headerElement);
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-start bg-lumirise-color-3 text-white"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Optional: Subtle pattern or texture if desired, for now, solid color */}
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 p-6 md:p-10 lg:pl-20 xl:pl-32 max-w-2xl lg:max-w-3xl w-full text-left" 
      >
        <h1 className="font-montserrat font-semibold text-[42px] sm:text-[50px] leading-tight sm:leading-[55px] mb-2">
          L'agence qui vous<br/>accompagne pour
        </h1>
        <p className="font-montserrat font-semibold text-[42px] sm:text-[50px] text-yellow-400 leading-tight sm:leading-[55px] mb-8">
          DÉVELOPPER | COMMUNIQUER | VENDRE
        </p>
        <h2 className="font-poppins font-normal text-[18px] sm:text-[20px] leading-[1.4] mb-10 max-w-lg">
          Webdesign & Stratégie digitale pour les professionnels du Bien-Être : Spas, Studios Yoga & Pilates, et Thérapeutes.
        </h2>
        
        <motion.a
          href="#audit"
          className="bg-lumirise-color-1 text-lumirise-color-4 font-poppins font-medium text-[16px] md:text-[18px] px-[30px] py-[15px] rounded-button transition-colors duration-300 hover:bg-lumirise-color-2 focus:outline-none focus:ring-2 focus:ring-lumirise-color-1 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Votre Audit Offert
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
