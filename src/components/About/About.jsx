import React from "react";
import SectionTitle from "../SectionTitle";
import { bussines_info } from "../../models/constants";
import AboutCard from "./AboutCard";
import "./About.css";
import KeywordHighlighter from "../KeywordHighlighter";

export default function About() {
  return (
    <section id="more">
      <SectionTitle title={"Quienes somos"} />
      <div className="about_content">
        <KeywordHighlighter
          text={
            "Somos una familia de constructores y amigos jubilados de la construcción. Contamos con la experiencia que nos dió la vida en el Sector. Consúltenos sobre la reparación  que desea hacer y aclare sus dudas."
          }
          keywords={[
            "jubilados de la construcción",
            "experiencia",
            "Consúltenos",
          ]
        }
        elementClass="about_desc"
        />
      </div>
    </section>
  );
}
