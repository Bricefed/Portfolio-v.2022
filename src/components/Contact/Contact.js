import { useState } from "react";
import Number from "../Number";
import Social from "./Social";
import { dataSocial } from "../../data/contact/social";

const Contact = () => {
  const [social] = useState(dataSocial);

  return (
    <section className="contact">
      <Number value={3} />
      <div className="texts">
        <p>Envie de travailler ensemble ?</p>
        <p>Envoyer moi un message !</p>
      </div>
      <div className="email">hello@brice fedou.com</div>
      <div className="container-social">
        {social.map((social) => (
          <Social
            key={social.id}
            img={social.img}
            title={social.title}
            link={social.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
