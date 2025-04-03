import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
 

  return (
    <div className="w-full min-h-screen bg-white">
    <Navbar />
    <Hero />
    <Discover />
  </div>
  );
}
