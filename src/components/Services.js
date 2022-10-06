import React from "react";

const Services = () => {
  return (
    <section className="services">
      <h3 className="number">
        01
        <img src={"./icons/triangle.png"} alt="Triangle" className="triangle" />
      </h3>
      <div className="text-container">
        <div>
          <h4>Ux / ui</h4>
          <p className="description">
            Avant de créer un produit, il est important d'avoir un design. C'est
            pourquoi je travaille avec mes clients à partir de zéro et ma
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
      <h6>Mes services</h6>
    </section>
  );
};

export default Services;
