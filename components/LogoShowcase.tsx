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
      image: "/image/Impactstory2.png",
      logo: "/image/logo6.png",
      name: "SABAH AL-AHMAD Center for Giftedness and Creativity",
      description:
        "The Sabah Al-Ahmad Center for Giftedness and Creativity (SACGC) is a leading non-profit organization established by the Kuwait Foundation for the Advancement of Sciences (KFAS). The center is dedicated to identifying, nurturing, and supporting gifted and creative individuals in Kuwait, particularly among the youth.",
    },
    {
      image: "/image/ImpactStory2.png",
      logo: "/image/logo3.png",
      name: "Kuwait University",
      description: "Premier higher education institution",
    },
    {
      image: "/image/banner3.webp",
      logo: "/image/logo4.png",
      name: "Research Center",
      description: "Advanced research and development",
    },
    {
      image: "/image/Scientific.png",
      logo: "/image/logo5.png",
      name: "Innovation Hub",
      description: "Fostering innovation and entrepreneurship",
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
      className="relative overflow-hidden py-20 lg:py-28 min-h-[650px]"
    >
      {/* Dynamic Background Image - Changes on Hover */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={partners[currentBgIndex].image}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D2D44]/95 via-[#1D2D44]/85 to-[#1D2D44]/70"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[550px]">
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
                Our Partners
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-montserrat text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Building the <span className="text-[#EC601B]">Future</span>{" "}
              Together
            </h2>

            {/* Active Partner Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBgIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                {/* Logo + Name Row */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                    <img
                      src={partners[currentBgIndex].logo}
                      alt={`${partners[currentBgIndex].name} logo`}
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="font-semibold text-white text-xl">
                    {partners[currentBgIndex].name}
                  </h3>
                </div>
                <p className="text-[#BBDEFB] text-sm">
                  {partners[currentBgIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="relative flex items-center gap-4">
              {/* Left Arrow */}
              <motion.button
                onClick={prevSlide}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#EC601B] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              {/* Images Row - Show 3 at a time */}
              <div className="flex-1 overflow-visible">
                <motion.div
                  className="flex gap-4 pb-10"
                  animate={{ x: `-${activeIndex * (100 / 3)}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {partners.map((partner, index) => (
                    <motion.div
                      key={index}
                      className="relative cursor-pointer group flex-shrink-0"
                      style={{ width: "calc(33.333% - 11px)" }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setActiveIndex(index)}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Image Card */}
                      <div
                        className={`relative h-40 lg:h-48 rounded-xl overflow-hidden transition-all duration-500 ${
                          activeIndex === index || hoveredIndex === index
                            ? "ring-3 ring-[#EC601B] shadow-xl shadow-[#EC601B]/30"
                            : "ring-1 ring-white/20"
                        }`}
                      >
                        {/* Image */}
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className={`w-full h-full object-cover transition-all duration-500 ${
                            activeIndex === index || hoveredIndex === index
                              ? "scale-105"
                              : "scale-100 grayscale-[40%]"
                          }`}
                        />

                        {/* Overlay */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ${
                            activeIndex === index || hoveredIndex === index
                              ? "bg-gradient-to-t from-[#1D2D44]/80 via-transparent to-transparent"
                              : "bg-[#1D2D44]/40"
                          }`}
                        />

                        {/* Active Indicator */}
                        {activeIndex === index && (
                          <motion.div
                            className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EC601B] rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}

                        {/* Bottom accent line */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC601B] to-[#BBDEFB]"
                          initial={{ scaleX: 0 }}
                          animate={{
                            scaleX:
                              activeIndex === index || hoveredIndex === index
                                ? 1
                                : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      </div>

                      {/* Logo Below Image - Centered Circle */}
                      <motion.div
                        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full p-2 flex items-center justify-center transition-all duration-500 z-10 ${
                          activeIndex === index || hoveredIndex === index
                            ? "bg-white shadow-xl shadow-[#EC601B]/30 border-2 border-[#EC601B]"
                            : "bg-white shadow-md border-2 border-gray-200"
                        }`}
                        whileHover={{ scale: 1.15 }}
                        initial={{ y: 0 }}
                        animate={{
                          y:
                            activeIndex === index || hoveredIndex === index
                              ? -3
                              : 0,
                        }}
                      >
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className={`w-full h-full object-contain transition-all duration-500 ${
                            activeIndex === index || hoveredIndex === index
                              ? "opacity-100"
                              : "opacity-60 grayscale"
                          }`}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Arrow */}
              <motion.button
                onClick={nextSlide}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#EC601B] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {partners.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 h-2 bg-[#EC601B]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Hint text */}
            <p className="text-center text-white/40 text-xs mt-3">
              Hover to preview • Click to select • Use arrows to navigate
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
