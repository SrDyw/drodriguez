import React, { useContext } from "react";
import { ModalContext } from "../assets/context/ModalContext";

export const ServiceCardModal = ({ resumen, desc }) => {
  const { setCardModal, cardModal } = useContext(ModalContext);
  return (
    <div
      className={`card_modal flex-center ${
        cardModal.open ? "modal_active" : ""
      }`}
    >
      <div className="card_modal_container flex-center">
        <div className="card_modal_body">
          <h2>{resumen}</h2>
          <p>{desc}</p>
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
