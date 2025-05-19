import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  { id: 1, title: 'Spa Bien-Être Zen', type: 'Site Web & Branding', imageUrl: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, title: 'Studio Yoga Harmonie', type: 'Application Mobile', imageUrl: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, title: 'App Coaching Vitalité', type: 'Plateforme de Coaching', imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, title: 'Dashboard Planning Thérapeute', type: 'Automatisation', imageUrl: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, title: 'Marketplace YogaFlex', type: 'Application mobile', imageUrl: 'https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, title: 'Système de relance automatisée', type: 'Email + SMS', imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 7, title: 'Réservation Spa Paris', type: 'Site WordPress + RDV', imageUrl: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const cardVariants = {
  hover: {
    y: -8,
    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

const PortfolioSection = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8; // Scroll by 80% of visible width
      carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
    }
  };

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Initial check
    }
    window.addEventListener('resize', checkScrollButtons);
    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener('scroll', checkScrollButtons);
      }
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);


  return (
    <section id="portfolio" className="min-h-screen w-screen flex flex-col items-center justify-center bg-lumirise-color-1 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-montserrat font-semibold text-lumirise-color-4 mb-12 md:mb-16">
          Ce que nous avons imaginé
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-lumirise-color-1 to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar space-x-6 md:space-x-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }} // This will be dynamically calculated if needed, but for now, let CSS handle scroll limits
          onDragEnd={checkScrollButtons} // Check buttons after drag
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-montserrat font-semibold text-lumirise-color-4 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base font-poppins text-lumirise-color-5">
                  {project.type}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-lumirise-color-1 to-transparent z-10 pointer-events-none"></div>

        {/* Navigation Arrows */}
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-colors"
            aria-label="Projet précédent"
          >
            <ChevronLeft className="text-lumirise-color-3" size={24} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/70 hover:bg-white rounded-full shadow-md transition-colors"
            aria-label="Projet suivant"
          >
            <ChevronRight className="text-lumirise-color-3" size={24} />
          </button>
        )}
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
