import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Button({title, icon, classname}) {
  return(
    <button className={`py-2 px-2 cursor-pointer duration-200 rounded-sm ${classname}`}><FontAwesomeIcon icon={icon}/> {title}</button>
  )
}