import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isMobileMenuOpen]); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.style.paddingTop = `${headerHeight}px`;
    }
  }, [headerHeight]);


  const navLinks = [
    { href: '#services', label: 'Services', special: true },
    { href: '#portfolio', label: 'Réalisations' },
    { href: '#about', label: 'L’Agence' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const atTop = !isScrolled && !isMobileMenuOpen;

  const logoColor = atTop ? 'text-white' : 'text-lumirise-color-4';
  const mobileMenuIconColor = atTop ? 'text-white' : 'text-lumirise-color-4';
  
  let headerBgClass = 'bg-transparent';
  if (isMobileMenuOpen || isScrolled) {
    headerBgClass = 'bg-lumirise-color-1 shadow-md';
  }


  return (
    <motion.header
      id="header"
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto flex flex-col items-center pt-4 pb-2 md:pt-6 md:pb-3">
        <a href="#hero" className={`text-3xl md:text-4xl font-montserrat font-semibold ${logoColor} transition-colors duration-300 mb-3 md:mb-4`}>
          LUMIRISE
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-poppins font-medium text-[15px] transition-colors duration-300
                          ${atTop ? (link.special ? 'text-yellow-400' : 'text-white hover:text-yellow-400')
                                  : `text-lumirise-color-4 hover:text-lumirise-color-3`}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#booking"
             className={`font-poppins font-medium text-[15px] px-[20px] py-[10px] rounded-button border transition-all duration-300
                        ${atTop ? 'bg-transparent border-white text-white hover:bg-white hover:text-lumirise-color-3'
                                : 'bg-lumirise-color-3 border-lumirise-color-3 text-white hover:bg-opacity-80 hover:border-opacity-80'}`}
          >
            Prendre RDV
          </a>
        </nav>
        <div className="md:hidden absolute top-4 right-6 sm:top-6 sm:right-10">
          <button onClick={toggleMobileMenu} className={`${mobileMenuIconColor} focus:outline-none transition-colors duration-300 z-50 relative`}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-lumirise-color-1 shadow-lg py-4"
            style={{ backgroundColor: 'rgba(248, 248, 248, 1)'}}
          >
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                   className={`nav-link text-lg ${link.special && atTop ? 'text-yellow-400' : 'text-lumirise-color-4'} hover:text-lumirise-color-3`}
                   onClick={toggleMobileMenu}>
                  {link.label}
                </a>
              ))}
              <a href="#booking" className="btn-primary-header text-lg mt-2 bg-lumirise-color-3 text-white px-[20px] py-[10px]" onClick={toggleMobileMenu}>
                Prendre RDV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
