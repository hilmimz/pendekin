import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({background,iconColor,placeholder, classname, textColor}) {
  return(
    <div className="relative">
      <FontAwesomeIcon icon={faSearch} className="text-lg text-gray-500  absolute top-1/2 transform -translate-y-1/2 left-1" />
      <input className={`w-60 h-9 pl-8 pr-3 text-${textColor} text-sm rounded-md border border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 outline-none placeholder:text-gray-400 transition ${classname}`} placeholder={placeholder} type="text"/>
    </div>
  )
}