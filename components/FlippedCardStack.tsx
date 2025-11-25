"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FlippedCardStack() {
  const cards = [
    {
      front: "Research Grants",
      backgroundImage: "/image/Grants.jpg",
      icon: (
        <svg
          className="w-10 h-10"
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
          className="w-12 h-12"
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
      front: "Scientific mission and fellowahip support",
      backgroundImage: "/image/Scientific.png",
      icon: (
        <svg
          className="w-12 h-12"
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
                className="relative bg-white rounded-2xl p-6 w-full max-w-[240px] min-h-[240px] flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background Image - appears on hover */}
                {card.backgroundImage && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={card.backgroundImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EC601B]/80 via-[#EC601B]/70 to-[#EC601B]/90"></div>
                  </div>
                )}

                {/* Icon */}
                <div className="relative z-10 mb-4 text-[#EC601B] group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Text */}
                <h3 className="relative z-10 text-gray-900 group-hover:text-white text-[18px] font-light font-roboto leading-[1.3] transition-colors duration-300">
                  {card.front}
                </h3>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EC601B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
