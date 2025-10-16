import SearchBar from "./SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Navbar({active}) {
  return(
    <nav className="bg-primary flex px-25 py-2 mx-10 justify-between items-center rounded-sm">
      <header className="text-secondary font-extrabold text-3xl flex-1">PENDEKIN</header>
      <div className="flex gap-12 text-white flex-1 justify-center">
        <h3><Link to="/dashboard">Dashboard</Link></h3>
        <h3><Link to="/links">Links</Link></h3>
        <h3><Link to="/analytics">Analytics</Link></h3>
      </div>
      <div className="flex gap-5 flex-1 justify-end">
        <SearchBar placeholder="search..." textColor="white"/>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-white"/>
          <h1 className="text-white">Hilmi Muzhaffar</h1>
        </div>
      </div>
    </nav>
  )
}