import React, { createContext, useContext, useEffect, useState } from "react";
import { ServiceCardModal } from "../../components/ServiceCardModal";
import { GlobalContext } from "./GlobalContext";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [cardModal, setCardModal] = useState({resumen:'', desc:''});
  const { modalState } = useContext(GlobalContext);

  useEffect(() => {
    if (modalState.open) {
      document.body.classList.add("no-scroll");
      return;
    }
    document.body.classList.remove("no-scroll");
  }, [modalState]);

  return (
    <ModalContext.Provider value={{ cardModal, setCardModal }}>
      {cardModal && (
        <ServiceCardModal resumen={cardModal.resumen} desc={cardModal.desc} />
      )}
      {children}
    </ModalContext.Provider>
  );
}
