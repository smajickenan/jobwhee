import { MoveRight } from 'lucide-react'
interface CategoryCardProps {
  title: string
  image: string
}
const CategoryCard = ({ title, image }: CategoryCardProps) => {
  return (
    <div className="relative group w-full sm:w-[15vw]">
      <div className="overflow-hidden rounded-3xl mb-3">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <div className="bg-white rounded-full py-3 px-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-base">{title}</h3>
          <button className="bg-[#c2e62b] rounded-full p-1.5 hover:bg-[#d4f73a] transition-colors">
            <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default CategoryCard
