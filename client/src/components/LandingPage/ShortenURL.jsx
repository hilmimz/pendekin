import InputField from "../InputField"
import { useState } from "react"

export default function ShortenURL() {
  const [isCustomAlias, setIsCustomAlias] = useState(false)

  function handleCheckboxChaange(e) {
    setIsCustomAlias(e.target.checked)
  }

  return(
    <div className="bg-white text-black p-5 rounded-xl mx-30 my-10 min-w-[650px]">
      <h1 className="font-bold pb-5 text-lg">Shorten your long URL</h1>
      <div className="flex justify-around gap-5 pb-5">
        <div className="url-input basis-2/3">
          <h3>Paste your long URL here</h3>
          <InputField placeholder="Drop url here..."/>
        </div>
        <div className={`alias-input basis-1/3 transition-all duration-300 overflow-hidden ${isCustomAlias ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
          <h3>Customize your alias here</h3>
          <InputField placeholder="ex: best-shorturl" disabled={!isCustomAlias}/>
        </div>
      </div>
      <div className="flex gap-1 items-center pb-1">
        <h3>Need to customize the link?</h3>
        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" checked={isCustomAlias} onChange={handleCheckboxChaange}/>
      </div>
      <button className="bg-accent w-full p-1 rounded-sm font-medium hover:bg-accent-hover cursor-pointer">Shorten for free →</button>
    </div>
  )
}