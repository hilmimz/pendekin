export default function Navbar() {
  return(
    <nav className="flex justify-between items-center content-start py-3 px-[20vw] bg-primary">
      <h1 className="font-extrabold text-3xl text-secondary">PENDEKIN</h1>
      <ul className="flex items-center gap-x-10 text-white">
        <li className="font-medium cursor-pointer">Features</li>
        <li className="font-medium cursor-pointer">How To Use?</li>
        <li>
          <button className="font-semibold px-7 py-1 bg-neutral-gray rounded-sm border border-primary hover:bg-neutral-gray-hover hover:border-white duration-200 cursor-pointer">Login</button>
        </li>
        <li>
          <button className="font-semibold px-7 py-1 bg-tertiary text-black rounded-sm border border-primary hover:bg-tertiary-hover hover:border-white duration-200 cursor-pointer">Register</button>
        </li>
        </ul>
    </nav>
  )
}