import React from "react";
import SectionTitle from "../SectionTitle";

export default function Offers() {
  return (
    <section>
      <SectionTitle title={"Ofertas"} />
      <h2 className="section-subtitle">
        Tenemos varias ofertas para usted, infórmese y seleccione la{" "}
        <span className="subtitle-highlight">oferta de su interés</span> {" "}
      </h2>
    </section>
  );
}
