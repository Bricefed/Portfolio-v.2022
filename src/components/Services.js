import { useState } from "react";
import Number from "./Number";
import Label from "./Label";
import { dataServices } from "../data/homeServices";
import SectionServices from "./SectionServices";

const Services = () => {
  const [services] = useState(dataServices);

  return (
    <section className="services">
      <Number value="1" />
      <div className="text-container">
        {services.map((service) => {
          return (
            <SectionServices
              key={service.id}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
      <Label name="Mes services" />
    </section>
  );
};

export default Services;
