export default function Button({title}) {
  return(
    <>
      <button className="bg-primary w-full p-2 text-white rounded-sm cursor-pointer hover:bg-primary-hover duration-200">{title}</button>
    </>
  )
}