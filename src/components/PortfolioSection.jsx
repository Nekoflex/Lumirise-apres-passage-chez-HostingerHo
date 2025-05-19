import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialProjectsData = [
  { id: 1, title: 'Spa Bien-Être Zen', type: 'Site Web & Community management', imageUrl: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, title: 'Studio Yoga Harmonie', type: 'Application Mobile', imageUrl: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, title: 'App Coaching Vitalité', type: 'Plateforme de Coaching', imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, title: 'Dashboard Planning Thérapeute', type: 'Automatisation', imageUrl: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const PortfolioSection = () => {
  const [flexValues, setFlexValues] = useState([1, 3, 1, 1]); // Card 2 (index 1) is open by default

  const handleMouseEnter = (hoveredIndex) => {
    if (hoveredIndex === 1) { // Hovering Card 2 (already default open)
      // Ensure it's in its fully open state if somehow it wasn't
      if (flexValues[1] !== 3) {
        setFlexValues([1, 3, 1, 1]);
      }
      return;
    }

    const newFlexValues = [0.5, 2, 0.5, 0.5]; // Base: Card 2 is 2, others are 0.5
    newFlexValues[hoveredIndex] = 2; // Hovered card is 2
    setFlexValues(newFlexValues);
  };

  const handleMouseLeave = () => {
    setFlexValues([1, 3, 1, 1]); // Reset to initial state
  };

  return (
    <section id="portfolio" className="min-h-screen w-screen flex flex-col items-center justify-center bg-lumirise-color-1 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-montserrat font-semibold text-lumirise-color-4 mb-12 md:mb-16">
          Ce que nous avons imaginé
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div 
          className="flex h-[60vh] md:h-[70vh] lg:h-[500px] gap-2"
          onMouseLeave={handleMouseLeave}
        >
          {initialProjectsData.map((project, index) => {
            const isCardOpen = flexValues[index] >= 2;
            const card2ImageTransform = index === 1 && flexValues[1] < 3 
              ? 'scale(0.9) translate(-5%, -5%)' // Diagonal zoom-out for card 2 image
              : 'scale(1) translate(0,0)';

            return (
              <div
                key={project.id}
                className="h-full relative overflow-hidden cursor-pointer group"
                style={{ 
                  flexGrow: flexValues[index],
                  flexShrink: 0, // Prevent shrinking beyond flex-basis
                  flexBasis: '0%', // Allow flex-grow to distribute space
                  transition: 'all 0.5s ease' // Combined transition for flex properties
                }}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  style={{
                    transformOrigin: 'center center', // Or adjust for specific diagonal effect, e.g. 'top left' or 'bottom right'
                    transform: card2ImageTransform,
                    transition: 'transform 0.5s ease', // Image transform transition
                  }}
                />
                <div 
                  className="absolute left-0 w-full h-full pointer-events-none"
                  style={{
                    top: isCardOpen ? '0%' : '100%',
                    opacity: isCardOpen ? 1 : 0,
                    background: 'linear-gradient(0deg, #000000 0%, rgba(0,0,0,0.85) 30%, rgba(255,255,255,0) 60%)', // Adjusted gradient for better text visibility
                    transition: 'all 0.4s ease',
                  }}
                >
                  {isCardOpen && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Delay to sync with overlay
                    >
                      <h3 className="text-base md:text-lg font-montserrat font-semibold mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm font-poppins leading-tight">
                        {project.type}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
