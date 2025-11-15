export default function Button({title, loading}) {
  return(
    <>
      <button disabled={loading ? true : false} className={`${loading ? 'bg-gray-100 text-gray-300 cursor-default' : 'bg-primary cursor-pointer hover:bg-primary-hover text-white'}  w-full p-2 rounded-sm duration-200`}>{title}</button>
    </>
  )
}