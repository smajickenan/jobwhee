import { MoveRight } from "lucide-react";

const ContractCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 w-[90%] md:w-full max-w-md mx-auto shadow-md">
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <div className="text-xl md:text-2xl font-bold">CONTRACT</div>
        <div className="text-lg md:text-xl truncate">Looking for Math Teacher</div>
      </div>

      <div className="flex items-center justify-between gap-2 md:gap-4 mb-6 md:mb-8">
        <div className="bg-[#F8F9FF] rounded-2xl p-3 md:p-4 w-1/2">
          <div className="mb-3">
            <span className="bg-gray-200 px-3 md:px-6 py-1 md:py-1.5 rounded-full text-sm md:text-lg">Client</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mb-2"></div>
            <div className="flex items-center gap-1 md:gap-2 mb-1">
              <div className="font-bold text-sm md:text-lg truncate">Edward Smith</div>
              <div className="flex items-center shrink-0">
                <span className="text-yellow-400 text-base md:text-xl">★</span>
                <span className="ml-1 text-sm md:text-lg">5.0</span>
              </div>
            </div>
            <div className="text-xs md:text-base text-gray-500 truncate">Founder of MathTech</div>
          </div>
        </div>

        <div className="bg-[#F8F9FF] rounded-2xl p-3 md:p-4 w-1/2">
          <div className="mb-3">
            <span className="bg-[#c2e62b] px-3 md:px-6 py-1 md:py-1.5 rounded-full text-sm md:text-lg">Talent</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mb-2"></div>
            <div className="flex items-center gap-1 md:gap-2 mb-1">
              <div className="font-bold text-sm md:text-lg truncate">Edward Smith</div>
              <div className="flex items-center shrink-0">
                <span className="text-yellow-400 text-base md:text-xl">★</span>
                <span className="ml-1 text-sm md:text-lg">5.0</span>
              </div>
            </div>
            <div className="text-xs md:text-base text-gray-500 truncate">Math Teacher</div>
          </div>
        </div>
      </div>

      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
          <div className="text-lg md:text-xl font-bold">Description</div>
        </div>
        <p className="text-sm md:text-base text-gray-600">
          We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
          <div className="text-lg md:text-xl font-bold">Job Details</div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4 text-sm md:text-base">
          <div className="flex gap-1 md:gap-2">
            <div className="font-bold whitespace-nowrap">Start Date:</div>
            <div className="text-gray-600 truncate">Jan 15, 2025.</div>
          </div>
          <div className="flex gap-1 md:gap-2">
            <div className="font-bold whitespace-nowrap">Status:</div>
            <div className="text-gray-600">Ongoing</div>
          </div>
          <div className="flex gap-1 md:gap-2">
            <div className="font-bold whitespace-nowrap">End Date:</div>
            <div className="text-gray-600 truncate">Not Estimated</div>
          </div>
          <div className="flex gap-1 md:gap-2">
            <div className="font-bold whitespace-nowrap">Budget:</div>
            <div className="text-gray-600">$ 2000</div>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6">
        <div className="bg-black text-white text-center py-3 md:py-4 px-4 md:px-6 rounded-full text-xs md:text-base">
          Fixed-priced contract under the protection of payment system.
        </div>
      </div>
    </div>
  );
};

const SuccessfulContracts = () => {
  return (
    <div className="w-full overflow-x-hidden py-12 bg-gray-50">
      <div className="text-center mb-12 px-2">
        <h2 className="text-3xl font-bold mb-8 inline-flex items-center justify-center">
          <span className="inline-block w-3 h-3 bg-[#c2e62b] rounded-full mr-2"></span>
          SUCCESSFUL
          <span className="relative ml-2">
            CONTRACTS
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#c2e62b]"></span>
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-2 md:px-4">
        <ContractCard />
        <ContractCard />
      </div>
    </div>
  );
};

export default SuccessfulContracts; 