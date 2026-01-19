"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { NavItem } from "@/types";

interface HeaderProps {
  logo?: string;
  logoText?: string;
  navItems?: NavItem[];
  forceWhiteBackground?: boolean;
}

function Header({
  logo,
  logoText = "KFAS",
  navItems = [],
  forceWhiteBackground = false,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLangDropdownOpen && !target.closest(".language-switcher")) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isLangDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  const defaultNavItems: NavItem[] =
    navItems.length > 0
      ? navItems
      : [
          {
            label: "About",
            href: "/about",
            children: [
              { label: "Who We Are", href: "/AboutKfas" },
              { label: " Our History", href: "/OurHistory" },
              { label: " Our Strategy", href: "/about/strategy" },
              {
                label: "Board of Directors",
                href: "/about/board-of-directors",
              },
              {
                label: "Execute Management ",
                href: "/about/execute-management",
              },
            ],
          },
          {
            label: "Research",
            href: "/Research",
            children: [
              { label: "Grants", href: "/research/grants" },
              {
                label: "Activities and Events",
                href: "/research/Activities-and-Events",
              },
              { label: "Projects", href: "/research/projects" },
              {
                label: "Scientific Missions",
                href: "/research/Scientific-Missions",
              },
              {
                label: "Scientific Conference Sponsorship",
                href: "/research/scientific-conference-sponsorship",
              },
            ],
          },
          {
            label: "Technology and Innovation",
            href: "/technology-and-innovation",
            children: [
              {
                label: "Technology Deploiment",
                href: "/technology-and-innovation/technology-deploiment",
              },
              {
                label: "R&B in Private Sector",
                href: "/technology-and-innovation/RB-in-Private-Sector",
              },
              {
                label: "R&B in Public Sector",
                href: "/technology-and-innovation/technology-deploiment",
              },
              {
                label: "Outcomes",
                href: "/technology-and-innovation/Outcomes2",
              },
            ],
          },
          {
            label: "Learning and Development",
            href: "/Learning-and-Development",
            children: [
              {
                label: "Researcher",
                href: "/Learning-and-Development/Researchers",
              },
              {
                label: "Professionals",
                href: "/Learning-and-Development/Professionals",
              },
              {
                label: "Youth",
                href: "/Learning-and-Development/Youth",
              },
              {
                label: "Special needs",
                href: "/Learning-and-Development/Special-needs",
              },
              {
                label: "Outcomes",
                href: "/Learning-and-Development/Outcomes3",
              },
            ],
          },
          {
            label: "Science & Society",
            href: "/Science-and-Society",
            children: [
              {
                label: "Activity and Funding",
                href: "/Science-and-Society/Activity-and-Funding",
              },
              {
                label: "Activities and Events",
                href: "/Science-and-Society/Activities-and-Events",
              },
              {
                label: "Publications",
                href: "/Science-and-Society/Publications",
              },
              {
                label: "Outcomes",
                href: "/Science-and-Society/Outcomes4",
              },
            ],
          },
          {
            label: "Prizes",
            href: "/Prizes",
            children: [
              { label: "Kuwait Prize", href: "/Prizes/Kuwait-Prize" },
              {
                label: "Jaber Al-Ahmed Prize",
                href: "/Prizes/Jaber-Al-Ahmed-Prize",
              },
              { label: "Al Sumait Prize", href: "/Prizes/Al-Sumait-Prize" },
              { label: "Laureates", href: "/Prizes/Laureates" },
            ],
          },
        ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || forceWhiteBackground
          ? "md:bg-white bg-transparent"
          : "bg-transparent"
      }`}
    >
      {/* Desktop Header */}
      <nav className="hidden md:block w-full max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div
          className={`flex items-center justify-between ${
            isScrolled || forceWhiteBackground ? "space-x-2" : "space-x-1"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4">
            {logo ? (
              <img
                src={
                  isScrolled || forceWhiteBackground ? "/image/logo2.png" : logo
                }
                alt={logoText}
                className={`w-auto transition-all duration-300 ${
                  isScrolled || forceWhiteBackground ? "h-12" : "h-16"
                }`}
              />
            ) : (
              <span
                className={`font-bold transition-all duration-300 ${
                  isScrolled || forceWhiteBackground
                    ? "text-xl text-black"
                    : "text-2xl text-white"
                }`}
              >
                {logoText}
              </span>
            )}

            {/* Very thin divider */}
            <div
              className={`h-10 sm:h-12 w-px transition-all duration-300 ${
                isScrolled || forceWhiteBackground
                  ? "bg-gray-300"
                  : "bg-white/30"
              }`}
            />

            {/* 50 Years Anniversary Logo */}
            <div className="relative flex items-center justify-center">
              {/* Container for smooth transition */}
              <div className="relative w-auto h-10 sm:h-12 flex items-center justify-center">
                {/* White version (shown when not scrolled) */}
                {isMounted ? (
                  <motion.img
                    src="/image/50.png"
                    alt="50 Years"
                    className="w-auto h-full object-contain"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                      opacity: isScrolled || forceWhiteBackground ? 0 : 1,
                      scale: isScrolled || forceWhiteBackground ? 0.8 : 1,
                      y: isScrolled || forceWhiteBackground ? -5 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2))",
                    }}
                  />
                ) : (
                  <img
                    src="/image/50.png"
                    alt="50 Years"
                    className="w-auto h-full object-contain"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2))",
                      opacity: isScrolled || forceWhiteBackground ? 0 : 1,
                    }}
                  />
                )}

                {/* Gold version (shown when scrolled) - smaller size */}
                {isMounted ? (
                  <motion.img
                    src="/image/50_gold.png"
                    alt="50 Years Gold"
                    className="absolute inset-0 w-auto h-7 sm:h-10 object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isScrolled || forceWhiteBackground ? 1 : 0,
                      scale: isScrolled || forceWhiteBackground ? 1 : 0.8,
                      y: isScrolled || forceWhiteBackground ? 0 : 5,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      filter:
                        isScrolled || forceWhiteBackground
                          ? "brightness(1.1)"
                          : "none",
                    }}
                  />
                ) : (
                  <img
                    src="/image/50_gold.png"
                    alt="50 Years Gold"
                    className="absolute inset-0 w-auto h-7 sm:h-10 object-contain"
                    style={{
                      filter:
                        isScrolled || forceWhiteBackground
                          ? "brightness(1.1)"
                          : "none",
                      opacity: isScrolled || forceWhiteBackground ? 1 : 0,
                    }}
                  />
                )}
              </div>

              {/* Animated glow effect when scrolled */}
              {isMounted && (isScrolled || forceWhiteBackground) ? (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-radial from-yellow-400/30 via-yellow-500/20 to-transparent rounded-full blur-2xl scale-150" />
                </motion.div>
              ) : null}
            </div>
          </Link>

          {/* Desktop Navigation */}
          {defaultNavItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <span
                  className={`hover:bg-[#EC601B] font-medium transition-all duration-300 flex items-center cursor-pointer px-3 py-1 ${
                    openDropdown === item.href
                      ? "bg-[#EC601B] text-white"
                      : isScrolled || forceWhiteBackground
                      ? "text-black hover:text-white"
                      : "text-white/90 hover:text-white"
                  } ${
                    isScrolled || forceWhiteBackground
                      ? "text-[15px]"
                      : "text-base"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`ml-1 transition-all duration-300 ${
                      isScrolled || forceWhiteBackground ? "w-3 h-3" : "w-4 h-4"
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`hover:bg-[#EC601B] font-medium transition-all duration-300 px-6 py-1 ${
                    isScrolled
                      ? "text-[15px] text-black hover:text-white"
                      : "text-base text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
              {item.children && openDropdown === item.href && (
                <div className="absolute top-full left-0 mt-0 bg-[#EC601B] shadow-lg py-4 min-w-[280px] z-50">
                  {item.children.map((child, index) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-6 py-3 text-white hover:bg-white/20 transition-colors ${
                        index < (item.children?.length ?? 0) - 1
                          ? "border-b border-white/50"
                          : ""
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Language Switcher */}
          <div className="relative language-switcher">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className={`flex items-center space-x-1 transition-colors ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label="Change language"
            >
              <span
                className={`uppercase transition-all duration-300 ${
                  isScrolled || forceWhiteBackground ? "text-xs" : "text-sm"
                }`}
              >
                {currentLanguage}
              </span>
              <svg
                className={`ml-1 transition-all duration-300 ${
                  isScrolled || forceWhiteBackground ? "w-3 h-3" : "w-4 h-4"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 top-full mt-0 bg-[#EC601B] shadow-lg py-4 min-w-[200px] z-50">
                <button
                  onClick={() => {
                    setCurrentLanguage("en");
                    setIsLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-6 py-3 text-white hover:bg-white/20 transition-colors flex items-center space-x-2 border-b border-white/50"
                >
                  <span>🇬🇧</span>
                  <span>English</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentLanguage("ar");
                    setIsLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-6 py-3 text-white hover:bg-white/20 transition-colors flex items-center space-x-2"
                >
                  <span>🇰🇼</span>
                  <span>العربية</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="md:hidden w-full bg-white shadow-sm">
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {/* Logo (Left) */}
          <Link
            href="/"
            className="flex items-center justify-start gap-2 transition-opacity hover:opacity-90"
          >
            <img
              src="/image/logo2.png"
              alt={logoText}
              className="h-11 w-auto transition-all duration-300"
            />
            <span className="h-8 w-px bg-gray-300" />
            <img
              src="/image/50_gold.png"
              alt="50 Years"
              className="h-9 w-auto transition-all duration-300"
            />
          </Link>

          {/* Hamburger Menu on Right */}
          <div className="flex-1 flex items-center justify-end">
            {/* Hamburger Button */}
            <button
              className="p-2.5 rounded-lg text-gray-600 hover:text-gray-700 hover:bg-gray-50 transition-all duration-300 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-5 py-4 space-y-1">
                {defaultNavItems.map((item, index) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between py-3.5 px-2 font-semibold text-gray-800 hover:text-[#EC601B] hover:bg-gray-50 rounded-lg transition-all duration-300 group"
                          onClick={() =>
                            setOpenMobileDropdown(
                              openMobileDropdown === item.href
                                ? null
                                : item.href
                            )
                          }
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-5 bg-[#EC601B] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                            <span>{item.label}</span>
                          </span>
                          <svg
                            className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                              openMobileDropdown === item.href
                                ? "rotate-180 text-[#EC601B]"
                                : "group-hover:text-[#EC601B]"
                            }`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openMobileDropdown === item.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-1 space-y-0.5 bg-gray-50/50 rounded-lg py-2 border-l-2 border-[#EC601B]/30"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block py-2.5 px-4 font-medium text-gray-600 hover:text-[#EC601B] hover:bg-white rounded-md transition-all duration-300"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3.5 px-2 font-semibold text-gray-800 hover:text-[#EC601B] hover:bg-gray-50 rounded-lg transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1 h-5 bg-[#EC601B] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                          <span>{item.label}</span>
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Language Switcher - Mobile */}
              <div className="mt-2 pt-4 border-t border-gray-100 px-5 pb-4">
                <div className="relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="w-full flex items-center justify-between py-3.5 px-2 font-semibold text-gray-800 hover:text-[#EC601B] hover:bg-gray-50 rounded-lg transition-all duration-300 group"
                    aria-label="Change language"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#EC601B] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                      <span className="flex items-center space-x-2">
                        <span className="uppercase text-sm">
                          {currentLanguage}
                        </span>
                        <span>Language</span>
                      </span>
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                        isLangDropdownOpen
                          ? "rotate-180 text-[#EC601B]"
                          : "group-hover:text-[#EC601B]"
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-0.5 bg-[#EC601B] rounded-lg py-2 border-l-2 border-white/30"
                    >
                      <button
                        onClick={() => {
                          setCurrentLanguage("en");
                          setIsLangDropdownOpen(false);
                        }}
                        className="w-full text-left py-3 px-4 font-medium text-white hover:bg-white/20 rounded-md transition-all duration-300 flex items-center space-x-2 border-b border-white/50"
                      >
                        <span className="text-lg">🇬🇧</span>
                        <span>English</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentLanguage("ar");
                          setIsLangDropdownOpen(false);
                        }}
                        className="w-full text-left py-3 px-4 font-medium text-white hover:bg-white/20 rounded-md transition-all duration-300 flex items-center space-x-2"
                      >
                        <span className="text-lg">🇰🇼</span>
                        <span>العربية</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default memo(Header);
