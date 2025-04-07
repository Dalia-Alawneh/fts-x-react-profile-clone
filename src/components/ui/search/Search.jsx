import { SearchIcon } from "lucide-react"

const Search = () => {
  return (
    <div className="border border-lighter rounded-full text-light focus-within:border-blue-primary transition-colors flex items-center ps-2">
      <SearchIcon size={16} />
      <input type="search" className="w-full focus:outline-0 focus:borde-0 rounded-full p-2" placeholder="Search" />
    </div>
  )
}

export default Search
