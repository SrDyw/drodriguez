import React, { useContext } from "react";
import "./ServicesModalCard.css";
import { ModalContext } from "../context/ModalContext";
import { GlobalContext } from "../context/GlobalContext";
import BussinesName from "../BussinesName";

export const ServiceCardModal = ({ resumen, desc }) => {
  const { cardModal, setCardModal } = useContext(ModalContext);
  const { modalState, setModalState } = useContext(GlobalContext);


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
            <p>
              {desc.split("|").map((d, key) => (
                <span key={key}>{d != "n" ? d : <BussinesName type={'span'}/>}</span>
              ))}
            </p>
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
