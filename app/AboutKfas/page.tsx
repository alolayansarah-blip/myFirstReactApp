"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutKfasPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header logo="/image/logo2.png" forceWhiteBackground={true} />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section with Banner */}
        <section className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/image/AboutKfasBanner.png"
              alt="Who We Are"
              className="w-full h-full object-cover"
            />
            {/* Lighter overlay */}
            <div className="absolute inset-0 bg-[#1D2D44]/60"></div>
          </div>

          {/* Subtle Corner Lines - More Transparent */}
          <div className="absolute top-12 left-12 w-16 h-16 border-l border-t border-white/20 z-20"></div>
          <div className="absolute top-12 right-12 w-16 h-16 border-r border-t border-white/20 z-20"></div>
          <div className="absolute bottom-28 left-12 w-16 h-16 border-l border-b border-white/20 z-20"></div>
          <div className="absolute bottom-28 right-12 w-16 h-16 border-r border-b border-white/20 z-20"></div>

          {/* Subtle gradient glow */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1D2D44]/30 to-transparent z-10"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Small decorative line above title */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[1px] bg-white/40 mx-auto mb-6"
              ></motion.div>

              <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="text-[#EC601B]">K</span>
                <span className="text-[#EC601B]">F</span>
                <span className="text-[#EC601B]">A</span>
                <span className="text-[#EC601B]">S</span>
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Kuwait Foundation for the Advancement of Sciences
              </p>

              {/* Small decorative line below subtitle */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[1px] bg-white/40 mx-auto mt-6"
              ></motion.div>
            </motion.div>
          </div>

          {/* Simple curved bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* About KFAS Text Sections - Minimal Design */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-12">
              {/* First Text Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-2 border-[#EC601B] pl-8"
              >
                <p className="text-gray-600 leading-[1.9] text-base">
                  The Kuwait Foundation for the Advancement of Sciences (KFAS)
                  is a private, non-profit organization established in December
                  1976. Through cooperation with local and international
                  partners, KFAS funds and implements research, training, and
                  development programs that address Kuwait's national priorities
                  in the fields of science, technology, and innovation, as well
                  as operating specialized scientific centers. The programs
                  target various segments within the innovation ecosystem. KFAS
                  also actively engages the wider public to generate awareness
                  and interest in the fields of science and technology. KFAS
                  builds alliances across academia, government, the private
                  sector, non-government organizations, and the broader
                  community to diffuse knowledge and accelerate progress.
                </p>
              </motion.div>

              {/* Second Text Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-l-2 border-[#EC601B] pl-8"
              >
                <p className="text-gray-600 leading-[1.9] text-base">
                  Through its prestigious prizes, KFAS not only celebrates the
                  remarkable contributions of Kuwaiti and Arab researchers but
                  also reinforces its commitment to advancing science and
                  technology. These prizes underscore KFAS's role in rewarding
                  excellence, validating impactful research, inspiring future
                  generations, and encouraging further contributions to Kuwait's
                  scientific and technological landscape. KFAS is recognized as
                  a leading player in Kuwait's scientific and technological
                  accomplishments and advancements. The governance system of
                  KFAS is structured to ensure effective oversight and
                  management of its activities. It includes a Board of
                  Directors, chaired and appointed by H.H. The Amir of the State
                  of Kuwait, that is responsible for strategic decision-making,
                  executive board committees focused on specific areas, and an
                  executive management that handles day-to-day operations.
                </p>
              </motion.div>

              {/* Vision and Mission Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-8 text-center"
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EC601B]"
                >
                  Our Vision and Mission
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="h-1 bg-[#EC601B] mx-auto mt-6 rounded-full"
                ></motion.div>
              </motion.div>

              {/* Timeline Display */}
              <div className="relative pt-8">
                {/* Timeline Line */}
                <div className="absolute left-6 top-8 bottom-0 w-[2px] bg-[#EC601B]"></div>

                {/* Vision - Timeline Item */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative flex gap-8 pb-12"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#EC601B] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
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
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-montserrat text-xl font-bold text-[#EC601B] mb-3">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To advance science, technology, and innovation for a
                      resilient, thriving, and sustainable future.
                    </p>
                  </div>
                </motion.div>

                {/* Mission - Timeline Item */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative flex gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#EC601B] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
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
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-montserrat text-xl font-bold text-[#EC601B] mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To pursue scientific excellence to tackle national
                      challenges through a prominent science, technology, and
                      innovation model.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Strategic Direction Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12"
              >
                <p className="text-gray-600 leading-[1.9] text-base mb-6">
                  Driving our work is the premise that science creates
                  knowledge, technology accelerates progress, and innovation
                  shapes transformative solutions. During 2025–2029, we aim to
                  build on our legacy and our strengths by continuing to support
                  exemplary programs and projects, while also accelerating our
                  support for emerging scientific areas that call for new
                  research, novel uses of technology, and expanded horizons in
                  knowledge transfers and human capacities.
                </p>
                <p className="text-gray-600 leading-[1.9] text-base mb-6">
                  All of our work will be aligned with our three pillars—robust
                  research ecosystem, viable innovation, and human ingenuity—and
                  each pillar will complement and produce synergies with the
                  others. We will focus on elevating research efficacy,
                  encouraging transdisciplinary research, and informing
                  science-based policy. We will also focus on promoting science,
                  technology, and innovation (STI) transfers and contributing to
                  the growth of the innovation ecosystem. And we will focus on
                  diffusing knowledge and developing human capabilities and
                  potential.
                </p>
                <p className="text-gray-600 leading-[1.9] text-base mb-6">
                  We will pursue priority areas that address issues of
                  importance to Kuwait, particularly in the areas of
                  environment, energy, health, STEAM education, water and food
                  security, and future economies, while maintaining a vigilant
                  awareness of emerging trends and initiatives outside these
                  areas that could bring benefit to the nation.
                </p>
                <p className="text-gray-600 leading-[1.9] text-base">
                  Specialized centers of excellence have been established in
                  Kuwait and continue to be funded as subsidiaries of the
                  foundation, providing the country with additional ways to
                  address national challenges through research and development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logos Section with Orange Background */}
        <section className="py-16 bg-[#EC601B]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full flex items-center justify-center"
              >
                <img
                  src="/image/logo3.png"
                  alt="Partner Logo"
                  className="h-24 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full flex items-center justify-center"
              >
                <img
                  src="/image/logo4.png"
                  alt="Partner Logo"
                  className="h-24 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full flex items-center justify-center"
              >
                <img
                  src="/image/logo5.png"
                  alt="Partner Logo"
                  className="h-24 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full flex items-center justify-center"
              >
                <img
                  src="/image/logo6.png"
                  alt="Partner Logo"
                  className="h-24 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Back to Top Section */}
        <div className="py-12 bg-gray-100 flex flex-col items-center justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#EC601B] transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <div className="w-10 h-10 border-2 border-gray-300 group-hover:border-[#EC601B] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>
      </main>
      <Footer />
    </>
  );
}
