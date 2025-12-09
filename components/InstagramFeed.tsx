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

// Placeholder posts to show when no access token is configured
const placeholderPosts: InstagramPost[] = [
  {
    id: "placeholder-1",
    media_type: "IMAGE",
    media_url: "/image/instagram2.webp",
    permalink: "https://www.instagram.com/kfasinfo/",
    timestamp: new Date().toISOString(),
    caption:
      "KFAS continues to support scientific research and innovation in Kuwait. Follow us for the latest updates on our programs and initiatives. #KFAS #Science #Innovation",
  },
  {
    id: "placeholder-2",
    media_type: "IMAGE",
    media_url: "/image/Scientific.png",
    permalink: "https://www.instagram.com/kfasinfo/",
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    caption:
      "Empowering researchers and scientists to tackle national challenges through cutting-edge research programs. #Research #Kuwait #Technology",
  },
  {
    id: "placeholder-3",
    media_type: "IMAGE",
    media_url: "/image/ImpactStory2.png",
    permalink: "https://www.instagram.com/kfasinfo/",
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    caption:
      "Building a sustainable future through science, technology, and innovation. Join us in our mission. #Sustainability #Future #KFAS",
  },
];

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usePlaceholder, setUsePlaceholder] = useState(false);
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
          // If token not configured, use placeholder posts
          if (errorData.error?.includes("not configured")) {
            setPosts(placeholderPosts);
            setUsePlaceholder(true);
            setLoading(false);
            return;
          }
          throw new Error(errorData.error || "Failed to fetch Instagram posts");
        }

        const data = await response.json();
        setPosts(data.posts || []);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching Instagram posts:", err);
        // Use placeholder posts if there's an error
        setPosts(placeholderPosts);
        setUsePlaceholder(true);
        setLoading(false);
      }
    };

    checkTokenAndFetch();
  }, []);

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
      className="relative py-20 lg:py-28 overflow-hidden bg-[#1D2D44]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Instagram Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-white/80 text-sm font-medium">
                @kfasinfo
              </span>
            </div>

            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Follow Us on <span className="text-[#EC601B]">Instagram</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Stay connected with KFAS. Get the latest updates on scientific
              breakthroughs, events, and initiatives shaping Kuwait&apos;s
              future.
            </p>

            {usePlaceholder && (
              <span className="inline-block text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full mb-6">
                Preview Mode
              </span>
            )}

            {/* Follow Button */}
            <motion.a
              href="https://www.instagram.com/kfasonfo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#EC601B] text-white font-semibold rounded-xl hover:bg-[#F7911E] transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Follow @KFAS</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </motion.a>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">15K+</p>
                <p className="text-white/50 text-sm">Followers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-white/50 text-sm">Posts</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Posts Grid */}
          <div>
            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white/10 animate-pulse rounded-xl"
                  ></div>
                ))}
              </div>
            )}

            {/* Error State */}
            {error && !loading && !usePlaceholder && (
              <div className="text-center py-12">
                <p className="text-white/60">{error}</p>
              </div>
            )}

            {/* Posts Grid */}
            {!loading && !error && posts.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                {/* First large post */}
                <motion.a
                  href={posts[0]?.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block col-span-2 row-span-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={posts[0]?.media_url}
                      alt={posts[0]?.caption || "Instagram post"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm line-clamp-2">
                          {truncateCaption(posts[0]?.caption || "", 80)}
                        </p>
                      </div>
                    </div>
                    {/* Play indicator for featured */}
                    <div className="absolute top-4 left-4 bg-[#EC601B] text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>
                </motion.a>

                {/* Smaller posts */}
                {posts.slice(1).map((post, index) => (
                  <motion.a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <img
                        src={post.media_url}
                        alt={post.caption || "Instagram post"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#EC601B]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {/* No Posts State */}
            {!loading && !error && posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60">No Instagram posts available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
