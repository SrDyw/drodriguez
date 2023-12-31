import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { ModalContext } from "../context/ModalContext";

export default function ServicesCard({ resumen, desc }) {
  // const [openCardModal, setOpenCardModal] = useState(false);
  const{setCardModal} = useContext(ModalContext);
  const { setModalState } = useContext(GlobalContext);

  const handleButton = () => {
    setCardModal({resumen, desc});
    setModalState({open:true})
  };

  return (
    <div
      className={`service_card `}
    >
      <p style={{marginTop:"20px"}}>{resumen}</p>
      <span className="flex-center g-5" onClick={handleButton}>
        Ver mas
        <FaArrowRight />
      </span>
    </div>
  );
}
