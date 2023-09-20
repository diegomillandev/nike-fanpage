import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          alt="image offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-6 info-text ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex gap-5 flex-col-reverse md:flex-row">
          <Button label="Shop now" iconURL={arrowRight} bgColor={"bg-coral-red"} textColor={"text-white"} borderColor={"border-coral-red"}/>
          <Button label="Learn more" bgColor={""} textColor={"text-slate-gray"} borderColor={"border-slate-gray"}/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
