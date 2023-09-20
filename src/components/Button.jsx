const Button = ({ label, iconURL, bgColor, textColor, borderColor }) => {
  return (
    <button className={`inline-flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none font-montserrat rounded-full ${bgColor} ${textColor} ${borderColor}`}>
      {label}
      {iconURL && <img src={iconURL} alt="button icon" />}
    </button>
  );
};

export default Button;
