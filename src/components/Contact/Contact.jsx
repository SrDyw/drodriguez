import React from "react";
import SectionTitle from "../SectionTitle";
import "./Contact.css";

import { IoIosArrowUp, IoLogoWhatsapp, IoMdArrowDropleftCircle } from "react-icons/io";
import { open_whatsap } from "../../utils/utils";


export default function Contact() {
  return (
    <section id="contact">
      <SectionTitle title={"Contacto"} />
      <div className="contact_content">
        <div className="w_logo flex-center">
          <IoLogoWhatsapp />
        </div>
        <p>
          {
            "No dude en contactarnos a través de WhatsApp, Será un placer atenderle y ayudarle a convertir sus proyectos en realidad"
          }
        </p>
        <button className="button" onClick={() => open_whatsap()}>
          Contactar
        </button>
      </div>
    </section>
  );
}
