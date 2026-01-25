"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MinimalCounterSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const stats = [
    {
      value: 1112,
      label: "Researchers Profile",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a7.5 7.5 0 0113 0" />
        </svg>
      ),
    },
    {
      value: 1652,
      label: "Projects",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <rect x="3" y="7" width="18" height="12" rx="1" />
          <path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2" />
        </svg>
      ),
    },
    {
      value: 3588,
      label: "Research Outputs",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path d="M13 3v6h6" />
        </svg>
      ),
    },
    {
      value: 97,
      label: "Impact",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      value: 379,
      label: "Prizes",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path d="M8 21h8M12 17v4M17 4H7l1 7h8l1-7z" />
          <path d="M7 4c0-1 1-2 5-2s5 1 5 2" />
          <path d="M17 8h2a2 2 0 012 2v1a4 4 0 01-4 4h-1M7 8H5a2 2 0 00-2 2v1a4 4 0 004 4h1" />
        </svg>
      ),
    },
    {
      value: 916,
      label: "Equipments",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      ),
    },
    {
      value: 111,
      label: "Organization",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
          <path d="M3 21h18" />
          <path d="M9 7h1M9 11h1M9 15h1M14 7h1M14 11h1M14 15h1" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              const stepDuration = duration / steps;

              let currentStep = 0;
              const timer = setInterval(() => {
                currentStep++;
                setCounts((prev) => {
                  const newCounts = [...prev];
                  if (newCounts[index] < stat.value) {
                    newCounts[index] = Math.min(
                      Math.round(newCounts[index] + increment),
                      stat.value
                    );
                  }
                  return newCounts;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = stat.value;
                    return newCounts;
                  });
                }
              }, stepDuration);

              timersRef.current.push(timer);
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      // Clear all timers on unmount
      timersRef.current.forEach(timer => clearInterval(timer));
      timersRef.current = [];
      
      // Unobserve using the saved reference
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]); // Removed stats from dependencies as it's constant

  const formatNumber = (num: number) => {
    return Math.round(num).toLocaleString();
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/image/benduluim.png')] bg-cover bg-center bg-fixed" />
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-[#EC601B]/90" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-montserrat text-2xl sm:text-3xl lg:text-4xl text-white leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]"
          >
            50 Years Journey Supporting
            <span className="block font-bold">
              Science, Technology, and Innovation
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats Row */}
        <div className="relative mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group border border-white/30 px-5 py-5 text-left transition-all duration-300 hover:border-white/60 hover:bg-white/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center text-white/90">
                  {stat.icon}
                </div>
                <div className="mb-3">
                  <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#EAF3FF] via-white to-[#C7E0FF] drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                    {formatNumber(counts[index])}
                  </div>
                  <div className="mt-2 h-px w-10 bg-white/40" />
                </div>
                <p className="text-white/80 text-xs font-medium tracking-wide uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}