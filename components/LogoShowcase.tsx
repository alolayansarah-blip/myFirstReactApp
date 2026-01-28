"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoShowcase() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [imageErrors, setImageErrors] = React.useState<Set<string>>(new Set());

  const partners = [
    {
      image: "/image/ImpactStory2.png",
      logo: "/image/logo6.png",
      name: "SABAH AL-AHMAD Center for Giftedness and Creativity",
      link: "https://linktr.ee/sacgc_kw",
      description:
        "Sabah Al-Ahmad Center for Giftedness and Creativity (SACGC) is a center under the Kuwait Foundation for the Advancement of Sciences dedicated to nurturing talent and creativity in young individuals. SACGC provides programs, competitions, and enrichment opportunities that support skill development, academic excellence, and innovation for students in Kuwait.",
    },
    {
      image: "/image/sc.jpg",
      logo: "/image/logo3.png",
      name: "The Scientific Center of Kuwait",
      link:"https://tsck.org.kw/",
      description:
        "The Scientific Center of Kuwait (TSCK), is a leading science and discovery destination. Through interactive exhibits, immersive experiences, and educational programs, TSCK inspires curiosity, promotes scientific learning, and engages visitors of all ages.",
    },
    {
      image: "/image/aspd.jpg",
      logo: "/image/logo4.png",
      name: "Advancement of Sciences Publishing and Distribution Co.",
      link:"https://www.aspdkw.com/",
      description: "Advanced research and development center focused on innovation and scientific excellence.",
    },
    {
      image: "/image/DDI.jpg",
      logo: "/image/logo5.png",
      name: "Dasman Diabetes Institute",
      link:"https://www.dasmaninstitute.org/",
      description:
        "At Dasman Diabetes Institute (DDI), they aim to benefit their community by developing research projects, educational programs, and awareness-raising initiatives that improve society and make a difference in the healthcare system.",
    },
  ];

  const handleImageError = (imagePath: string) => {
    setImageErrors((prev) => new Set(prev).add(imagePath));
  };

  const handleCardInteraction = (index: number) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const currentBgIndex = hoveredIndex ?? 0;

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background tint for section on hover */}
      <AnimatePresence>
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-white/75" />
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-300 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Text - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 text-left mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#EC601B]">
            Our Centers
          </span>
          <div className="h-0.5 w-16 bg-[#EC601B] mt-3 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Build the Future
            <span className="block">Together</span>
          </h2>
        </motion.div>

        {/* Logos in one line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {partners.map((partner, index) => {
            const cardContent = (
              <>
                {/* Logo */}
                {!imageErrors.has(partner.logo) ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    onError={() => handleImageError(partner.logo)}
                    className="w-full h-32 md:h-36 lg:h-40 object-contain transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-32 md:h-36 lg:h-40 flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-gray-400 text-xs">Logo unavailable</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Background image */}
                  {!imageErrors.has(partner.image) ? (
                    <img
                      src={partner.image}
                      alt={`${partner.name} background`}
                      onError={() => handleImageError(partner.image)}
                      className="absolute inset-0 w-full h-full object-cover scale-[1.08] group-hover:scale-100 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7DC0F1] to-[#5BA3D8]" />
                  )}

                  {/* Pretty overlay: soft gradient + tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7DC0F1]/85 via-[#7DC0F1]/70 to-[#5BA3D8]/80" />
                  <div className="absolute inset-0 bg-white/10" />

                  {/* Text content */}
                  <div className="relative z-10 p-4 flex items-center justify-center h-full">
                    <h4 className="text-sm md:text-base font-semibold text-white text-center leading-snug">
                      {partner.name}
                    </h4>
                  </div>
                </div>
              </>
            );

            const commonProps = {
              onMouseEnter: () => handleMouseEnter(index),
              onMouseLeave: handleMouseLeave,
              onClick: () => handleCardInteraction(index),
              onKeyDown: (e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardInteraction(index);
                }
              },
              tabIndex: 0,
              role: "button" as const,
              "aria-label": `View details about ${partner.name}`,
              "aria-expanded": hoveredIndex === index,
              className:
                "group relative bg-white backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-md hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#EC601B]/30 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200",
            };

            return partner.link ? (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                {...commonProps}
              >
                {cardContent}
              </a>
            ) : (
              <div key={index} {...commonProps}>
                {cardContent}
              </div>
            );
          })}
        </motion.div>

        {/* Description below grid - Fixed height container to prevent layout shift */}
        <div className="mt-6 h-[120px] md:h-[80px] lg:h-[64px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.p
                key={hoveredIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-center text-gray-700 max-w-2xl mx-auto text-sm md:text-base px-4 line-clamp-4 md:line-clamp-3"
              >
                {partners[hoveredIndex].description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}