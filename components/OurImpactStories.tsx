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

  const news = [
    {
      image: "/image/news1.jpeg",
      title: "The ICTP SciFabLab Meets Kuwait",
      description:
        "ICTP and the Kuwait Foundation for the Advancement of Sciences (KFAS) have been working together to support scientific development across the Middle East and Northern Africa since 1981. Their collaboration, which so far has focussed on supporting researchers and scholars, has recently expanded to include outreach activities in Kuwait.",
      date: "January 10, 2026",
      link: "#",
    },
    {
      image: "/image/news2.jpeg",
      title:
        "KFAS signs a memorandum of understanding with the Mohammed Bin Rashid Space Centre to enhance cooperation in space sciences.",
      description:
        "The Kuwait Foundation for the Advancement of Sciences (KFAS) announced that it has signed a memorandum of understanding with the Mohammed Bin Rashid Space Centre (MBRSC), aiming to establish a strategic framework for cooperation in the fields of space sciences, scientific research, and the development of national capabilities in this vital sector.",
      date: "December 5, 2024",
      link: "#",
    },
    {
      image: "/image/news3.jpeg",
      title: "Innovation Workshop Success",
      description:
        "Over 200 participants joined our recent workshop on fostering innovation and entrepreneurship in the scientific community.",
      date: "November 28, 2024",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
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
              Latest News
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
              Stay updated with the latest announcements, events, and
              achievements from KFAS.
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {news.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer block"
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
              {/* Image Container */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-[#1D2D44]/20 group-hover:bg-[#1D2D44]/40 transition-colors duration-300"></div>
                {/* Date badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-[#1D2D44]">
                    {item.date}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-lg lg:text-xl font-semibold text-[#1D2D44] mb-3 group-hover:text-[#EC601B] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-[#EC601B] text-sm font-medium">
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
