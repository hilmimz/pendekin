import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({background,textColor,iconColor,placeholder}) {
  return(
    <div className="relative">
      <FontAwesomeIcon icon={faSearch} className="text-lg text-gray-500  absolute top-1/2 transform -translate-y-1/2 left-1" />
      <input className={`bg-white placeholder:text-slate-400 border-1 border-gray-300 hover:border-gray-400 rounded-sm py-2 pl-7 h-7 duration-150`} placeholder={placeholder} type="text"/>
    </div>
  )
}