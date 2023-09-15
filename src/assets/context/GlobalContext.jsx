import React, { createContext, useEffect, useState } from "react";
import { STATES } from "../../models/types";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [modalState, setModalState] = useState({ open: false });
  const [copied, setCopied] = useState(STATES.DISABLE);

  useEffect(() => {
    if (copied == STATES.ENABLE) {
      setTimeout(() => {
        setCopied(STATES.DISABLE)
      }, 2000);
    } 
  }, [copied]);

  return (
    <GlobalContext.Provider value={{ modalState, setModalState, setCopied, copied }}>
      {children}
    </GlobalContext.Provider>
  );
}
