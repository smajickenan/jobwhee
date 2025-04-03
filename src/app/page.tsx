import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SuccessfulContracts from "@/components/SuccessfulContracts";

export default function Home() {
 

  return (
    <div className="w-full min-h-screen bg-gray-50">
    <Navbar />
    <Hero />
    <Discover />
    <SuccessfulContracts />
  </div>
  );
}
