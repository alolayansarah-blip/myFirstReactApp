"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MinimalCallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animated Heading Component - Scroll-based
  const AnimatedHeading = ({
    text,
    className = "",
  }: {
    text: string;
    className?: string;
  }) => {
    const [visibleLetters, setVisibleLetters] = useState(0);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!headingRef.current || !sectionRef.current) return;

        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress within the section
        // Animation starts when section top enters viewport
        // Animation completes when section top is at 30% of viewport
        const sectionTop = rect.top;
        const triggerPoint = windowHeight * 0.7; // Start animation when section is 70% down viewport
        const endPoint = windowHeight * 0.3; // Complete when section is 30% down viewport

        let progress = 0;
        if (sectionTop <= triggerPoint && sectionTop >= endPoint) {
          // Section is in the animation zone
          progress = 1 - (sectionTop - endPoint) / (triggerPoint - endPoint);
        } else if (sectionTop < endPoint) {
          // Section has passed the animation zone
          progress = 1;
        } else {
          // Section hasn't reached animation zone
          progress = 0;
        }

        const totalLetters = text.length;
        const lettersToShow = Math.round(progress * totalLetters);
        setVisibleLetters(lettersToShow);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      // Initial check - ensure text is visible on load
      setTimeout(() => {
        handleScroll();
        // On mobile, show all letters immediately if section is in view
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setVisibleLetters(text.length);
          }
        }
      }, 100);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [text]);

    const defaultClasses =
      "font-montserrat font-medium leading-[1.2] tracking-tight";
    const combinedClasses = className
      ? `${defaultClasses} ${className}`
      : `text-[40px] ${defaultClasses}`;

    // Split text into words to prevent breaking within words
    const words = text.split(" ");
    let currentIndex = 0;

    return (
      <h2
        ref={headingRef}
        className={`${combinedClasses} break-normal whitespace-normal text-justify`}
        style={{ wordBreak: "normal", overflowWrap: "normal" }}
      >
        {words.map((word, wordIndex) => {
          const wordStartIndex = currentIndex;
          const wordLetters = word.split("");
          const wordEndIndex = currentIndex + wordLetters.length;
          currentIndex = wordEndIndex + 1; // +1 for the space

          return (
            <span
              key={wordIndex}
              className="inline-block whitespace-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              {wordLetters.map((letter, letterIndex) => {
                const globalIndex = wordStartIndex + letterIndex;
                return (
                  <span
                    key={letterIndex}
                    className="inline-block transition-colors duration-200 text-black"
                  >
                    {letter}
                  </span>
                );
              })}
              {wordIndex < words.length - 1 && (
                <span className="inline-block">{"\u00A0"}</span>
              )}
            </span>
          );
        })}
      </h2>
    );
  };

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

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative bg-white overflow-hidden pt-32 sm:pt-24 lg:pt-32 pb-32 lg:pb-40 font-poppins"
      style={{ marginTop: "-20px" }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#EC601B]/5 via-[#F7911E]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#FFAB40]/4 via-[#F7911E]/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] relative z-10 space-y-16 lg:space-y-20">
        {/* First Container: Title (Left) and Description (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Main Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-sm lg:text-base font-medium text-white bg-[#7DC0F1] uppercase tracking-wider mb-0 px-3 py-1.5 rounded inline-block">
                Who We Are
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <AnimatedHeading text="Our vision and mission for the 2025-2026 Strategy:" />
            </motion.div>
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-light">
              The Foundation's efforts toward fostering STI to address national
              challenges first began through the pledge made by the private
              sector shareholding companies to fund the Foundation based on a
              set percentage of their annual profits — currently at one percent
              — as well as through the incorporation of a unique governance
              modality, in which the Board of Directors is chaired and appointed
              by the Amir of the State of Kuwait. Read More...
            </p>
          </motion.div>
        </div>

        {/* Second Container: Image (Left) and Vision/Mission (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with bottom overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/image/who4.png"
                alt="KFAS Building"
                className="w-full h-full object-cover"
              />
              {/* Bottom overlay with color #7DC0F1 */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#7DC0F1]/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right: Vision and Mission with background #7DC0F1 */}
          <div className="space-y-6 bg-[#7DC0F1] rounded-2xl p-8 lg:p-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <AnimatedHeading
                  text="Our Vision"
                  className="text-xl lg:text-2xl font-medium text-white"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-base lg:text-lg text-white/90 leading-relaxed font-light"
              >
                Our vision is to advance science, technology, and innovation for
                a resilient, thriving, and sustainable future.
              </motion.p>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-white/20"></div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <AnimatedHeading
                  text="Our Mission"
                  className="text-xl lg:text-2xl font-medium text-white"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-base lg:text-lg text-white/90 leading-relaxed font-light"
              >
                Our mission is to pursue scientific excellence to tackle
                national challenges through a prominent science, technology, and
                innovation model.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
