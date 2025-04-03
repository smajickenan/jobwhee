import { ChevronDown, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="w-[80vw] bg-black px-4 md:px-6 py-3 flex items-center justify-between mx-auto rounded-full my-4">
      {/* Logo */}
      <div className="text-white text-xl md:text-2xl font-bold">
        <span className="text-white">J</span>
        <span className="text-[#c2e62b]">o</span>
        <span className="text-white">bwhee</span>
      </div>

      {/* Centered Navigation - Hidden on Mobile */}
      <div className="hidden md:flex items-center justify-center flex-1 mx-4">
        <div className="flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">
            Post a Job
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Explore Jobs
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            How it Works
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-3 md:space-x-4">
        {/* Language Selector - Hidden on Mobile */}
        <div className="hidden md:flex items-center bg-black border border-gray-700 rounded-full px-3 py-1">
          <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
              alt="UK Flag"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white mr-1">EN</span>
          <ChevronDown className="text-white w-4 h-4" />
        </div>

        {/* Sign In Button - Hidden on Mobile */}
        <button className="hidden md:block text-white px-4 py-1 rounded-full">
          Sign In
        </button>

        {/* Sign Up Button - Visible on all screens */}
        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm md:text-base">
          Sign Up
        </button>

        {/* Hamburger Menu - Visible only on Mobile */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
