import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[7.5rem] h-[7.5rem]"
      />
      <p className="info-text text-center max-w-sm mt-6">{feedback}</p>
      <div className="mt-2 flex justify-start gap-2.5">
        <img src={star} alt="ratio icon" width={24} height={24} />
        <p className="text-slate-gray leading-normal font-montserrat text-xl">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-bold leading-normal font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
