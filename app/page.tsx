import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// Lazy load components below the fold for better performance
const FlippedCardStack = dynamic(
  () => import("@/components/FlippedCardStack"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const WhoWeAre = dynamic(() => import("@/components/WhoWeAre"), {
  loading: () => <div className="min-h-[400px]" />,
});
const StatsCounter = dynamic(() => import("@/components/StatsCounter"), {
  loading: () => <div className="min-h-[200px]" />,
});
const ExploreOurWork = dynamic(() => import("@/components/ExploreOurWork"), {
  loading: () => <div className="min-h-[400px]" />,
});
const LogoShowcase = dynamic(() => import("@/components/LogoShowcase"), {
  loading: () => <div className="min-h-[200px]" />,
});
const OurImpactStories = dynamic(
  () => import("@/components/OurImpactStories"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const InstagramFeed = dynamic(() => import("@/components/InstagramFeed"), {
  loading: () => <div className="min-h-[400px]" />,
});
const SocialShareMenu = dynamic(() => import("@/components/SocialShareMenu"));

export default function Home() {
  return (
    <>
      <Header logo="/image/logo.png" logoText="KFastest" />
      <SocialShareMenu />
      <main>
        <Hero
          title={
            <>
              {/* <span className="text-white animate-title-left inline-block">
                Timeless Legacy
              </span>
              <br />
              <span className="text-white animate-title-right inline-block">
                Innovative Future
              </span> */}
              {/* <span className="text-[white] animate-title-left inline-block">
                Timeless Legacy
              </span>
              <br />
              <span className="text-[white] animate-title-right inline-block">
                Innovative Future
              </span> */}
            </>
          }
          //   subtitle="Modern Web Solutions"
          //   description="A fast, modern website built with Next.js, TypeScript, and Tailwind CSS. Converted from WordPress to a static, high-performance site."
          //   ctaText="Get Started"
          //   ctaLink="/contact"
          video="/Videos/hero-background.mp4" // Add your video path here
          videoPoster="/images/video-poster.jpg" // Optional: poster image
        />

        <FlippedCardStack />

        <WhoWeAre />
        <StatsCounter />

        <ExploreOurWork />

        {/* <LogoShowcase /> */}

        <OurImpactStories />
        <LogoShowcase />
        {/* <StatsCounter /> */}

        <InstagramFeed />
      </main>
      <Footer logo="/image/logo.png" logoText="KFAS" />
    </>
  );
}
