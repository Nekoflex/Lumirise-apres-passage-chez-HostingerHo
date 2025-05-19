import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { id: 1, alt: 'Client Logo 1', name: 'Logo Ipsum 1' },
  { id: 2, alt: 'Client Logo 2', name: 'Logo Ipsum 2' },
  { id: 3, alt: 'Client Logo 3', name: 'Logo Ipsum 3' },
  { id: 4, alt: 'Client Logo 4', name: 'Logo Ipsum 4' },
  { id: 5, alt: 'Client Logo 5', name: 'Logo Ipsum 5' },
  { id: 6, alt: 'Client Logo 6', name: 'Logo Ipsum 6' },
  { id: 7, alt: 'Client Logo 7', name: 'Logo Ipsum 7' },
  { id: 8, alt: 'Client Logo 8', name: 'Logo Ipsum 8' },
];

const duplicatedLogos = [...logos, ...logos]; 

const ClientsSection = () => {
  const singleSetWidthPercentage = 100 * logos.length / duplicatedLogos.length;

  const marqueeVariants = {
    animate: {
      x: ['0%', `-${singleSetWidthPercentage}%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, 
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section id="clients" className="h-[350px] bg-lumirise-color-1 py-12 md:py-16 overflow-hidden relative">
      <div className="container mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-lumirise-color-4 text-3xl font-montserrat font-semibold">Ils nous font confiance</h2>
      </div>
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-lumirise-color-1 to-transparent z-10"></div>
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
          style={{ width: `${100 * duplicatedLogos.length / logos.length}%` }} 
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              style={{ width: `${100 / duplicatedLogos.length}%` }} 
            >
              <span className="text-lumirise-color-5 text-lg italic">{logo.name}</span>
            </div>
          ))}
        </motion.div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-lumirise-color-1 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
