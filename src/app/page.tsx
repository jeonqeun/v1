import BackgroundGrid from "@/components/home/BackgroundGrid/BackgroundGrid";
import HomeAboutSection from "@/components/home/HomeAboutSection/HomeAboutSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomePostsSection from "@/components/home/HomePostsSection";
import HomeProjectsSection from "@/components/home/HomeProjectsSection/HomeProjectsSection";
import Footer from "@/components/layout/Footer/Footer";

export default function Page() {
  return (
    <>
      <div className="relative mt-14">
        <BackgroundGrid />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 2xl:max-w-[1500px]">
          <HomeHeroSection />
          <HomeAboutSection />
          <HomeProjectsSection />
          <HomePostsSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
