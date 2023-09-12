import React from "react";
import SectionTitle from "../SectionTitle";
import { bussines_info } from "../../models/constants";
import AboutCard from "./AboutCard";
import './About.css'

export default function About() {
  return (
    <section id="more">
      <SectionTitle title={"Conócenos"} />
      <div className="about_content">
        {bussines_info.about.map((a, key) => (
          <AboutCard title={a.title} desc={a.desc} key={key}/>
        ))}
      </div>
    </section>
  );
}
