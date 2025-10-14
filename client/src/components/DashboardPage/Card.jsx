import { useState } from "react"
import InputField from "../InputField"
import { QRCodeCanvas } from "qrcode.react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faD, faDownload } from "@fortawesome/free-solid-svg-icons"

export default function Card(params) {
  const [isCustomAlias, setIsCustomAlias] = useState(false)

  function handleCheckboxChaange(e) {
    setIsCustomAlias(e.target.checked)
  }


  return(
    <section className="bg-white p-10 w-[800px] mx-auto mt-10 rounded-xl">
      <header className="text-2xl font-bold">Quick create short link</header>
      <p className="mt-5">Domain: <span className="font-bold">pendekin.com</span></p>
      <form action="">
        <div className="flex justify-around gap-5 pb-5 mt-5">
          <div className="url-input basis-2/3">
            <label htmlFor="url">Paste your long URL here</label>
            <InputField placeholder="Drop url here..." id="url" name="url"/>
          </div>
          <div className={`alias-input basis-1/3 transition-all duration-300 overflow-hidden ${isCustomAlias ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
            <label htmlFor="alias">Customize your alias here</label>
            <InputField placeholder="ex: best-shorturl" disabled={!isCustomAlias} id="alias" name="alias"/>
          </div>
        </div>
        <div className="flex gap-3 items-center pb-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="alias-checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" checked={isCustomAlias} onChange={handleCheckboxChaange}/>
            <label htmlFor="alias-checkbox">Need to customize the link?</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" id="qrcode-checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
            <label htmlFor="qrcode-checkbox">Also create QR Code?</label>
          </div>
        </div>
        <button className="bg-accent w-full p-1 rounded-sm font-medium hover:bg-accent-hover cursor-pointer duration-200">Pendekin</button>
      </form>
      <div className="flex flex-col items-center justify-center mt-10 gap-1">
        <h1>Your short URL is ready:</h1>
        <a href="pendekin.com/best-app" className="font-bold">pendekin.com/best-app</a>
        <QRCodeCanvas
          value="https://pendekin.vercel.app"
          size={200}
        />
        <button className="bg-secondary text-white mt-5 py-1 px-5 rounded-sm cursor-pointer hover:bg-secondary-hover">Save <FontAwesomeIcon icon={faDownload}/></button>
      </div>
      
    </section>
  )
}