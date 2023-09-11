import React, { useContext } from "react";
import "./ServicesModalCard.css";
import { ModalContext } from "../assets/context/ModalContext";

export const ServiceCardModal = ({ resumen, desc }) => {
  const { cardModal, setCardModal } = useContext(ModalContext);
  return (
    <div
      className={`card_modal flex-center ${
        cardModal.open ? "modal_active" : ""
      }`}
    >
      <div className="card_modal_container flex-center">
        <div className="card_modal_body">
          <h2>{resumen}</h2>
          <div className="card_desc">
            <p>{desc}</p>
          </div>
          <button
            className="button"
            onClick={() => setCardModal((prev) => ({ ...prev, open: false }))}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
