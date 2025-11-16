"use client";

import React, { useState, useEffect, useRef } from "react";

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

    const defaultClasses = "font-light leading-tight tracking-tight";
    const combinedClasses = className
      ? `${defaultClasses} ${className}`
      : `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl ${defaultClasses}`;

    return (
      <h2 ref={headingRef} className={combinedClasses}>
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-colors duration-200 ${
              index < visibleLetters ? "text-[#EC601B]" : "text-gray-900"
            }`}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
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
      className="relative bg-white overflow-hidden pt-32 sm:pt-24 lg:pt-32 pb-12 lg:pb-16"
      style={{ marginTop: "-200px" }}
    >
      {/* Beautiful orange gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#EC601B]/12 via-[#F7911E]/6 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-[#FFAB40]/10 via-[#F7911E]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#F26A21]/8 via-[#EC601B]/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#EC601B]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#F7911E]/7 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        {/* Main Content Section */}
        <div className="pt-12 sm:pt-8 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Left Section: Text Content */}
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <AnimatedHeading text="The Kuwait Foundation for the Advancement of Sciences" />
              </div>

              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="w-20 h-px bg-gradient-to-r from-[#EC601B] to-transparent"></div>
              </div>

              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                  A private non-profit organization dedicated to fostering
                  science, technology, and innovation to address national
                  challenges. Our unique governance model, with the Board of
                  Directors chaired by the Amir of the State of Kuwait, ensures
                  sustainable impact through strategic partnerships and
                  innovative programs.
                </p>
              </div>
            </div>

            {/* Right Section: Image */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "0.7s" }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src="/image/who2.jpg"
                    alt="Kuwait Foundation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="pt-8 lg:pt-12 pb-8 lg:pb-12 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Vision */}
            <div
              className={`space-y-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-[#EC601B]"></div>
                  <AnimatedHeading
                    text="Our Vision"
                    className="text-3xl lg:text-4xl"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light pl-5">
                To be a global leader in purposeful innovation—designing
                solutions that are intuitive, sustainable, and profoundly human.
              </p>
            </div>

            {/* Mission */}
            <div
              className={`space-y-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "1.1s" }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-[#EC601B]"></div>
                  <AnimatedHeading
                    text="Our Mission"
                    className="text-3xl lg:text-4xl"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light pl-5">
                To create simple, meaningful, and future-ready solutions that
                empower people and organizations to grow with confidence and
                clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom padding */}
        <div className="pb-16 lg:pb-20"></div>
      </div>
    </section>
  );
}
