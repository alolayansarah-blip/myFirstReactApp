"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function OurImpactStories() {
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

  const stories = [
    {
      image: "/image/ImpactStory1.png",
      title: "Breakthrough Research",
      description:
        "Pioneering scientific discoveries that are advancing knowledge and creating new possibilities for the future.",
      link: "#",
    },
    {
      image: "/image/ImpactStory2.png",
      title: "Innovation in Action",
      description:
        "Transforming research into real-world solutions that address critical challenges and drive meaningful change.",
      link: "#",
    },
    {
      image: "/image/ImpactStory3.png",
      title: "Community Impact",
      description:
        "Empowering communities through research initiatives that create lasting positive impact and sustainable development.",
      link: "#",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="our-impact-stories"
      className="relative bg-white pt-24 lg:pt-32 pb-32 lg:pb-40 m-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Beautiful orange gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-radial from-[#F26A21]/12 via-[#EC601B]/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-radial from-[#EC601B]/10 via-[#F7911E]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#F7911E]/8 via-[#FFAB40]/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#EC601B]/9 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#F7911E]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-[350px] h-[350px] bg-[#FFAB40]/7 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-[5%]">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 lg:mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Left Side - Title and Subtitle */}
          <div className="flex-1">
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Work in Action
            </motion.h2>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isVisible
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#F26A21] to-transparent"></div>
            </motion.div>
            <motion.p
              className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Real stories that highlight the outcomes of our research
              investments and initiatives.
            </motion.p>
          </div>

          {/* Right Side - Read More Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#F26A21] text-white font-semibold text-base rounded-lg hover:bg-[#EC601B] transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <svg
                className="w-5 h-5 ml-2"
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
          </motion.div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: 0.7 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
            >
              {/* Large Image Container */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-[#F26A21]/20 group-hover:bg-[#F26A21]/50 transition-colors duration-300"></div>
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                {/* Title and Description overlapping image - positioned at bottom with padding */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-light text-white tracking-tight mb-3 drop-shadow-lg">
                    {story.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/90 leading-relaxed font-light drop-shadow-md">
                    {story.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
