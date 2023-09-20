const Button = ({ label, iconURL }) => {
  return (
    <button className="inline-flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none font-montserrat bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconURL && <img src={iconURL} alt="button icon" />}
    </button>
  );
};

export default Button;
