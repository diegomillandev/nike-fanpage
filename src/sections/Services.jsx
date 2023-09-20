import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container grid gap-8 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
