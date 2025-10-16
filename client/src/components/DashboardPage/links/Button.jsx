import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Button({title, icon, classname, rounded="sm"}) {
  return(
    <button className={`py-1 px-2 cursor-pointer duration-200 rounded-${rounded} ${classname}`}><FontAwesomeIcon icon={icon}/> {title}</button>
  )
}