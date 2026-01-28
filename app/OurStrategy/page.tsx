"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurStrategyPage() {
  const leadershipMessages = [
    {
      image: "/image/sheikh-meshal.jpg",
      subtitle: "His Highness the Amir of Kuwait",
      title: "Sheikh Meshal Al-Ahmad Al-Jaber Al Sabah",
      description:
        "“We affirm that the support of scientific research is fundamental to progress and is a priority for the State of Kuwait in an era of rapid development...”",
      smallDescription:
        "Speech during launch of the Kuwait National Space Research Center, Sep 2024.",
    },
    {
      image: "/image/profAmeenah.jpg",
      subtitle: "Director General",
      title: "Ameenah Rajab Farhan",
      description:
        "“The 2025–2029 KFAS strategy pledges to embrace continuous learning and innovation, invest in advanced technologies, and cultivate science-based solutions...”",
    },
  ];
  const [kpiCounts, setKpiCounts] = useState([0, 0, 0, 0]);
  const [kpisAnimated, setKpisAnimated] = useState(false);
  const kpisRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !kpisAnimated) {
            setKpisAnimated(true);
            const targets = [45, 1500, 1050, 1400];
            const duration = 1800;
            const steps = 60;
            const stepDuration = duration / steps;

            targets.forEach((target, index) => {
              let currentStep = 0;
              const increment = target / steps;
              const timer = setInterval(() => {
                currentStep += 1;
                setKpiCounts((prev) => {
                  const next = [...prev];
                  next[index] = Math.min(
                    Math.round(next[index] + increment),
                    target
                  );
                  return next;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                  setKpiCounts((prev) => {
                    const next = [...prev];
                    next[index] = target;
                    return next;
                  });
                }
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (kpisRef.current) {
      observer.observe(kpisRef.current);
    }

    return () => {
      if (kpisRef.current) {
        observer.unobserve(kpisRef.current);
      }
    };
  }, [kpisAnimated]);

  return (
    <>
      <Header logo="/image/logo_c.png" forceWhiteBackground={true} />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section with Banner */}
        <motion.section
          className="relative overflow-hidden flex items-center"
          initial={{ height: "70vh" }}
          animate={{ height: "45vh" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/image/benduluim.png"
              alt="Our Strategy"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 sm:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Breadcrumb */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                <span className="text-white/60">About</span>
                <span className="text-white/40">/</span>
                <span className="text-white">Our Strategy</span>
              </div>
              {/* Title */}
              <div className="relative mb-6">
                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl [text-shadow:_3px_3px_10px_rgba(0,0,0,0.8)]">
                  <span className="block">Our Strategy</span>
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Straight bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-10 bg-white"></div>
        </motion.section>

        {/* Jump To */}
        <section className="bg-gray-100 -mt-10 relative z-30">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#EC601B]/10 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#EC601B] font-poppins">
                  Jump To
                </span>
                <a
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#EC601B] hover:text-[#EC601B]"
                  href="#pillar-1"
                >
                  Pillar1
                </a>
                <a
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#EC601B] hover:text-[#EC601B]"
                  href="#pillar-2"
                >
                  Pillar2
                </a>
                <a
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#EC601B] hover:text-[#EC601B]"
                  href="#pillar-3"
                >
                  Pillar3
                </a>
                <a
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#EC601B] hover:text-[#EC601B]"
                  href="#offerings"
                >
                  Offerings
                </a>
                <a
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#EC601B] hover:text-[#EC601B]"
                  href="#priority-areas"
                >
                  Priority Areas
                </a>
                <a
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#EC601B] hover:text-[#EC601B]"
                  href="#kpis"
                >
                  KPIs
                </a>
              </div>
              <a
                href="/OurStrategy.pdf"
                className="inline-flex items-center justify-center rounded-full bg-[#EC601B] px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-colors hover:bg-[#D45417]"
              >
                Download PDF
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 text-gray-900">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#488FCC]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#488FCC]/10 blur-3xl" />
          <div className="absolute top-1/3 left-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#EC601B]/10 via-[#EC601B]/5 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-[#EC601B]/8 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div ref={kpisRef} className="space-y-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold">
                    KFAS Strategy
                  </h2>
                  <span className="hidden sm:inline-block h-8 w-px bg-gray-300" />
                  <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
                    2025-2029
                  </p>
                </div>
                <div className="text-sm sm:text-base text-gray-800">
                  <span className="block">Timeless Legacy</span>
                  <span className="block">Innovative Future</span>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-[#EC601B]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      kpisAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {kpiCounts[0]}+
                  </motion.div>
                  <div className="mt-1 text-sm text-gray-800">
                    years funding research
                  </div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-[#EC601B]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      kpisAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    {kpiCounts[1]}
                  </motion.div>
                  <div className="mt-1 text-sm text-gray-800">
                    projects funded
                  </div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-[#EC601B]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      kpisAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {kpiCounts[2]}
                  </motion.div>
                  <div className="mt-1 text-sm text-gray-800">
                    researchers supported
                  </div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-[#EC601B]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      kpisAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    {kpiCounts[3]}
                  </motion.div>
                  <div className="mt-1 text-sm text-gray-800">
                    articles published
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="relative overflow-hidden py-16 text-white">
          <div className="absolute inset-0 bg-[#EC601B]" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Leadership
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-montserrat font-bold">
                Leadership Message
              </h2>
            </div>

            <div className="space-y-12">
              {leadershipMessages.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid grid-cols-1 gap-8 lg:grid-cols-[260px_minmax(0,680px)] lg:items-center lg:justify-center ${
                    index % 2 === 1 ? "lg:[&>.image]:order-2" : ""
                  }`}
                >
                  <motion.div
                    className={`image flex justify-center ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative h-52 w-52 sm:h-60 sm:w-60 rounded-full p-1 bg-gradient-to-br from-white/90 via-white/60 to-white/20 shadow-xl ring-1 ring-white/40">
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                  <div className="w-full lg:w-[680px] rounded-2xl bg-white/10 p-6 sm:p-8 backdrop-blur-sm min-h-[280px] sm:min-h-[320px] flex flex-col relative overflow-hidden">
                    <img
                      src="/image/whiteComand.png"
                      alt=""
                      className="absolute -top-4 -right-4 h-24 w-24 opacity-70 pointer-events-none select-none"
                    />
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-3 text-2xl sm:text-3xl font-montserrat font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                    {item.smallDescription && (
                      <p className="mt-4 text-xs sm:text-sm text-white/70">
                        {item.smallDescription}
                      </p>
                    )}
                    <div className="mt-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-gray-900">
              Vision and Mission
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <motion.h3
                  className="text-sm uppercase tracking-[0.2em] text-[#EC601B] font-semibold"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  Vision
                </motion.h3>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  Advance science, technology, and innovation for a resilient,
                  thriving, and sustainable future.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <motion.h3
                  className="text-sm uppercase tracking-[0.2em] text-[#EC601B] font-semibold"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Mission
                </motion.h3>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  Pursue scientific excellence to tackle national challenges
                  through a prominent science, technology, and innovation model.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About KFAS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-[#7DC0F1]">
                  About KFAS
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The Kuwait Foundation for the Advancement of Sciences (KFAS) is
                  a private, non-profit organization established in December 1976.
                  KFAS funds and implements research, training, and development
                  programs that address Kuwait’s national priorities in science,
                  technology, and innovation, and operates specialized scientific
                  centers.
                </p>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li>
                    Builds alliances across academia, government, private sector,
                    NGOs, and the broader community.
                  </li>
                  <li>
                    Engages the public to generate awareness and interest in
                    science and technology.
                  </li>
                  <li>Recognizes excellence through prestigious prizes and awards.</li>
                  <li>
                    Governance structure: Board of Directors, executive board
                    committees, and executive management.
                  </li>
                </ul>
                <div className="inline-block rounded-xl bg-[#7DC0F1] px-4 py-3 text-sm sm:text-base text-white">
                  Read the full “About KFAS” section in the PDF
                </div>
              </div>
              <motion.div
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75 }}
              >
                <img
                  src="/image/steam_photo.jpg"
                  alt="KFAS STEAM programs"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategy Map */}
        <section className="py-16 bg-white" id="strategy-map">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-gray-900">
              Strategy Map
            </h2>
            <div className="mt-10"></div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl text-gray-900">
              Strategic Pillars
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Research Excellence</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Fund and enable high-impact research aligned with national
                  priorities and global challenges.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Innovation Ecosystem</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Support technology transfer, startups, and industry
                  partnerships that turn ideas into value.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Talent & Capacity</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Build national capabilities through education, training, and
                  global collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Priorities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl text-gray-900">
              Strategic Priorities
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Sustainability</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Drive research and innovation that supports climate resilience
                  and efficient resource use.
                </p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Health & Wellbeing</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Invest in scientific solutions that improve public health and
                  quality of life.
                </p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Digital Transformation</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Accelerate AI, data, and digital capabilities across Kuwait.
                </p>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <h3 className="text-lg text-gray-900">Knowledge Economy</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Build partnerships that translate research into economic and
                  societal impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer logo="/image/logo_white.png" logoText="KFAS" />
    </>
  );
}

