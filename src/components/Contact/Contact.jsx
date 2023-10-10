import React, { useContext } from "react";
import SectionTitle from "../SectionTitle";
import "./Contact.css";

import {
  IoIosArrowUp,
  IoLogoWhatsapp,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { copy_in_clipboard, open_whatsap } from "../../utils/utils";
import { bussines_info, bussines_texts } from "../../models/constants";
import { GlobalContext } from "../context/GlobalContext";
import { STATES } from "../../models/types";

export default function Contact() {
  const { copied, setCopied } = useContext(GlobalContext);

  const handleSpan = (e) => {
    if (copied == STATES.DISABLE) {
      copy_in_clipboard(e.target.innerHTML);
      setCopied(STATES.ENABLE);
    }
  };

  return (
    <section id="contact">
      <SectionTitle title={"Contacto"} />
      <div className="contact_content">
        <div className="w_logo flex-center">
          <IoLogoWhatsapp />
        </div>
        <p>
          {
            "No dude en contactarnos a través de WhatsApp, será un placer atenderle y ayudarle a convertir sus proyectos en realidad"
          }
        </p>
        <button className="button" onClick={() => open_whatsap()}>
          Contactar
        </button>
      </div>
      <p className="b_issues flex-center col">
        {bussines_texts.bottom_issues}
        <span className="contacts_container">
          <span className="contact_number"
            onClick={handleSpan}
          >{`${bussines_info.country_code.phone} ${bussines_info.contact_numbers[0]}`}</span>
          ó
          <span className="contact_number"
            onClick={handleSpan}
          >{`${bussines_info.country_code.phone} ${bussines_info.contact_numbers[1]}`}</span>
        </span>
      </p>
    </section>
  );
}
