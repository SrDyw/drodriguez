import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [modalState, setModalState] = useState({ open: false });

  return (
    <GlobalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </GlobalContext.Provider>
  );
}
