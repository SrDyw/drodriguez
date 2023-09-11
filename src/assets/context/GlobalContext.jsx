import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [modal, setModal] = useState({ open: false, title: "", desc: "" });

  return (
    <GlobalContext.Provider value={{ modal, setModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
