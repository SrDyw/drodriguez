import React from "react";
import SectionTitle from "../SectionTitle";
import "./Offers.css";
import OfferCard from "./OfferCard";

export default function Offers() {
  const offers = [
    {
      title: "Documentacion de Trabajo",
      desc: "Usted puede contratarnos sólo la Elaboración de la documentación de trabajo necesaria para el tipo de reparación que  desea realizar: esquemas, tarea técnica y presupuesto. Usted  busca  su  propio Constructor.",
      keywords: ['Usted', 'busca  su  propio Constructor', 'Elaboración de la documentación']
    },
    {
      title: "Gestión Integral de Construcción",
      desc: "Usted puede contratarnos  la Solución y Elaboración de la Documentación de trabajo y el Control de la  Calidad de  ejecución, de los trabajos a realizar por el Constructor que usted contrate.",
      keywords: ['Usted', 'Solución y Elaboración']

    },
    {
      title: "LLave en mano",
      desc: "Incluye, la Solución Completa, con  Control de Calidad de la ejecución y un Presupuesto a la medida.  Nosotros contratamos el Constructor.",
      keywords: ['Solución Completa', 'Nosotros contratamos el Constructor']

    },
    {
      title: "Control de Calidad",
      desc: "Puede contratarnos sólo el Control de Calidad de los trabajos que usted contrató y del estricto cumplimiento del Presupuesto que conveniaron usted y el Constructor de su elección.",
      keywords: ['Control de Calidad']

    },
  ];
  return (
    <section id="offers">
      <SectionTitle title={"Ofertas"} />
      <h2 className="section-subtitle">
        Tenemos varias ofertas para usted, infórmese y seleccione la{" "}
        <span className="subtitle-highlight">oferta de su interés</span>{" "}
      </h2>
      <div className="offers_container">
        {offers.map((o, key) => (
          <OfferCard offer={o} key={key} id={key} keywords={o.keywords}/>
        ))}
      </div>
    </section>
  );
}
