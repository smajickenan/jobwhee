import { SearchIcon, ChevronDown } from 'lucide-react'
const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg gap-2 p-1">
      <div className="bg-black rounded-full p-2">
        <SearchIcon className="text-white w-5 h-5" />
      </div>
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Find a job, talent or service"
          className="w-full py-2 focus:outline-none"
        />
      </div>
      <button className="bg-gray-50 px-4 py-2 rounded-full flex items-center border border-gray-200">
        <span className="mr-2 font-medium">Talent</span>
        <ChevronDown className="text-gray-500 w-4 h-4" />
      </button>
    </div>
  )
}
export default SearchBar
