import React from "react";
import SearchBar from "./SearchBar";
import { PlayIcon } from "lucide-react";
import herobg from "../../public/images/herobg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[90vw] relative mx-auto rounded-3xl overflow-hidden">
      {/* Image section */}
      <div className="relative h-[45vh] md:h-[85vh]">
        <Image
          src={herobg}
          alt="Woman working on laptop"
          className="w-full h-full object-cover"
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>
        
        {/* Dots and education button - always on image */}
        <div className="absolute bottom-4 left-0 right-0 w-full max-w-xl mx-auto px-4">
          {/* Search only shows on desktop */}
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0 ? "bg-[#c2e62b]" : "bg-white/50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="bg-white/90 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg">
              <span className="font-bold text-black/90 text-sm md:text-base">
                EDUCATION AND TUTORING
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col md:absolute md:inset-0 justify-start md:justify-between p-4 md:p-8  md:bg-transparent">
        <div className="mt-4 md:mt-[5vh] bg-black/10 md:bg-white/30 filter backdrop-blur-sm rounded-3xl overflow-clip p-4 md:p-8 w-full md:w-[36vw] [clip-path:polygon(0_0,100%_0,100%_55%,85%_100%,0_100%)]">
          <h1 className="text-black/90 md:text-white/90 text-2xl md:text-4xl font-bold leading-relaxed">
            FIND THE <span className="text-[#c2e62b]">TALENT</span> SIGN UP
            <br />& GET THE <span className="text-[#c2e62b]">JOB</span> DONE
          </h1>
        </div>

        <div className="relative mt-4 md:mt-0 md:absolute md:right-8 md:top-40">
          <div className="relative">
            <div className="bg-black/10 md:bg-white/30 backdrop-blur-sm rounded-3xl p-4 md:p-8 w-full md:min-w-[35vw] h-[11vh] md:h-[20vh] flex flex-col justify-between items-center [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%,0_50%)]">
              <h2 className="text-black/90 md:text-white/90 text-2xl md:text-4xl font-bold text-center">
                WE'LL <span className="text-[#c2e62b]">HANDLE</span> THAT
              </h2>
            </div>

            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 flex items-center gap-2 md:gap-3 w-full justify-center">
              <button className="bg-[#c2e62b] text-black/90 w-[70%] md:w-[20vw] py-3 md:py-5 px-4 rounded-full font-medium hover:bg-[#d4f73a] transition-colors shadow-lg text-sm md:text-base">
                Sign Up for Contract
              </button>
              <div className="bg-gray-100 rounded-full p-1.5 md:p-2 shadow-lg">
                <PlayIcon className="w-6 h-6 md:w-10 md:h-10 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Search section - mobile version */}
        <div className="block md:hidden w-full max-w-xl mx-auto mt-12">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
