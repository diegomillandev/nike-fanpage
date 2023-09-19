import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="" className="w-[17.5rem] h-[17.5rem]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="ratio icon" width={24} height={24} />
        <p className="text-slate-gray leading-normal font-montserrat text-xl">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl font-bold leading-normal font-palanquin">{name}</h3>
      <p className="mt-2 text-xl font-montserrat text-coral-red font-semibold">{price}</p>
    </div>
  );
};

export default PopularProductCard;
