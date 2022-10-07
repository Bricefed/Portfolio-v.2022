import React from "react";
import Number from "./Number";
import Label from "./Label";

const Services = () => {
  return (
    <section className="services">
      <Number value="1" />
      <div className="text-container">
        <div>
          <h4>Ux / ui</h4>
          <p className="description">
            Avant de créer un produit, il est important d'avoir un design. C'est
            pourquoi je travaille avec mes cli ents à partir de zéro et ma
            première étape est de créer une version design du futur produit.
          </p>
        </div>
        <div>
          <h4>Développement</h4>
          <p className="description">
            Une fois le design prêt, il est temps de donner vie à votre concept.
            C'est alors que mes compétences en programmation seront nécessaires.
            Je transforme toutes les conceptions en produits finis de haute
            qualité avec un contrôle au pixel près.
          </p>
        </div>
      </div>
      <Label name="Mes services" />
    </section>
  );
};

export default Services;
