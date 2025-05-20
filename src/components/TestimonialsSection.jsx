import React from 'react';

const TestimonialCard = ({ content, name, location, className }) => (
  <div className={`mb-8 md:mb-12 ${className}`}>
    <p className="text-lumirise-color-4 text-base leading-relaxed">
      {content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
    <p className="text-lumirise-color-5 mt-4 text-sm">{name}</p>
    <p className="text-lumirise-color-5 text-sm">{location}</p>
  </div>
);

const TestimonialsSection = () => {
  const testimonialsCol1 = [
    {
      content: "L’équipe super sympa de Lumirise m’a aidé à refaire mon site web.\nIls sont pros, créatifs et toujours à l’écoute.\nGrâce à eux, mon projet a gagné en visibilité et en impact — sans que j’aie à courir après chaque détail.",
      name: "Audrey & Richard",
      location: "Spa & soin – Paris",
    },
    {
      content: "Je n’avais plus le temps de tout gérer.\nLeur solution m’a libéré l’esprit, tout en rendant mon activité plus claire pour mes clients.",
      name: "Claire D.",
      location: "Shiatsu & massages – Bordeaux",
    },
    {
      content: "Simple, efficace, rassurant.\nJ’ai adoré leur façon d’écouter avant de proposer.",
      name: "Julie S.",
      location: "Réflexologue – Annecy",
    },
  ];

  const testimonialsCol3 = [
    {
      content: "Ils m’ont aidée à automatiser mes RDV sans perdre le lien humain.\nMerci encore.",
      name: "Stéphanie T.",
      location: "Studio Yoga – Lyon",
    },
    {
      content: "On a refait tout le parcours client ensemble.\nAujourd’hui mes réservations sont plus fluides, et je gagne un temps fou chaque semaine.",
      name: "Olivier N.",
      location: "Naturopathe – Lille",
    },
    {
      content: "Avant Lumirise, mon site était joli mais il ne servait à rien.\nAujourd’hui, mes clientes trouvent les infos facilement, réservent en ligne et me laissent de supers retours.\nJe me sens enfin alignée avec ce que je propose.",
      name: "Laura M.",
      location: "Coach bien-être – Marseille",
    },
  ];

  return (
    <section id="testimonials" className="bg-lumirise-color-1 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative">
        {/* Decorative Quotes */}
        <span 
          aria-hidden="true" 
          className="absolute top-0 left-0 text-[6rem] font-serif text-[#54756B] opacity-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/4 select-none"
          style={{ lineHeight: '1' }}
        >
          “
        </span>
        <span 
          aria-hidden="true" 
          className="absolute bottom-0 right-0 text-[6rem] font-serif text-[#54756B] opacity-30 pointer-events-none transform translate-x-1/2 translate-y-1/4 select-none"
          style={{ lineHeight: '1' }}
        >
          ”
        </span>

        <div className="grid grid-cols-1 md:grid-cols-[28%_44%_28%] gap-x-16"> {/* gap-x-16 for 4rem gap */}
          {/* Column 1: Testimonials */}
          <div className="flex flex-col justify-start pt-8 md:pt-0">
            {testimonialsCol1.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                location={testimonial.location}
              />
            ))}
          </div>

          {/* Column 2: Editorial Content */}
          <div className="border border-[#E0E0E0] p-8 md:p-10 lg:p-12 my-8 md:my-0 flex flex-col">
            <h1 className="text-lumirise-color-4 font-semibold mb-6 text-center md:text-left">
              Pourquoi ils ont choisi Lumirise
            </h1>
            <h2 className="text-lumirise-color-4 font-normal mb-4 text-center md:text-left">
              Créer, accueillir, accompagner...
            </h2>
            <p className="text-[#54756B] font-semibold mb-6 text-center md:text-left">
              Quand on consacre son énergie aux autres, il reste peu de place pour soi.
            </p>
            <p className="text-lumirise-color-5 mb-6 text-left">
              Encore moins pour gérer un site, penser à ses réseaux, automatiser ce qui fatigue à force de le répéter. Souvent, ils sont arrivés chez nous fatigués, débordés, parfois même découragés. Le téléphone qui ne sonne plus. Les mails qui s’accumulent. <strong className="font-bold text-[#54756B]">Les rendez-vous qui se perdent et chiffre d’affaire qui baisse.</strong>
            </p>
            <p className="text-lumirise-color-5 mb-6 text-left">
              <strong className="font-bold text-[#54756B]">Et puis, on a écouté.</strong>
              <br />
              On a pris le temps de comprendre.
              <br />
              On a redonné du souffle à leur communication, de la fluidité à leur organisation, de la clarté à leur image.
            </p>
            <p className="text-lumirise-color-5 text-left">
              Aujourd’hui, ils ne passent plus leurs soirées à tout gérer.
              <br />
              Ils attirent naturellement. Ils communiquent sans forcer.
              <br />
              Leur digital travaille pour eux — pas contre eux.
              <br />
              Ce qui suit, ce ne sont pas des témoignages publicitaires.
              <br />
              Ce sont des paroles vraies, nées d’un avant difficile, et d’un après plus léger.
            </p>
          </div>

          {/* Column 3: Testimonials */}
          <div className="flex flex-col justify-start pt-8 md:pt-0">
            {testimonialsCol3.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
