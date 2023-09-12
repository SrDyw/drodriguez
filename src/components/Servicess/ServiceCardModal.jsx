import React, { useContext } from "react";
import "./ServicesModalCard.css";
import { ModalContext } from "../assets/context/ModalContext";
import { GlobalContext } from "../assets/context/GlobalContext";

export const ServiceCardModal = ({ resumen, desc }) => {
  const { cardModal, setCardModal } = useContext(ModalContext);
  const { modalState ,setModalState } = useContext(GlobalContext);
  return (
    <div
      className={`card_modal flex-center ${
        modalState.open ? "modal_active" : ""
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
            onClick={() => setModalState((prev) => ({ ...prev, open: false }))}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
