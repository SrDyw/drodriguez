import React, { createContext, useEffect, useState } from "react";
import { ServiceCardModal } from "../../components/ServiceCardModal";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [cardModal, setCardModal] = useState();

  useEffect(() => {
    if (cardModal?.open) {
      document.body.classList.add("no-scroll");
      return;
    }

    document.body.classList.remove("no-scroll");
  }, [cardModal]);

  return (
    <ModalContext.Provider value={{ cardModal, setCardModal }}>
      {cardModal && 
        <ServiceCardModal resumen={cardModal.resumen} desc={cardModal.desc} />
      }
      {children}
    </ModalContext.Provider>
  );
}
