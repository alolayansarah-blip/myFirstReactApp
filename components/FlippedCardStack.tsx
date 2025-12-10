"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlippedCardStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const cards = [
    {
      title: "Research Grants",
      image: "/image/Grants.jpg",
    },
    {
      title: "Learning and Development for Professionals",
      image: "/image/Learning.png",
    },
    {
      title: "Our Publications",
      image: "/image/pub.png",
    },
  ];

  return (
    <section
      className="relative w-full z-20 overflow-hidden bg-[#FAFAFA]"
      style={{
        marginTop: "0px",
        paddingTop: "30px",
        paddingBottom: "60px",
      }}
    >
      {/* Science-themed Background Pattern - Connecting with WhoWeAre */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="molecular-pattern-cards"
              x="0"
              y="0"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              {/* Molecular structure circles - larger */}
              <circle cx="40" cy="40" r="3" fill="#EC601B" opacity="0.4" />
              <circle cx="110" cy="40" r="3" fill="#F7911E" opacity="0.4" />
              <circle cx="75" cy="75" r="3" fill="#EC601B" opacity="0.4" />
              <circle cx="40" cy="110" r="3" fill="#F7911E" opacity="0.4" />
              <circle cx="110" cy="110" r="3" fill="#EC601B" opacity="0.4" />
              {/* Connection lines - thicker */}
              <line
                x1="40"
                y1="40"
                x2="75"
                y2="75"
                stroke="#EC601B"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="110"
                y1="40"
                x2="75"
                y2="75"
                stroke="#F7911E"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="40"
                y1="110"
                x2="75"
                y2="75"
                stroke="#EC601B"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="110"
                y1="110"
                x2="75"
                y2="75"
                stroke="#F7911E"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#molecular-pattern-cards)"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer group h-full"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                whileHover={{
                  y: isMobile ? 0 : -12,
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Image Background */}
                <div className="relative w-full h-72 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient Overlay - Navy to transparent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D2D44]/90 via-[#1D2D44]/40 to-transparent"></div>

                  {/* Light Blue Accent Glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-[#BBDEFB]/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Orange Accent Line */}
                    <motion.div
                      className="w-12 h-1 bg-[#EC601B] rounded-full mb-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    />

                    {/* Title */}
                    <motion.h3
                      className="font-montserrat text-white text-lg font-semibold leading-tight mb-3 group-hover:text-[#BBDEFB] transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      {card.title}
                    </motion.h3>

                    {/* CTA Button */}
                    <motion.div
                      className="flex items-center gap-2 text-sm text-[#BBDEFB] group-hover:text-[#EC601B] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium">Explore</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#EC601B]/50 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D2D44] via-[#EC601B] to-[#BBDEFB] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
