import React from "react";
import SectionTitle from "../SectionTitle";
import "./Services.css";
import ServicesCard from "./ServicesCard";
import { services } from "../../models/constants";
import ServicesCardNew from "./ServicesCardNew";

export default function Services() {
  return (
    <section id="services">
      <SectionTitle title={"Servicios"} />
      <h2
        style={{
          textAlign: "center",
          color: "var(--text-body-color) ",
          lineHeight: "1.4rem",
        }}
      >
        Disponemos de una amplia gama de Servicios de Reparaciones Constructivas
      </h2>
      <div className="services_container">
        {services.map((s, key) => (
          <ServicesCardNew resumen={s.resumen} desc={s.description} key={key} />
        ))}
      </div>
    </section>
  );
}
