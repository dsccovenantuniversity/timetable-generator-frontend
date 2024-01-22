import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col space-y-4 p-6">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
