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
      image: "/image/Pub.png",
    },
  ];

  return (
    <section
      className="relative w-full z-20 overflow-hidden bg-white lg:bg-transparent"
      style={{
        marginTop: "20px",
        paddingTop: "30px",
        paddingBottom: "60px",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer group h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{
                  y: isMobile ? 0 : -4,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                {/* Image Background */}
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Orange Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#EC601B]/80 backdrop-blur-sm px-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      {/* Title Text - Uppercase */}
                      <h3 className="text-white text-sm sm:text-base font-semibold uppercase leading-tight flex-1">
                        {card.title}
                      </h3>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
