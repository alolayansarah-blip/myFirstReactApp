"use client";

import React from "react";

const cards = [
  {
    title: "Research Grants",
  },
  {
    title: "Learning and Development for Professionals",
  },
  {
    title: "Our Publications",
  },
];

type Card = (typeof cards)[number];

function CardItem({ title, index }: Card & { index: number }) {
  const getRoundedClasses = () => {
    // Mobile: first and last cards get rounded corners
    // Desktop: left card gets left rounded, right card gets right rounded
    if (index === 0)
      return "rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none md:rounded-br-none";
    if (index === 2) return "rounded-b-2xl md:rounded-b-none md:rounded-r-2xl";
    return "";
  };

  const shadowClass = index === 0 ? "shadow-lg" : "";
  const dividerClass =
    index < cards.length - 1
      ? "border-b border-white/20 md:border-b-0 md:border-r md:border-white/20"
      : "";

  return (
    <div
      className={`relative h-44 ${getRoundedClasses()} p-0 ${shadowClass} ${dividerClass} bg-orange-500 md:hover:bg-orange-300 md:hover:scale-105 transition-all duration-300 md:cursor-pointer`}
    >
      <div className="flex flex-col h-full p-3 md:p-4 text-center justify-center items-center">
        <h3 className="text-white text-lg md:text-base font-semibold mb-2 md:mb-3 leading-snug md:leading-tight px-3 md:px-2 drop-shadow-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
          {title}
        </h3>

        <div className="flex items-center justify-center text-white/80">
          <span className="text-base md:text-xs mr-1 drop-shadow-md [text-shadow:_1px_1px_2px_rgba(0,0,0,0.4)]">
            Read more
          </span>
          <svg
            className="w-3 h-3 md:w-4 md:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function FlippedCardStack() {
  return (
    <section className="relative w-full bg-transparent pt-20 pb-24 -mt-32">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {cards.map((card, index) => (
            <CardItem key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
