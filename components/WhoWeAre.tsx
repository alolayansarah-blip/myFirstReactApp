"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MinimalCallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

    // Extract text color from className or default to black
    const textColorClass = className?.includes("text-white")
      ? "text-white"
      : className?.includes("text-")
      ? className.match(/text-\S+/)?.[0] || "text-black"
      : "text-black";

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
                    className={`inline-block transition-colors duration-200 ${textColorClass}`}
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

  // Handle video play/pause events and show first frame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    // Show a visible frame when video is ready
    const handleLoadedData = () => {
      if (video.readyState >= 2 && !isPlaying) {
        video.currentTime = 0.1;
      }
    };

    const handleCanPlay = () => {
      if (video.readyState >= 2 && !isPlaying) {
        video.currentTime = 0.1;
      }
    };

    const handleSeeked = () => {
      // Ensure frame is displayed after seeking
      if (!isPlaying) {
        video.pause();
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("seeked", handleSeeked);

    // If video is already loaded, show a frame
    if (video.readyState >= 2 && !isPlaying) {
      video.currentTime = 0.1;
    }

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [isPlaying]);

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

      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        {/* Two Container Layout: Left (Content) and Right (Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left Container: Content */}
          <div className="space-y-8">
            {/* Who We Are Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-sm lg:text-base font-medium text-[#EC601B] uppercase tracking-wider mb-0">
                Who We Are
              </p>
            </motion.div>

            {/* Main Title */}
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

            {/* Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-[1.125rem] text-gray-700 leading-[2.125rem] font-normal tracking-normal">
                The Foundation's efforts toward fostering STI to address
                national challenges first began through the pledge made by the
                private sector shareholding companies to fund the Foundation
                based on a set percentage of their annual profits — currently at
                one percent — as well as through the incorporation of a unique
                governance modality, in which the Board of Directors is chaired
                and appointed by the Amir of the State of Kuwait.
              </p>
            </motion.div>

            {/* Vision and Mission Icon Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            >
              {/* Vision Icon Box */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-[#EC601B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Vision
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our vision is to advance science, technology, and
                      innovation for a{" "}
                      <span className="font-medium text-[#EC601B]">
                        resilient, thriving, and sustainable future
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Icon Box */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-[#EC601B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mission
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our mission is to pursue{" "}
                      <span className="font-medium text-[#F7911E]">
                        scientific excellence to tackle national challenges
                      </span>{" "}
                      through a prominent science, technology, and innovation
                      model.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Container: Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative group sticky top-24"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <video
                ref={videoRef}
                src="/image/bendoluim.mp4"
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={(e) => {
                  // Seek to a small time value to show an actual frame (not black)
                  const video = e.currentTarget;
                  if (video.readyState >= 2) {
                    video.currentTime = 0.1;
                  }
                }}
                onCanPlay={(e) => {
                  // Ensure frame is displayed when video can play
                  const video = e.currentTarget;
                  if (!isPlaying && video.readyState >= 2) {
                    video.currentTime = 0.1;
                  }
                }}
              />
              {/* Bottom overlay with color #7DC0F1 */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#7DC0F1]/20 to-transparent pointer-events-none"></div>

              {/* Play/Pause Button */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    if (isPlaying) {
                      videoRef.current.pause();
                    } else {
                      videoRef.current.play();
                    }
                    setIsPlaying(!isPlaying);
                  }
                }}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg
                    className="w-12 h-12 md:w-14 md:h-14 text-white drop-shadow-lg transition-transform duration-300 hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-12 h-12 md:w-14 md:h-14 text-white drop-shadow-lg transition-transform duration-300 hover:scale-110 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
