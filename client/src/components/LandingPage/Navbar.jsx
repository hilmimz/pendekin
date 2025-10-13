import {Link as ScrollLink} from "react-scroll"
import { Link } from "react-router-dom"

export default function Navbar() {
  return(
    <nav className="flex justify-between items-center content-start py-3 px-[20vw] bg-primary">
      <h1 className="font-extrabold text-3xl text-secondary"><a href="">PENDEKIN</a></h1>
      <ul className="flex items-center gap-x-10 text-white">
        <li className="font-medium cursor-pointer"><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
        <li className="font-medium cursor-pointer"><ScrollLink to="how-to-use" smooth={true} duration={500}>How To Use?</ScrollLink></li>
        <li>
          <button className="font-semibold px-7 py-1 bg-neutral-gray rounded-sm border border-primary hover:bg-neutral-gray-hover hover:border-white duration-200 cursor-pointer"><Link to="/login">Login</Link></button>
        </li>
        <li>
          <button className="font-semibold px-7 py-1 bg-tertiary text-black rounded-sm border border-primary hover:bg-tertiary-hover hover:border-white duration-200 cursor-pointer">Register</button>
        </li>
        </ul>
    </nav>
  )
}