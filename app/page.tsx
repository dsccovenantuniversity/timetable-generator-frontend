import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Ready } from "@/components/ready";
import { Steps } from "@/components/steps";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex flex-col space-y-4 p-6">
        <Navbar />
        <HeroSection />
        <Steps />
        <Faqs />
        <Ready />
        <Footer />
      </div>
    </div>
  );
}
