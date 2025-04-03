import { MoveRight } from "lucide-react";

const ContractCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-md">
      <div className="flex items-center gap-2 mb-8">
        <div className="text-2xl font-bold">CONTRACT</div>
        <div className="text-xl">Looking for Math Teacher</div>
      </div>

      <div className="flex items-center justify-between gap-4 mb-8">
      <div className="bg-[#F8F9FF] rounded-2xl p-4 w-1/2">
          <div className="text-lg mb-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
              <span className="bg-[#c2e62b] px-4 py-1 rounded-full">Client</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg">Edward Smith</div>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">5.0</span>
              </div>
            </div>
            <div className="text-gray-500">Founder of Math</div>
          </div>
        </div>

        <div className="bg-[#F8F9FF] rounded-2xl p-4 w-1/2">
          <div className="text-lg mb-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
              <span className="bg-[#c2e62b] px-4 py-1 rounded-full">Talent</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg">Edward Smith</div>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">5.0</span>
              </div>
            </div>
            <div className="text-gray-500">Math Teacher</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-lg">ℹ</span>
          </div>
          <div className="font-bold text-xl">Description</div>
        </div>
        <p className="text-gray-600">
          We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-lg">ℹ</span>
          </div>
          <div className="font-bold text-xl">Job Details</div>
        </div>
        <div className="grid grid-cols-2 gap-y-4">
          <div>
            <div className="font-semibold">Start Date:</div>
            <div className="text-gray-600">Jan 15, 2025.</div>
          </div>
          <div>
            <div className="font-semibold">Status:</div>
            <div className="text-gray-600">Ongoing</div>
          </div>
          <div>
            <div className="font-semibold">End Date:</div>
            <div className="text-gray-600">Not Estimated</div>
          </div>
          <div>
            <div className="font-semibold">Budget:</div>
            <div className="text-gray-600">$ 2000</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-black text-white text-center py-4 px-6 rounded-full">
          Fixed-priced contract under the protection of payment system.
        </div>
      </div>
    </div>
  );
};

const SuccessfulContracts = () => {
  return (
    <div className="w-[90vw] py-12 mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-8 inline-flex items-center justify-center">
          <span className="inline-block w-3 h-3 bg-[#c2e62b] rounded-full mr-2"></span>
          SUCCESSFUL
          <span className="relative ml-2">
            CONTRACTS
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#c2e62b]"></span>
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <ContractCard />
        <ContractCard />
      </div>
    </div>
  );
};

export default SuccessfulContracts; 