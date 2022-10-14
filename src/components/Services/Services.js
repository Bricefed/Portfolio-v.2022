import { useState } from "react";
import Number from "../Number";
import Label from "../Label";
import Service from "../Services/Service";
import { dataServices } from "../../data/home/services";

const Services = () => {
  const [services] = useState(dataServices);

  return (
    <section id="services">
      <Number value="1" />
      <div className="text-container">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <Label name="Mes services" section="services" />
    </section>
  );
};

export default Services;
