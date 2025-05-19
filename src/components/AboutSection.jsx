import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-lumirise-color-2 text-lumirise-color-4">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          <motion.div 
            className="flex flex-col justify-start h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-lumirise-color-4 mb-6">
              Agence digitale 360 pour les professionnels du bien-être
            </h1>
            <h2 className="text-lumirise-color-4 mb-8">
              Une agence de marketing digital sur-mesure pour spas, studios yoga & Pilates, et Thérapeutes.
            </h2>
            <p className="text-lumirise-color-5 mb-6">
              Lumirise accompagne les professionnels du bien-être avec une approche digitale globale, pensée pour durer. Sites web, identité visuelle, référencement, automatisation, réseaux sociaux ou applications : nous créons des outils élégants, efficaces et alignés avec votre métier, pour faire évoluer votre présence en ligne en profondeur.
            </p>
            <p className="text-lumirise-color-5 mb-6">
              Notre intervention ne s'arrête pas au design. Nous vous aidons à structurer une stratégie digitale claire et cohérente : visibilité renforcée, navigation fluide, contenu engageant, outils connectés et gain de temps au quotidien. Tout est pensé pour servir vos priorités, avec simplicité et exigence.
            </p>
            <p className="text-lumirise-color-5">
              Chaque collaboration est une immersion dans votre univers. Nous traduisons votre positionnement en dispositifs concrets, durables et à votre image. Lumirise place l’écoute, la précision et la cohérence au centre de sa méthode — pour des résultats solides, sur-mesure et sans surcharge inutile.
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center h-full md:justify-end" // md:justify-end to push it to the right half of its column
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full md:w-auto flex justify-center md:pl-[25%]"> {/* md:pl-[25%] to center in right half */}
              <img  
                alt="Logo Lumirise - Agence Digitale Bien-être" 
                className="max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
               src="https://images.unsplash.com/photo-1682159775650-136496bad5b9" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
