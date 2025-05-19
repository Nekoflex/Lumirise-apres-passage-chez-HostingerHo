import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const auditBlocksData = [
  {
    id: 'website-audit',
    title: 'Votre site web vous freine plus qu’il ne vous aide ?',
    paragraph: 'Nous analysons votre site dans ses moindres détails : visibilité sur Google, vitesse, mobile, qualité des appels à l’action.',
    listItems: [
      'Pourquoi les visiteurs ne réservent-ils pas ?',
      'Est-il trop lent, trop vieux, mal agencé ?',
      'Est-il adapté aux mobiles ?',
    ],
    objective: 'Comprendre ce qui freine vos réservations — et comment y remédier.',
    ctaText: 'Auditer mon site web',
    delay: 0.1,
    offsetY: 'md:translate-y-0', // Base alignment for the first block
  },
  {
    id: 'organization-audit',
    title: 'Trop de temps perdu sur des tâches répétitives et vous n’arrivez plus à prendre du temps pour vous ?',
    paragraph: 'Nous identifions les actions que vous pouvez automatiser sans changer vos habitudes, pour vous recentrer sur vous, votre famille et l’essentiel de votre métier.',
    listItems: [
      'Quelles tâches peuvent être déléguées à un système ?',
      'Quels outils gagneraient à être connectés ?',
      'Combien d’heures par semaine pouvez-vous récupérer ?',
    ],
    objective: 'Gagner du temps, fluidifier vos process, alléger votre charge mentale.',
    ctaText: 'Auditer mon organisation',
    delay: 0.3,
    offsetY: 'md:translate-y-8', // Vertical offset for the middle block
  },
  {
    id: 'social-media-audit',
    title: 'Peu de vues, de likes et d’abonnés. Votre communication en ligne manque d’impact.',
    paragraph: 'Nous passons en revue votre présence sur Instagram, Facebook, Google… et vous aidons à mieux engager votre audience, à captiver l’attention et à convertir vos abonnés.',
    listItems: [
      'Pourquoi vos publications génèrent peu d’engagement ?',
      'Votre message est-il clair et cohérent ?',
      'Utilisez-vous les bons formats et la bonne fréquence ?',
    ],
    objective: 'Optimiser visibilité, engagement et stratégie de contenu.',
    ctaText: 'Auditer mes réseaux sociaux',
    delay: 0.5,
    offsetY: 'md:translate-y-0', // Base alignment for the third block
  },
];

const blockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AuditSection = () => {
  return (
    <section id="audit" className="min-h-screen w-screen flex items-center justify-center bg-lumirise-color-2 p-6 md:p-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {auditBlocksData.map((block) => (
            <motion.div
              key={block.id}
              className={`bg-white rounded-lg shadow-xl p-8 flex flex-col h-full border-dotted border border-lumirise-color-3/30 ${block.offsetY}`}
              custom={block.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={blockVariants}
            >
              <h3 className="text-lumirise-color-4 font-montserrat font-semibold text-2xl mb-4">{block.title}</h3>
              <p className="text-lumirise-color-5 font-poppins text-base mb-6 flex-grow">{block.paragraph}</p>
              <ul className="space-y-2 mb-6 text-lumirise-color-5 font-poppins text-sm">
                {block.listItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-lumirise-color-3 mr-2 text-lg leading-tight pt-px select-none">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lumirise-color-4 font-poppins font-medium text-base mb-8">{block.objective}</p>
              <Button
                variant="outline"
                className="mt-auto w-full border-lumirise-color-3 text-lumirise-color-3 hover:bg-lumirise-color-3 hover:text-white transition-colors duration-300 py-3"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {block.ctaText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
