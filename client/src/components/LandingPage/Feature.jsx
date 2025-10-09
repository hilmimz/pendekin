import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Feature({icon, title, description}) {
  return(
    <div className="bg-accent rounded-sm p-4 min-h-80 max-w-70 hover:-translate-y-3 duration-200">
      <div className="bg-white inline-block p-2 rounded-full mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl text-primary" />
      </div>
      
      <h1 className="text-primary font-bold mb-2 text-lg">{title}</h1>
      <h1 className="text-black font-normal">{description}</h1>
    </div>
  )
}