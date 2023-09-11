import { IoLogoWhatsapp } from "react-icons/io";

export default function Hero() {
  return (
    <section className="flex-center col hero" id="home">
      <h1 className>D'Rodriguez</h1>
      <p>
        Trabajos de reparación, modernización y acondicionamiento de pequeñas
        edificaciones
      </p>
      <a className="flex-center g-5">
        Contactar
        <span>
          <IoLogoWhatsapp className="icon"/>
        </span>
      </a>
      <a className="header_btn_more" href="#services">Servicios</a>
    </section>
  );
}
