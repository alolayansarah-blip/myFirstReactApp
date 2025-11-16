"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  caption?: string;
}

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    // Check if access token is configured
    const checkTokenAndFetch = async () => {
      try {
        // First, check if token exists by calling the API
        const response = await fetch("/api/instagram");

        if (!response.ok) {
          const errorData = await response.json();
          // If token not configured, hide the section
          if (errorData.error?.includes("not configured")) {
            setLoading(false);
            setError("hidden"); // Special flag to hide section
            return;
          }
          throw new Error(errorData.error || "Failed to fetch Instagram posts");
        }

        const data = await response.json();
        setPosts(data.posts || []);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching Instagram posts:", err);
        // Hide section if token is not configured
        setError("hidden");
        setLoading(false);
      }
    };

    checkTokenAndFetch();
  }, []);

  // Hide section if token is not configured
  if (error === "hidden") {
    return null;
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateCaption = (caption: string, maxLength: number = 150) => {
    if (!caption) return "";
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  return (
    <motion.section
      ref={sectionRef}
      id="instagram-feed"
      className="relative bg-white pt-24 lg:pt-32 pb-32 lg:pb-40 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Beautiful orange gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#EC601B]/10 via-[#F7911E]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-[#FFAB40]/8 via-[#F7911E]/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#F26A21]/7 via-[#EC601B]/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#EC601B]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#F7911E]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Follow Us on Instagram
          </motion.h2>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-[#EC601B] to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">{error}</p>
            <p className="text-sm text-gray-500">
              To set up Instagram integration, you need to:
              <br />
              1. Create a Facebook App and get Instagram access token
              <br />
              2. Add NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN to your .env file
            </p>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full block"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.95 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex flex-col h-full overflow-hidden border border-gray-200 hover:border-[#EC601B]/30 transition-all duration-300 rounded-lg hover:shadow-lg bg-white/50 backdrop-blur-sm">
                  {/* Image */}
                  <div className="relative w-full h-64 lg:h-80 overflow-hidden bg-gray-100">
                    <img
                      src={post.media_url}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    {/* Date */}
                    <p className="text-sm text-[#EC601B] font-medium mb-3">
                      {formatDate(post.timestamp)}
                    </p>

                    {/* Caption */}
                    {post.caption && (
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                        {truncateCaption(post.caption)}
                      </p>
                    )}

                    {/* View on Instagram */}
                    <div className="inline-flex items-center text-[#EC601B] font-medium text-sm hover:text-[#F7911E] transition-colors duration-300">
                      View on Instagram
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* No Posts State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No Instagram posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
