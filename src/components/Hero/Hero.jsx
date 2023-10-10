import { IoLogoWhatsapp } from "react-icons/io";
import { bussines_info } from "../../models/constants";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="flex-center col hero" id="home">
      <h1>{bussines_info.name}</h1>
      <h2>{bussines_info.desc}</h2>
      <p>{bussines_info.complement_desc}</p>
      <div className="hero_buttons">
        <a className="flex-center g-5" href="#contact">
          Contactar
          <span>
            <IoLogoWhatsapp className="icon" />
          </span>
        </a>
        <a className="header_btn_more" href="#services">
          Servicios
        </a>
      </div>
    </section>
  );
}
