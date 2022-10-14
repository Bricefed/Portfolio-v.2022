import Number from "../Number";
import Texts from "./Texts";
import Email from "./Email";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="contact">
      <Number value={3} />
      <Texts
        first="Envie de travailler ensemble?"
        second="Envoyer moi un message!"
      />
      <Email value="hello@bricefedou.com" />
      <Socials />
    </section>
  );
};

export default Contact;
