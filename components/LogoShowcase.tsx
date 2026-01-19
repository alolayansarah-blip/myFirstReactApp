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
        "The Sabah Al-Ahmad Center for Giftedness and Creativity (SACGC) is a leading non-profit organization established by the Kuwait Foundation for the Advancement of Sciences (KFAS). The center is dedicated to identifying, nurturing, and supporting gifted and creative individuals in Kuwait, particularly among the youth.",
    },
    {
      image: "/image/sc.jpg",
      logo: "/image/logo3.png",
      name: "The Scientific Center of Kuwait",
      description:
        "The Scientific Center of Kuwait (TSCK) is one of the country’s leading educational and cultural landmarks, dedicated to promoting science, environmental awareness, and marine conservation. Located on the waterfront in Salmiya, the center features a world-class aquarium showcasing native marine life from the Arabian Gulf, an IMAX® theater that presents educational and documentary films, and the Discovery Place, an interactive zone designed to engage children with hands-on science activities.",
    },
    {
      image: "/image/banner3.webp",
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

  // Get the current background image (hovered takes priority, then active)
  const currentBgIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28 min-h-[650px] bg-[#1D2D44]"
    >
      {/* Dynamic Background Image - Changes on Hover */}
      <AnimatePresence>
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={partners[currentBgIndex].image}
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102033]/95 via-[#1D2D44]/85 to-[#1D2D44]/70"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center min-h-[550px]">
          {/* Left Side - Title & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#EC601B]"></div>
              <span className="text-sm font-semibold text-[#BBDEFB] uppercase tracking-wider">
                Our Centers
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-montserrat text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Building the <span className="text-[#EC601B]">Future</span>{" "}
              Together
            </h2>
            <p className="text-white/75 text-base lg:text-lg max-w-xl leading-relaxed">
              Explore KFAS centers and partners shaping Kuwait’s science,
              technology, and innovation ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-2 rounded-full bg-white text-[#1D2D44] text-sm font-semibold hover:bg-white/90 transition-colors">
                Explore Centers
              </button>
              <button className="px-5 py-2 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                View Partnerships
              </button>
            </div>
          </motion.div>

          {/* Right Side - Logos & Image Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* 4 Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white/20 shadow-xl shadow-[#EC601B]/30 border-2 border-[#EC601B]"
                      : "bg-white/10 border-2 border-white/20 hover:bg-white/15"
                  }`}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Logo */}
                  <motion.div
                    className="aspect-square flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>

                  {/* Active Indicator */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-[#EC601B] rounded-full border-2 border-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Hint Text */}
            <p className="text-center text-white/50 text-xs mt-4">
              Tap a logo to highlight the center
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
