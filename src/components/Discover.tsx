import { ArrowRightIcon, ArrowLeftIcon, MoveRight } from "lucide-react";

const Discover = () => {
  return (
    <div className="w-[1440px] py-12 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-8 inline-flex items-center justify-center">
          <span className="inline-block w-3 h-3 bg-[#c2e62b] rounded-full mr-2"></span>
          DISC
          <span className="relative">
            OVER
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#c2e62b]"></span>
          </span>
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-x-auto hide-scrollbar flex gap-4 snap-x snap-mandatory">
          {/* Household Services */}
          <div className="snap-center min-w-[80vw] first:ml-4 last:mr-4">
            <div className="relative group w-full">
              <div className="overflow-hidden rounded-3xl mb-3 h-[35vh]">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Household Services"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-white rounded-full py-3 px-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base">Household Services</h3>
                  <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                    <MoveRight className="w-6 h-6 -rotate-[35deg]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Home Maintenance Services */}
          <div className="snap-center min-w-[80vw]">
            <div className="relative group w-full">
              <div className="overflow-hidden rounded-3xl mb-3 h-[35vh]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Home Maintenance Services"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-white rounded-full py-3 px-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base">Home Maintenance Services</h3>
                  <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                    <MoveRight className="w-6 h-6 -rotate-[35deg]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Beauty and Wellness */}
          <div className="snap-center min-w-[80vw]">
            <div className="relative group w-full">
              <div className="overflow-hidden rounded-3xl mb-3 h-[35vh]">
                <img
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Beauty and Wellness"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-white rounded-full py-3 px-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base">Beauty and Wellness</h3>
                  <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                    <MoveRight className="w-6 h-6 -rotate-[35deg]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Education and Tutoring */}
          <div className="snap-center min-w-[80vw]">
            <div className="relative group w-full">
              <div className="overflow-hidden rounded-3xl mb-3 h-[35vh]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Education and Tutoring"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-white rounded-full py-3 px-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base">Education and Tutoring</h3>
                  <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                    <MoveRight className="w-6 h-6 -rotate-[35deg]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Event and Entertainment */}
          <div className="snap-center min-w-[80vw] last:mr-4">
            <div className="relative group w-full">
              <div className="overflow-hidden rounded-3xl mb-3 h-[35vh]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Event and Entertainment"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-white rounded-full py-3 px-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-base">Event and Entertainment</h3>
                  <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                    <MoveRight className="w-6 h-6 -rotate-[35deg]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button className="border border-gray-300 rounded-full p-2">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button className="border border-gray-300 rounded-full p-2">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Household Services */}
        <div className="relative group w-full xl:w-[223px]">
          <div className="overflow-hidden rounded-3xl mb-3 h-[35vh] xl:h-[262px]">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Household Services"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-full py-3 px-4 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Household <br/>Services</h3>
              <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                <MoveRight className="w-6 h-6 -rotate-[35deg]" />
              </button>
            </div>
          </div>
        </div>

        {/* Home Maintenance Services */}
        <div className="relative group w-full xl:w-[223px]">
          <div className="overflow-hidden rounded-3xl mb-3 h-[35vh] xl:h-[262px]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Home Maintenance Services"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-full py-3 px-4 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Home Maintenance <br/>Services</h3>
              <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                <MoveRight className="w-6 h-6 -rotate-[35deg]" />
              </button>
            </div>
          </div>
        </div>

        {/* Beauty and Wellness */}
        <div className="relative group w-full xl:w-[223px]">
          <div className="overflow-hidden rounded-3xl mb-3 h-[35vh] xl:h-[262px]">
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Beauty and Wellness"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-full py-3 px-4 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Beauty and <br/>Wellness</h3>
              <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                <MoveRight className="w-6 h-6 -rotate-[35deg]" />
              </button>
            </div>
          </div>
        </div>

        {/* Education and Tutoring */}
        <div className="relative group w-full xl:w-[223px]">
          <div className="overflow-hidden rounded-3xl mb-3 h-[35vh] xl:h-[262px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Education and Tutoring"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-full py-3 px-4 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Education and <br/>Tutoring</h3>
              <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                <MoveRight className="w-6 h-6 -rotate-[35deg]" />
              </button>
            </div>
          </div>
        </div>

        {/* Event and Entertainment */}
        <div className="relative group w-full xl:w-[223px]">
          <div className="overflow-hidden rounded-3xl mb-3 h-[35vh] xl:h-[262px]">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Event and Entertainment"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-full py-3 px-4 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Event and <br/>Entertainment</h3>
              <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                <MoveRight className="w-6 h-6 -rotate-[35deg]" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative group w-full xl:w-[223px]">
          <div className="overflow-hidden rounded-3xl mb-3 h-[35vh] xl:h-[262px]">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Event and Entertainment"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="bg-white rounded-full py-3 px-4 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Marine <br/>Services</h3>
              <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
                <MoveRight className="w-6 h-6 -rotate-[35deg]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
