import { useState } from "react";
import { dataServices } from "../../data/services/services";
import Number from "../Texts/Number";
import Label from "../Texts/Label";
import TitleH4 from "./TitleH4";
import Description from "./Description";

const Services = () => {
  const [services] = useState(dataServices);

  return (
    <section id="services">
      <Number value="1" />
      <div className="texts-container">
        {services.map((service, k) => {
          return (
            <div className="individual-block" key={k}>
              <TitleH4 title={service.title} />
              <Description description={service.description} />
            </div>
          );
        })}
      </div>
      <Label name="Mes services" section="services" />
    </section>
  );
};

export default Services;
