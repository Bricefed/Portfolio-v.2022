import { useContext, useState } from "react";
import Number from "../Number";
import Social from "./Social";
import { dataSocial } from "../../data/contact/social";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CursorContext } from "../../context/CursorContext";

const Contact = () => {
  const [social] = useState(dataSocial);

  const { copyText } = useContext(CursorContext);

  return (
    <section id="contact" className="contact">
      <Number value={3} />
      <div className="texts">
        <p>Envie de travailler ensemble ?</p>
        <p>Envoyer moi un message !</p>
      </div>
      <CopyToClipboard text={"hello@bricefedou.com"}>
        <div className="email" onClick={copyText}>
          hello@bricefedou.com
        </div>
      </CopyToClipboard>
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
