"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FlippedCardStack() {
  const cards = [
    {
      title: "Research Grants",
    },
    {
      title: "Learning and Development for Professionals",
    },
    {
      title: "Our Publications",
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
              <circle cx="110" cy="40" r="3" fill="#EC601B" opacity="0.4" />
              <circle cx="75" cy="75" r="3" fill="#EC601B" opacity="0.4" />
              <circle cx="40" cy="110" r="3" fill="#EC601B" opacity="0.4" />
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
                stroke="#EC601B"
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
                stroke="#EC601B"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative mx-auto"
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
              <motion.div className="relative rounded-md overflow-hidden bg-[#EC601B] border-2 border-[#EC601B] shadow-xl p-6 flex flex-col justify-between w-[280px] h-[200px]">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                  {/* Title */}
                  <motion.h3
                    className="text-white text-lg font-light leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
