import React from "react";
import SectionTitle from "../SectionTitle";
import "./Services.css";
import ServicesCard from "./ServicesCard";
import { services } from "../../models/constants";
import ServicesCardNew from "./ServicesCardNew";
import SectionSubTitle from "../SectionSubTitle";

export default function Services() {
  return (
    <section id="services">
      <SectionTitle title={"Servicios"} />
      <h2 className="section-subtitle">
        Disponemos de una amplia gama de Servicios de{" "}
        <span className="subtitle-highlight">Reparaciones Constructivas</span>
      </h2>
      <div className="services_container">
        {services.map((s, key) => (
          <ServicesCardNew main={s.main} complement={s.complement} key={key} />
        ))}
      </div>
    </section>
  );
}
