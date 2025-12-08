"use client";

import { useState, useEffect, memo, useCallback } from "react";
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
              { label: "Who We Are", href: "/about/who-we-are" },
              { label: "history", href: "/about/history" },
              { label: "Strategy", href: "/about/strategy" },
              {
                label: "Board of Directors",
                href: "/about/board-of-directors",
              },
              {
                label: "Execute Management ",
                href: "/about/execute-management",
              },
              {
                label: "Strategic Partnerships",
                href: "/about/strategic-partnerships",
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
                label: "Conference Funds",
                href: "/research/Conference-Funding",
              },
              { label: "Outcomes", href: "/research/Outcomes" },
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
          ? "bg-white shadow-sm"
          : "md:bg-transparent bg-white"
      }`}
    >
      {/* Desktop Header */}
      <nav className="hidden md:block w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {logo ? (
              <img
                src={
                  isScrolled || forceWhiteBackground ? "/image/logo2.png" : logo
                }
                alt={logoText}
                className={`w-auto transition-all duration-300 ${
                  isScrolled || forceWhiteBackground ? "h-16" : "h-20"
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
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`flex items-center transition-all duration-300 ${
              isScrolled || forceWhiteBackground ? "space-x-2" : "space-x-1"
            }`}
          >
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
                        isScrolled || forceWhiteBackground
                          ? "w-3 h-3"
                          : "w-4 h-4"
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
          </div>

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
              <div className="absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-md rounded-lg shadow-lg py-2 min-w-[120px] z-50">
                <button
                  onClick={() => {
                    setCurrentLanguage("en");
                    setIsLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2"
                >
                  <span>🇬🇧</span>
                  <span>English</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentLanguage("ar");
                    setIsLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-2"
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
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo in Center */}
          <div className="flex-1" />
          <Link href="/" className="flex items-center justify-center flex-1">
            <img
              src="/image/logo2.png"
              alt={logoText}
              className="h-20 w-auto"
            />
          </Link>

          {/* Hamburger Menu on Right */}
          <div className="flex-1 flex items-center justify-end">
            {/* Hamburger Button */}
            <button
              className="p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 px-4 pb-4">
            {defaultNavItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 font-medium text-black hover:text-gray-700 transition-colors"
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.href ? null : item.href
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openMobileDropdown === item.href ? "rotate-180" : ""
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
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 px-3 font-medium text-black/70 hover:text-black hover:bg-gray-100 rounded transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 font-medium text-black/90 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher - Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="w-full flex items-center justify-between py-3 font-medium text-black hover:text-gray-700 transition-colors"
                  aria-label="Change language"
                >
                  <span className="flex items-center space-x-2">
                    <span className="uppercase">{currentLanguage}</span>
                    <span>Language</span>
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isLangDropdownOpen ? "rotate-180" : ""
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
                  <div className="pl-4 mt-2 space-y-1 bg-gray-50 rounded-lg py-2">
                    <button
                      onClick={() => {
                        setCurrentLanguage("en");
                        setIsLangDropdownOpen(false);
                      }}
                      className="w-full text-left py-2 px-3 font-medium text-black/70 hover:text-black hover:bg-gray-100 rounded transition-colors flex items-center space-x-2"
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentLanguage("ar");
                        setIsLangDropdownOpen(false);
                      }}
                      className="w-full text-left py-2 px-3 font-medium text-black/70 hover:text-black hover:bg-gray-100 rounded transition-colors flex items-center space-x-2"
                    >
                      <span>🇰🇼</span>
                      <span>العربية</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default memo(Header);
