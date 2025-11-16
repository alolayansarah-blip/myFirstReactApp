import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import StatsCounter from "@/components/StatsCounter";
import SocialShareMenu from "@/components/SocialShareMenu";
import FlippedCardStack from "@/components/FlippedCardStack";
import ExploreOurWork from "@/components/ExploreOurWork";
import OurImpactStories from "@/components/OurImpactStories";
import InstagramFeed from "@/components/InstagramFeed";
import LatestNews from "@/components/LatestNews";

export default function Home() {
  return (
    <>
      <Header logo="/image/logo.png" logoText="KFastest" />
      <SocialShareMenu />
      <main>
        <Hero
          title={
            <>
              <span className="text- animate-title-left inline-block">
                Timeless Legacy
              </span>
              <br />
              <span className="text-animate-title-right inline-block">
                Innovative Future
              </span>
            </>
          }
          //   subtitle="Modern Web Solutions"
          //   description="A fast, modern website built with Next.js, TypeScript, and Tailwind CSS. Converted from WordPress to a static, high-performance site."
          //   ctaText="Get Started"
          //   ctaLink="/contact"
          video="/videos/hero-background.mp4" // Add your video path here
          videoPoster="/images/video-poster.jpg" // Optional: poster image
        />

        <FlippedCardStack />

        <WhoWeAre />

        <ExploreOurWork />

        <OurImpactStories />

        <StatsCounter />

        <LatestNews />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
