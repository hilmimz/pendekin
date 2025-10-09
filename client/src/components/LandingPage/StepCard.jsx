export default function StepCard({number, title, description}) {
  return(
    <div className="flex gap-6 min-w-60 max-w-60 hover:bg-primary hover:text-white p-2 rounded-lg duration-200">
      <h1 className="text-lg font-bold">{number}</h1>
      <div className="flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  )
}