"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const partners = [
    {
      image: "/image/ImpactStory2.png",
      logo: "/image/logo6.png",
      name: "SABAH AL-AHMAD Center for Giftedness and Creativity",
      description:
        "The Sabah Al-Ahmad Center for Giftedness and Creativity (SACGC) is a leading non-profit organization established by the Kuwait Foundation for the Advancement of Sciences (KFAS).",
    },
    {
      image: "/image/sc.jpg",
      logo: "/image/logo3.png",
      name: "The Scientific Center of Kuwait",
      description:
        "The Scientific Center of Kuwait (TSCK) is one of the country's leading educational and cultural landmarks, dedicated to promoting science, environmental awareness, and marine conservation.",
    },
    {
      image: "/image/aspd.jpg",
      logo: "/image/logo4.png",
      name: "Research Center",
      description: "Advanced research and development",
    },
    {
      image: "/image/DDI.jpg",
      logo: "/image/logo5.png",
      name: "Dasman Diabetes Institute",
      description:
        "A leading research and treatment center dedicated to diabetes prevention and care in Kuwait.",
    },
  ];

  const currentBgIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-32 bg-gray-50"
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={partners[currentBgIndex].image}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 transition-colors duration-300 ${
              hoveredIndex !== null ? "bg-white/70" : "bg-white/90"
            }`}
          ></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Our Centers
            </span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#7DC0F1] to-[#EC601B] mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Building the Future Together
          </h2>
          
          <p className="text-lg text-gray-600">
            Explore KFAS centers and partners shaping Kuwait's science, technology, and innovation ecosystem.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
             <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
               className={`relative aspect-square bg-white rounded-2xl p-8 transition-all duration-300 ${
                 activeIndex === index
                   ? index % 2 === 0
                     ? "shadow-xl ring-2 ring-[#7DC0F1] ring-offset-2 ring-offset-gray-50"
                     : "shadow-xl ring-2 ring-[#EC601B] ring-offset-2 ring-offset-gray-50"
                   : "shadow-md hover:shadow-lg"
               }`}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Center Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {partners[activeIndex].name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {partners[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                backgroundColor: activeIndex === index ? (index % 2 === 0 ? '#7DC0F1' : '#EC601B') : undefined
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}