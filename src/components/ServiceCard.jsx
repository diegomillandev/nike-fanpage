
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="justify-self-center lg:w-[21.875rem] w-full rounded-[1.25rem] shadow-3xl px-10 py-10 space-y-4">
        <div className="bg-coral-red w-11 h-11 rounded-full flex justify-center items-center">
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className="text-2xl font-bold font-palanquin">{label}</h3>
        <p className="font-montserrat text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
