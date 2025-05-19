import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, LayoutDashboard, FileText, ShoppingCart, CalendarCheck, Smartphone, Users, CalendarDays } from 'lucide-react';

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const ServicesSection = () => {
  const servicesList = [
    { icon: <LayoutDashboard size={20} className="text-lumirise-color-3 mr-3" />, text: 'Site vitrine — Présentez vos services avec clarté et impact' },
    { icon: <FileText size={20} className="text-lumirise-color-3 mr-3" />, text: 'Site One-page — L’essentiel en une seule page fluide et efficace' },
    { icon: <ShoppingCart size={20} className="text-lumirise-color-3 mr-3" />, text: 'Site e-commerce — Vendez vos produits ou cartes cadeaux en ligne' },
    { icon: <CalendarCheck size={20} className="text-lumirise-color-3 mr-3" />, text: 'Tunnel de réservation — Simplifiez vos prises de rendez-vous' },
    { icon: <Smartphone size={20} className="text-lumirise-color-3 mr-3" />, text: 'Responsive & mobile-first — Un site qui fonctionne sur tous les écrans' },
  ];

  const websiteContentList = [
    'Stratégie de communication digitale',
    'Charte éditoriale personnalisée',
    'Création de contenu au quotidien',
    'Réponses aux commentaires et modération',
    'Campagnes publicitaires ciblées',
    'Analyse des performances',
  ];

  const automationContentList = [
    'Prise de rendez-vous automatisée (site, réseaux, WhatsApp)',
    'Réponses automatiques et chatbot personnalisé',
    'Rappels, factures et messages envoyés sans intervention',
    'Programmation des posts et contenus sociaux',
    'Outils connectés à votre agenda, paiement, et CRM',
    'Assistant IA pour qualifier les demandes et gagner du temps',
  ];

  const appContentList = [
    { icon: <Smartphone size={20} className="text-lumirise-color-3 mr-3 flex-shrink-0" />, text: 'Application mobile et web avec accès sécurisé' },
    { icon: <Users size={20} className="text-lumirise-color-3 mr-3 flex-shrink-0" />, text: 'Espace client : réservations, historique, préférences' },
    { icon: <CalendarDays size={20} className="text-lumirise-color-3 mr-3 flex-shrink-0" />, text: 'Planning interactif et réservations intégrées' },
    { icon: <LayoutDashboard size={20} className="text-lumirise-color-3 mr-3 flex-shrink-0" />, text: 'Portail admin pour suivre l’activité et gérer les contenus' },
  ];

  return (
    <>
      {/* Original Services Section Content */}
      <section id="services" className="min-h-screen w-screen flex items-center bg-lumirise-color-2 text-lumirise-color-4 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 h-full flex">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center h-full w-full">
            
            <motion.div 
              className="flex flex-col justify-center h-full py-10 md:py-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-lumirise-color-4 mb-6">
                Création de site Internet pour les Spa, studio de yoga & pilates, et thérapeutes.
              </h2>
              <p className="text-lumirise-color-5 mb-8">
                80 % des Français recherchent leur spa, studio de yoga ou thérapeute en ligne.
                Aujourd’hui, le digital est un levier essentiel pour la visibilité et la croissance de votre activité.
                Lumirise vous accompagne dans la création de sites vitrines et e-commerce sur mesure, pensés pour les professionnels du bien-être.
                Nos sites sont optimisés pour le mobile et le référencement naturel, afin de vous aider à attirer, convertir et fidéliser votre clientèle en ligne.
              </p>
              <h3 className="text-lumirise-color-4 mb-6">
                Une vitrine virtuelle pour votre établissement.
              </h3>
              <p className="text-lumirise-color-5 mb-8">
                Au même titre que vous accordez de l’importance à votre espace d’accueil, votre site Internet est la façade virtuelle de votre activité.
                Que vous soyez gérant d'un spa, d'un studio de yoga/pilates ou thérapeute, Lumirise vous fournit un site vitrine ou e-commerce optimisé, référencé et responsive, afin de vous garantir une visibilité sur le web.
                Cet outil stratégique permet de répondre aux besoins d’information et de réservation de vos clients.
              </p>
              <ul className="space-y-3 mb-10">
                {servicesList.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-lumirise-color-5"
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#audit"
                  className="btn-primary text-[16px] px-[30px] py-[15px] text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demander votre audit offert
                </motion.a>
                <motion.a
                  href="#booking"
                  className="font-poppins font-medium text-[16px] px-[30px] py-[15px] rounded-button border border-lumirise-color-3 text-lumirise-color-3 hover:bg-lumirise-color-3 hover:text-white transition-colors duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prendre un RDV
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="hidden md:flex items-center justify-center h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img  
                alt="Visualisation d'un site web Lumirise sur un écran d'ordinateur" 
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Section */}
      <section id="website" className="min-h-screen w-screen flex items-center bg-lumirise-color-1 text-lumirise-color-4 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 h-full flex">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center h-full w-full">
            <motion.div 
              className="flex items-center justify-center h-full py-10 md:py-0 order-first md:order-first"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Équipe de Community Managers Lumirise travaillant ensemble" 
                className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain rounded-lg shadow-xl" 
              />
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center h-full py-10 md:py-0 order-last md:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-lumirise-color-4 mb-6">Une équipe de Community Manager spécialisée dans le bien-être</h2>
              <p className="text-lumirise-color-5 mb-4">Facebook, Instagram, Tripadvisor… Aujourd’hui, 80% des internautes sont inscrits sur un réseau social. Notre équipe prend en charge votre communauté et optimise votre visibilité sur ces nouveaux moteurs de recherche. Nous les utilisons comme de véritables leviers stratégiques.</p>
              <h3 className="text-lumirise-color-4 mb-4">Créer du contenu émotionnel pour valoriser votre univers</h3>
              <p className="text-lumirise-color-5 mb-4">Nous utilisons votre storytelling et l’expérience que vous proposez pour créer du contenu qui suscite l’envie, engage vos clients et incarne votre identité. Notre équipe de community managers, spécialisée dans la communication des spas, studios et thérapeutes, met en scène vos espaces, vos pratiques et vos valeurs à travers un équilibre maîtrisé entre visuels, mots et formats.</p>
              <p className="text-lumirise-color-5 mb-8">Créer une communauté, fidéliser vos clients et vous faire connaître grâce aux réseaux sociaux — c’est là toute notre mission. À vos côtés au quotidien, nous vous proposons une stratégie éditoriale adaptée à votre cible, des contenus réguliers, et une présence active. Nous assurons également la gestion des interactions : réponses aux commentaires, modération, échanges personnalisés — pour renforcer l’engagement et la relation client.</p>
              <ul className="space-y-2 mb-10">
                {websiteContentList.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start text-lumirise-color-5" // items-start for potentially long list items
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <span className="mr-3 text-lumirise-color-3">•</span> {/* Bullet point */}
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#audit"
                  className="btn-primary text-[16px] px-[30px] py-[15px] text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demander votre audit offert
                </motion.a>
                <motion.a
                  href="#booking"
                  className="font-poppins font-medium text-[16px] px-[30px] py-[15px] rounded-button border border-lumirise-color-3 text-lumirise-color-3 hover:bg-lumirise-color-3 hover:text-white transition-colors duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prendre un RDV
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="min-h-screen w-screen flex items-center bg-lumirise-color-2 text-lumirise-color-4 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 h-full flex">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch h-full w-full"> {/* items-stretch */}
            <motion.div 
              className="flex flex-col justify-center h-full py-10 md:py-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-lumirise-color-4 mb-6">Automatiser votre activité pour gagner du temps — sans perdre le lien humain</h1>
              <p className="text-lumirise-color-5 mb-8">Gérer un spa, un cabinet ou un studio prend du temps : messages, réservations, contenus, rappels… Avec Lumirise, vous automatisez ce qui peut l’être de manière fluide, élégante et discrète — pour vous recentrer sur votre métier.</p>
              <h2 className="text-lumirise-color-4 mb-6">Des systèmes connectés, pensés pour les pros du bien-être</h2>
              <p className="text-lumirise-color-5 mb-8">Nos outils travaillent pour vous : ils confirment les rendez-vous, répondent aux messages, publient vos contenus, envoient les rappels et les factures… Tout se connecte naturellement à votre agenda et vos canaux. Simple, rapide, et aligné avec vos besoins.</p>
              <ul className="space-y-2 mb-10">
                {automationContentList.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start text-lumirise-color-5"
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <span className="mr-3 text-lumirise-color-3">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                 <motion.a
                  href="#audit"
                  className="btn-primary text-[16px] px-[30px] py-[15px] text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demander votre audit offert
                </motion.a>
                <motion.a
                  href="#booking"
                  className="font-poppins font-medium text-[16px] px-[30px] py-[15px] rounded-button border border-lumirise-color-3 text-lumirise-color-3 hover:bg-lumirise-color-3 hover:text-white transition-colors duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prendre un RDV
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="hidden md:flex flex-col items-center md:items-end justify-start h-full pt-10 md:pt-20" // Image column
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                src="https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Tableaux de bord d'automatisation Lumirise" 
                className="max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl object-contain shadow-xl h-auto max-h-[60vh]" // Not rounded
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="min-h-screen w-screen flex items-center bg-lumirise-color-1 text-lumirise-color-4 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 h-full flex">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center h-full w-full">
            <motion.div 
              className="flex flex-col justify-center h-full py-10 md:py-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-lumirise-color-4 mb-6">Créer une application à votre image, accessible partout</h1>
              <p className="text-lumirise-color-5 mb-8">Proposer un service fluide, intuitif et toujours disponible, c’est aussi offrir une expérience cohérente avec vos valeurs. Avec Lumirise, vous pouvez proposer à vos clients une application qui prolonge votre savoir-faire — sur mobile, tablette ou ordinateur.</p>
              <h2 className="text-lumirise-color-4 mb-6">Applications web ou mobiles, pensées pour vos besoins</h2>
              <p className="text-lumirise-color-5 mb-8">Réservation de séances, paiement en ligne, catalogue de soins, coaching, contenu exclusif, espace membre ou tchat client : chaque application est conçue pour répondre à un usage réel. Nous construisons des interfaces simples, esthétiques et efficaces — sur-mesure, comme toujours.</p>
              <ul className="space-y-3 mb-10">
                {appContentList.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-lumirise-color-5"
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#audit"
                  className="btn-primary text-[16px] px-[30px] py-[15px] text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demander votre audit offert
                </motion.a>
                <motion.a
                  href="#booking"
                  className="font-poppins font-medium text-[16px] px-[30px] py-[15px] rounded-button border border-lumirise-color-3 text-lumirise-color-3 hover:bg-lumirise-color-3 hover:text-white transition-colors duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prendre un RDV
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center justify-center h-full py-10 md:py-0"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Application Lumirise sur un ordinateur portable" 
                className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain rounded-lg shadow-xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
