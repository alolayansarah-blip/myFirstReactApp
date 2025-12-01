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
      front: "Research Grants",
      backgroundImage: "/image/Grants.jpg",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      front: "Learning and Development for Professionals",
      backgroundImage: "/image/Learning.png",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      front: "Our Publications",
      backgroundImage: "/image/Pub.png",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
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
      <div className="relative max-w-5xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 lg:gap-2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer group flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#EC601B] to-[#F7911E] rounded-none p-6 w-full max-w-[300px] min-h-[180px] flex flex-col items-center justify-between text-center shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10"
                whileHover={{
                  scale: 1.05,
                  y: isMobile ? 0 : -12,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                {/* Background Image - appears on hover */}
                {card.backgroundImage && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  >
                    <img
                      src={card.backgroundImage}
                      alt=""
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EC601B]/85 via-[#EC601B]/75 to-[#F7911E]/85"></div>
                  </motion.div>
                )}

                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col items-center justify-center flex-1 space-y-4">
                  {/* Icon with background circle */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/25 group-hover:border-white/30 transition-all duration-300">
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-white text-[15px] font-medium font-roboto leading-[1.4] px-2 group-hover:text-white/95 transition-all duration-300">
                    {card.front}
                  </h3>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
