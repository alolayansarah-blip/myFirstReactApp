"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);

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

  const highlights = [
    <>
      <span className="font-bold">Our Vision</span> is to advance science,
      technology, and innovation for a resilient, thriving, and sustainable
      future.
    </>,
    <>
      <span className="font-bold">Our Mission</span> is to pursue scientific
      excellence to tackle national challenges through a prominent science,
      technology, and innovation model.
    </>,
  ];

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative bg-white overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-20 sm:pb-28 lg:pb-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Stacked Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isVisible && isMounted
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            <div className="relative h-[500px] sm:h-[550px] lg:h-[600px]">
              {/* Main large image */}
              <div className="absolute top-0 left-0 w-[70%] h-[65%] rounded-lg overflow-hidden shadow-2xl z-10 group">
                <img
                  src="/image/Impactstory1.png"
                  alt="KFAS Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-blue-200/20 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* Second overlapping image */}
              <div className="absolute bottom-0 right-0 w-[65%] h-[55%] rounded-lg overflow-hidden shadow-xl z-20 border-4 border-white group">
                <img
                  src="/image/banner3.webp"
                  alt="Scientific Research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-slate-900/40 to-blue-200/20 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* Third small image */}
              <div className="absolute bottom-[15%] left-[5%] w-[40%] h-[35%] rounded-lg overflow-hidden shadow-lg z-30 border-4 border-white group">
                <img
                  src="/image/who4.png"
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-blue-200/20 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-900/10 rounded-full blur-2xl z-0"></div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            {/* About Us Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible && isMounted
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[2px] bg-orange-600"></div>
              <p className="text-sm font-semibold text-black uppercase tracking-wider">
                About Us
              </p>
            </motion.div>

            {/* Animated KFAS Title */}
            <div className="relative overflow-hidden">
              {/* Collapsed KFAS - shows first, then fades out */}
              {isMounted && (
                <motion.h2
                  initial={{ opacity: 1, scale: 1 }}
                  animate={
                    isVisible
                      ? { opacity: 0, scale: 0.8, height: 0 }
                      : { opacity: 1, scale: 1 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                >
                  <span className="text-orange-600">K</span>
                  <span className="text-orange-600">F</span>
                  <span className="text-orange-600">A</span>
                  <span className="text-orange-600">S</span>
                </motion.h2>
              )}

              {/* Expanded Full Name - fades in after KFAS */}
              {isMounted && (
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black tracking-tight leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <span className="text-orange-600 font-semibold">K</span>
                    uwait{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <span className="text-orange-600 font-semibold">F</span>
                    oundation for the{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 1.7 }}
                  >
                    <span className="text-orange-600 font-semibold">A</span>
                    dvancement of{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <span className="text-orange-600 font-semibold">S</span>
                    ciences
                  </motion.span>
                </motion.h2>
              )}
            </div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible && isMounted
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-base text-gray-600 leading-relaxed"
            >
              The Foundation's efforts toward fostering Science, Technology, and
              Innovation to address national challenges first began through the
              pledge made by the private sector shareholding companies. Today,
              KFAS's impact is prominently embedded within the country's
              scientific and technological accomplishments.{" "}
              <a
                href="/AboutKfas"
                className="inline-flex items-center text-orange-600 font-medium hover:text-orange-500 transition-colors duration-300 group"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </a>
            </motion.p>

            {/* Highlights List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible && isMounted
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-3 pt-2"
            >
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-600/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{highlight}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WhoWeAre);
