"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function LatestNews() {
  const [isVisible, setIsVisible] = useState(false);
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
        threshold: 0.1,
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

  const newsItems = [
    {
      date: "March 15, 2024",
      title: "Breakthrough Research Initiative Launched",
      description:
        "We are excited to announce the launch of our new research initiative focused on sustainable energy solutions. This groundbreaking program brings together leading scientists and innovators to address critical environmental challenges.",
      link: "#",
    },
    {
      date: "March 10, 2024",
      title: "International Collaboration Agreement Signed",
      description:
        "The foundation has signed a strategic partnership agreement with leading international research institutions. This collaboration will enhance knowledge exchange and accelerate innovation in key scientific fields.",
      link: "#",
    },
    {
      date: "March 5, 2024",
      title: "Annual Research Excellence Awards Announced",
      description:
        "We are proud to recognize outstanding researchers and their contributions to advancing science and technology. The awards ceremony will celebrate achievements across multiple disciplines and highlight the impact of our research investments.",
      link: "#",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="latest-news"
      className="relative bg-white pt-24 lg:pt-32 pb-32 lg:pb-40 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Beautiful orange gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#EC601B]/10 via-[#F7911E]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-[#FFAB40]/8 via-[#F7911E]/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#F26A21]/7 via-[#EC601B]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#EC601B]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#F7911E]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Latest News
          </motion.h2>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-[#EC601B] to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              className="group flex flex-col h-full"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex flex-col h-full p-6 lg:p-8 border border-gray-200 hover:border-[#EC601B]/30 transition-all duration-300 rounded-lg hover:shadow-lg bg-white/50 backdrop-blur-sm">
                {/* Date */}
                <motion.p
                  className="text-sm text-[#EC601B] font-medium mb-3"
                  whileHover={{ color: "#F7911E" }}
                  transition={{ duration: 0.3 }}
                >
                  {news.date}
                </motion.p>

                {/* Title */}
                <motion.h3
                  className="text-xl lg:text-2xl font-light text-gray-900 tracking-tight mb-4 group-hover:text-[#EC601B] transition-colors duration-300"
                  whileHover={{ color: "#EC601B" }}
                  transition={{ duration: 0.3 }}
                >
                  {news.title}
                </motion.h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                  {news.description}
                </p>

                {/* Read More Button */}
                <motion.a
                  href={news.link}
                  className="inline-flex items-center text-[#EC601B] font-medium text-sm hover:text-[#F7911E] transition-colors duration-300 group/button"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-300"
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
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
