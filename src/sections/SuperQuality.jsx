import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col space-y-6">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="View details" bgColor={"bg-coral-red"} textColor={"text-white"} borderColor={"border-coral-red"} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe" width={512} height={512} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
