import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";
import Plans from "../components/Plans";
import ContactForm from "../components/ContactForm";

function PlansPage() {
  return (
    <div className="plans-page">
      <div className="plans-page-title-cont">
        <h1 className="plans-page-title">
          Conéctate a la mejor velocidad al mejor precio.
        </h1>
      </div>
      <div className="plans-page-subtitle-cont">
        <h3 id="plans" className="plans-page-subtitle">
          Planes pensados para ti, sin contratos largos ni letras pequeñas.
        </h3>
      </div>
      <Plans />
      <h3 id="contactForm" className="plans-page-subtitle-footer">
        Todos nuestros planes cuentan con:
      </h3>
      <div className="plans-page-footer">
        <div className="plans-page-benefits">
          <h3>Fibra óptica</h3>
          <p>
            La ventaja de tener la velocidad de la luz hasta la puerta de tu
            casa.
          </p>
        </div>
        <div className="plans-page-benefits">
          <h3>Wifi 6</h3>
          <p>La maxima velocidad inlambrica y cobertura en todo tu hogar.</p>
        </div>
        <div className="plans-page-benefits">
          <h3>Meses gratis</h3>
          <p>
            Consigue un mes gratis por cada cliente que contrate traido por ti.
          </p>
        </div>
        <div className="plans-page-benefits">
          <h3>Cobertura total</h3>
          <p>
            Contacta con nosotros para contratar los repetidores que necesites
            para tener cobertura en donde necesites.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default PlansPage;
