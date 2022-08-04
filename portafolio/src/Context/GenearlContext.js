import React from "react";
import { createContext, useContext } from "react";

//crea el contexto
const GeneralContext = createContext({});
//retorna info del contexto
const useGeneralContext = () => useContext(GeneralContext);

//Crear proovedor del contexto
const GeneralProvider = ({ children, value }) => {
  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};

export { GeneralContext, useGeneralContext, GeneralProvider };
