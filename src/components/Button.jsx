const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none font-montserrat bg-coral-red rounded-full text-white border-coral-red">
        {label}
        <img src={iconURL} alt="" />
    </button>
  )
}

export default Button
