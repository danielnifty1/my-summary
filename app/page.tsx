import BgGradient from "@/components/common/bgGradient";
import CTASection from "@/components/home/ctaSection";
import DemoSection from "@/components/home/demoSection";
import HeroSection from "@/components/home/heroSection";
import HowItWorks from "@/components/home/howItWorksSection";
import PriceSection from "@/components/home/priceSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BgGradient className="" children={undefined} />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorks />
        <PriceSection />
        <CTASection />
      </div>
    </div>
  );
}
