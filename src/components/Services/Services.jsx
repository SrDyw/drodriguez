import React from "react";
import SectionTitle from "../SectionTitle";
import "./Services.css";
import ServicesCard from "./ServicesCard";
import { services } from "../../models/constants";

export default function Services() {
  return (
    <section id="services">
      <SectionTitle title={"Servicios"} />
      <h2 style={{ textAlign: "center", color: "var(--text-body-color) ", lineHeight:"1.4rem"}}>
        Disponemos de una amplia gama de servicios para usted
      </h2>
      <div className="services_container">
        {services.map((s, key) => (
          <ServicesCard resumen={s.resumen} desc={s.description} key={key} />
        ))}
      </div>
    </section>
  );
}
