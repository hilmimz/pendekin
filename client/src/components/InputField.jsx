export default function InputField({type="text", placeholder="", className="", disabled=false, name="", id="", value="", onChange=""}) {
  return(
    <input className={`bg-white placeholder:text-slate-400 border-1 border-gray-300 hover:border-gray-400 rounded-sm py-2 px-1 w-full duration-150 ${className}`} placeholder={placeholder} type={type} disabled={disabled} name={name} id={id} value={value} onChange={onChange}/>
  )
}