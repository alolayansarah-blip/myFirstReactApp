"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroSection } from "@/types";

interface HeroProps extends HeroSection {
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  image,
  video,
  videoPoster,
  className = "",
}: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Video Background */}
      {video && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error("Video error:", e)}
            onLoadedData={() => console.log("Video loaded successfully")}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dynamic gradient overlay that follows mouse */}
          <motion.div
            className="absolute inset-0 opacity-40 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 96, 27, 0.1) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.5) 100%)`,
            }}
          />
          {/* Additional overlay for depth - black overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </motion.div>
      )}

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#EC601B]/20 via-[#F7911E]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#F7911E]/20 via-[#FFAB40]/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-radial from-[#F26A21]/15 via-[#EC601B]/8 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {video && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(particle.id) * 20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* TimelessEn.png - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute left-[5%] top-0 bottom-0 flex items-center justify-start z-10 pointer-events-none"
      >
        <div className="relative -translate-y-4 sm:translate-y-0 md:translate-y-0 lg:translate-y-10">
          <img
            src="/image/TimelessEn.png"
            alt="Timeless Legacy - Innovative Future"
            className="w-auto h-40 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </div>
      </motion.div>

      {/* TimelessAr.png - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute right-[5%] top-0 bottom-0 flex items-center justify-end z-10 pointer-events-none"
      >
        <div className="relative -translate-y-4 sm:translate-y-0 md:translate-y-0 lg:translate-y-10">
          <img
            src="/image/TimelessAr.png"
            alt="إرث راسخ - مستقبل مبتكر"
            className="w-auto h-40 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </div>
      </motion.div>

      {/* Content with Motion Effects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 w-full">
        <div className="flex flex-col items-start justify-center text-left min-h-[80vh]">
          {" "}
          {/* Subtitle with fade-in */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base md:text-lg mb-6 font-light tracking-wider uppercase ${
                video || image || videoPoster
                  ? "text-white/90"
                  : "text-gray-600"
              }`}
            >
              {subtitle}
            </motion.p>
          )}
          {/* Main Title with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 leading-[1.1] tracking-tight relative text-white"
          >
            {typeof title === "string" ? (
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] font-bold"
              >
                {title}
              </motion.span>
            ) : React.isValidElement(title) && title.props?.children ? (
              <div className="flex flex-col items-center gap-2 md:gap-4">
                {React.Children.toArray(title.props.children).map(
                  (child: any, index: number) => {
                    if (typeof child === "string") return child;
                    if (React.isValidElement(child)) {
                      return (
                        <motion.span
                          key={index}
                          initial={{
                            opacity: 0,
                            x: index === 0 ? -100 : 100,
                            rotateY: index === 0 ? -15 : 15,
                          }}
                          animate={{ opacity: 1, x: 0, rotateY: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + index * 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="inline-block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] font-bold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {child}
                        </motion.span>
                      );
                    }
                    return child;
                  }
                )}
              </div>
            ) : (
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] font-bold"
              >
                {title}
              </motion.span>
            )}
          </motion.h1>
          {/* Description with fade-in */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`text-base md:text-lg lg:text-xl mb-12 max-w-3xl leading-relaxed font-light ${
                video || image || videoPoster
                  ? "text-white/90"
                  : "text-gray-600"
              }`}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>

      {/* Scroll Indicator with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span
            className={`text-sm font-light tracking-wider ${
              video || image || videoPoster ? "text-white/70" : "text-gray-500"
            }`}
          >
            Scroll
          </span>
          <motion.div
            className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${
              video || image || videoPoster
                ? "border-white/30"
                : "border-gray-300"
            }`}
          >
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${
                video || image || videoPoster ? "bg-white/70" : "bg-gray-400"
              }`}
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#EC601B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7911E]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
