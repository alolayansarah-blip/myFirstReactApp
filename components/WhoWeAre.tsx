"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function WhoWeAre() {
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

  // const features = [
  //   {
  //     icon: (
  //       <svg
  //         className="w-6 h-6"
  //         fill="none"
  //         stroke="currentColor"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={1.5}
  //           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  //         />
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={1.5}
  //           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  //         />
  //       </svg>
  //     ),
  //     title: "Vision",
  //     // description:
  //     //   "vision is to advance science, technology, and innovation for a resilient, thriving, and sustainable future.",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         className="w-6 h-6"
  //         fill="none"
  //         stroke="currentColor"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={1.5}
  //           d="M13 10V3L4 14h7v7l9-11h-7z"
  //         />
  //       </svg>
  //     ),
  //     title: "Mission",
  //     // description:
  //     //   "mission is to pursue scientific excellence to tackle national challenges through a prominent science, technology, and innovation model.",
  //   },
  // ];

  const highlights = [
    "Our Vision is to advance science, technology, and innovation for a resilient, thriving, and sustainable future.",
    "Our Mission is to pursue scientific excellence to tackle national challenges through a prominent science, technology, and innovation model.",
  ];

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative bg-[#FAFAFA] overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Stacked Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            <div className="relative h-[500px] sm:h-[550px] lg:h-[600px]">
              {/* Main large image */}
              <div className="absolute top-0 left-0 w-[70%] h-[65%] rounded-lg overflow-hidden shadow-2xl z-10">
                <img
                  src="/image/who2.jpg"
                  alt="KFAS Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second overlapping image */}
              <div className="absolute bottom-0 right-0 w-[65%] h-[55%] rounded-lg overflow-hidden shadow-xl z-20 border-4 border-white">
                <img
                  src="/image/banner3.webp"
                  alt="Scientific Research"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Third small image */}
              <div className="absolute bottom-[15%] left-[5%] w-[40%] h-[35%] rounded-lg overflow-hidden shadow-lg z-30 border-4 border-white">
                <img
                  src="/image/back4.webp"
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#EC601B]/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#1E3A5F]/10 rounded-full blur-2xl z-0"></div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            {/* About Us Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[2px] bg-[#EC601B]"></div>
              <p className="text-sm font-semibold text-[#1E3A5F] uppercase tracking-wider">
                About Us
              </p>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E3A5F] tracking-tight leading-tight">
                Kuwait Foundation for the Advancement of Sciences{" "}
                <span className="text-[#EC601B]">(KFAS)</span>
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
              scientific and technological accomplishments.
            </motion.p>

            {/*  */}

            {/* Highlights List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-3 pt-2"
            >
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EC601B]/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[#EC601B]"
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

            {/* Read More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="pt-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1E3A5F] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#EC601B] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WhoWeAre);
