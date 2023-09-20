import { Button } from "../components";

const Subscribe = () => {
  return (
    <section className="max-container flex gap-16 md:gap-0 flex-col md:flex-row  justify-evenly items-center">
      <h2 className="text-4xl font-bold max-w-md max-md:text-center inline-block">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <div className="w-full border border-slate-gray max-w-lg rounded-full inline-flex pl-3 py-1 px-1 overflow-hidden  justify-between">
        <input
          type="email"
          placeholder="sucribe@nike.com"
          className="w-full outline-none bg-transparent text-lg text-slate-gray"
        />
        <Button
          label={"Subscribe"}
          bgColor={"bg-coral-red"}
          textColor={"text-white"}
          borderColor={"border-red-color"}
        />
      </div>
    </section>
  );
};

export default Subscribe;
