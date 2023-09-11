import React, { createContext, useState } from 'react'
import { ServiceCardModal } from '../../components/ServiceCardModal';

export const ModalContext = createContext();

export default function ModalContextProvider({children}) {
    const [cardModal, setCardModal] = useState();
  return (
    <ModalContext.Provider value={{cardModal, setCardModal}}>
        {cardModal && <ServiceCardModal resumen={cardModal.resumen} desc={cardModal.desc}/>}
        {children}
    </ModalContext.Provider>
  )
}
