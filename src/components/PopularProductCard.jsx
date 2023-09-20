import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden w-[17.5rem]  md:w-[17.5rem] max-sm:h-auto relative after:bg-red-300 group rounded-3xl cursor-pointer">
        <div className="absolute w-full h-full bg-black/20 flex justify-center items-center -bottom-[100%] group-hover:bottom-0 transition-all duration-300">
          <button className="bg-coral-red text-white font-montserrat font-medium text-xl py-2 px-4 rounded-full hover:scale-105">
            Add to Cart
          </button>
        </div>
        <img src={imgURL} alt="" className="" />
      </div>
      <div className="mt-4 flex justify-start gap-2.5">
        <img src={star} alt="ratio icon" width={24} height={24} />
        <p className="text-slate-gray leading-normal font-montserrat text-xl">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-bold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-xl font-montserrat text-coral-red font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
