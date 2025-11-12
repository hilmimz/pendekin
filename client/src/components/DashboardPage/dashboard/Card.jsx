import { useState } from "react"
import InputField from "../../InputField"
import { QRCodeCanvas } from "qrcode.react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { shortenURL } from "../../../lib/api"

export default function Card() {
  const [isCustomAlias, setIsCustomAlias] = useState(false)
  const [url, setUrl] = useState("")
  const [alias, setAlias] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [isShowQr, setIsShowQr] = useState(false)
  const [showQr, setShowQr] = useState(false)

  function handleCheckboxChaange(e) {
    setIsCustomAlias(e.target.checked)
  }

  function handleQrChecbox(e) {
    setIsShowQr(e.target.checked)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setResult("")
    setAlias("")
    setUrl("")

    if (isShowQr) {
      setShowQr(true)
    }

    try {
      const data = await shortenURL({original_url: url, alias})
      setResult(data.short_link)
      // await new Promise(r => setTimeout(r, 4000))
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }


  return(
    <section className="bg-white p-10 w-[800px] mx-auto mt-10 rounded-xl">
      <header className="text-2xl font-bold">Quick create short link</header>
      <p className="mt-5">Domain: <span className="font-bold">pendekin.com</span></p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around gap-5 mt-5">
          <div className="url-input basis-2/3">
            <label htmlFor="url">Paste your long URL here</label>
            <InputField placeholder="Drop url here..." id="url" name="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
          </div>
          <div className={`alias-input basis-1/3 transition-all duration-300 overflow-hidden ${isCustomAlias ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
            <label htmlFor="alias">Customize your alias here</label>
            <InputField placeholder="ex: best-shorturl" disabled={!isCustomAlias} id="alias" name="alias" value={isCustomAlias ? alias : ""} onChange={(e) => setAlias(e.target.value)}/>
          </div>
        </div>
        <p className="text-red-700 font-semibold">{error}</p>
        <div className="flex gap-3 items-center pb-1 pt-5">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="alias-checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" checked={isCustomAlias} onChange={handleCheckboxChaange}/>
            <label htmlFor="alias-checkbox">Need to customize the link?</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" id="qrcode-checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" checked={isShowQr} onChange={handleQrChecbox}/>
            <label htmlFor="qrcode-checkbox">Also create QR Code?</label>
          </div>
        </div>
        <button type="submit" disabled={loading || url == "" ? "true" : "false"} className={`${loading || url == "" ? 'bg-gray-100 text-gray-400 cursor-default' : 'bg-accent cursor-pointer hover:bg-accent-hover'} w-full p-1 rounded-sm font-medium duration-200`}>{loading ? "Processing.." : "Pendekin"}</button>
      </form>
      {result && (
      <div className="flex flex-col items-center justify-center mt-10 gap-1">
        <h1>Your short URL is ready:</h1>
        <a href={result} className="font-bold">{result}</a>
        {showQr && (
          <>
            <QRCodeCanvas value={result} size={200}/>
            <button className="bg-secondary text-white mt-5 py-1 px-5 rounded-sm cursor-pointer hover:bg-secondary-hover">Save <FontAwesomeIcon icon={faDownload}/></button>
          </>
          )
        }
      </div>
      )}
      
    </section>
  )
}