import { IoLogoWhatsapp } from "react-icons/io";

export default function Hero() {
  return (
    <div className="hero flex-center col">
      <h1 className>D'Rodriguez</h1>
      <p>
        Trabajos de reparación, modernización y acondicionamiento de pequeñas
        edificaciones
      </p>
      <button className="flex-center g-5">
        Contactar{" "}
        <span>
          <IoLogoWhatsapp />
        </span>
      </button>
      <button className="header_btn_more">Ver mas</button>
    </div>
  );
}
