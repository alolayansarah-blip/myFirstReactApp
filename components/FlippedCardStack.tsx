"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FlippedCardStack() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const cards = [
    {
      color: "#EC601B",
      front: "Card 1",
      back: "Content for Card 1",
    },
    {
      color: "#F7911E",
      front: "Card 2",
      back: "Content for Card 2",
    },
    {
      color: "#FFAB40",
      front: "Card 3",
      back: "Content for Card 3",
    },
  ];

  return (
    <section
      className="relative w-full z-20 overflow-hidden bg-white lg:bg-transparent"
      style={{
        marginTop: "-200px",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      {/* Beautiful orange gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#EC601B]/12 via-[#F7911E]/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#FFAB40]/10 via-[#F7911E]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-gradient-radial from-[#F7911E]/9 via-[#EC601B]/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#F26A21]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-[#EC601B]/7 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-[5%] z-10 py-4 sm:py-6 lg:py-8">
        <div
          className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 lg:gap-4"
          style={{ minHeight: "280px", perspective: "1000px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer w-full sm:w-auto"
              style={{
                zIndex: flippedIndex === index ? 30 : 20 - index,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className="relative w-full max-w-[280px] sm:w-56 md:w-64 h-40 sm:h-44 md:h-48 shadow-2xl mx-auto"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: flippedIndex === index ? 180 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold"
                  style={{
                    backgroundColor: card.color,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  {card.front}
                </div>
                {/* Back of card */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-white text-base p-4"
                  style={{
                    backgroundColor: card.color,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {card.back}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
