"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ExploreOurWork() {
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

  const icons = [
    {
      title: "Researcher Profile",
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
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Organization",
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
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Research Outputs",
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
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Project Funded",
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
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Measurable Impact",
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
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Prizes Awarded",
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
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Equipment Sourced",
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
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="explore-our-work"
      className="relative bg-white overflow-hidden pb-0 m-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Beautiful orange gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#EC601B]/12 via-[#F7911E]/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-[450px] h-[450px] bg-gradient-radial from-[#F7911E]/10 via-[#FFAB40]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#F26A21]/8 via-[#EC601B]/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-1/3 top-0 w-[350px] h-[350px] bg-[#EC601B]/9 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-[#FFAB40]/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
          {/* Left Section - Full Height Image */}
          <motion.div
            className="relative w-full lg:w-1/2 h-96 lg:min-h-screen overflow-hidden"
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            animate={
              isVisible
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: -100, scale: 0.95 }
            }
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="/image/back4.webp"
              alt="Explore Our Work"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={
                isVisible
                  ? { scale: 1, opacity: 1 }
                  : { scale: 1.1, opacity: 0 }
              }
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="w-full lg:w-1/2 lg:flex-1 flex flex-col justify-center py-8 lg:py-12 xl:py-16"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 tracking-tight mb-4"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Explore Our Work
            </motion.h2>

            {/* Divider */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isVisible
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#EC601B] to-transparent"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl text-gray-600 font-light mb-12 lg:mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Showcase the key areas of our research ecosystem and the impact we
              generate.
            </motion.p>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {icons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
                  animate={
                    isVisible
                      ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                      : { opacity: 0, y: 50, scale: 0.8, rotate: -5 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 1 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="mb-4 text-[#EC601B] group-hover:text-[#F7911E] transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3
                    className="text-sm lg:text-base font-light text-gray-900 tracking-tight"
                    whileHover={{ color: "#EC601B" }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
