import Button from "./Button"
import Tag from "./Tag"
import { faCopy, faQrcode, faPen, faEllipsis, faCalendar, faTags } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Card(params) {
  return(
    <section className="bg-white flex-col p-5">
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-start">
          <input type="checkbox" name="selected" id="" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
          <label htmlFor="selected"></label>
          <div className="flex-col">
            <h1 className="font-bold text-lg">pendekin.com</h1>
            <p className="font-bold text-tertiary">pendekin.com/best-app</p>
            <p className="text-sm">https://pendekin.com</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button title="Active" icon={faCopy} classname="bg-accent hover:bg-accent-hover text-black"/>
          <Button title="Show QR" icon={faQrcode} classname="bg-white hover:bg-gray-200 text-black border border-gray-300"/>
          <Button title="" icon={faPen} classname="bg-white hover:bg-gray-200 text-black border border-gray-300"/>
          <Button title="" icon={faEllipsis} classname="bg-white hover:bg-gray-200 text-black border border-gray-300 rounded-full"/>
        </div>
      </div>
      <div className="flex gap-5 pt-15">
        <p><FontAwesomeIcon icon={faCalendar}/> 14 Oct 2025</p>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faTags}/>
          <Tag title="social media"/>
        </div>
      </div>
    </section>
  )
}