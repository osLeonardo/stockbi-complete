import React, { createContext } from "react";
import { useEstablishment } from '../hooks/useEstablishment';

const Context = createContext();

const EstablishmentProvider = ({ children }) => {
  const { register, establishment, registered } = useEstablishment();

  return (
    <Context.Provider value={{ register, establishment, registered }}>
      {children}
    </Context.Provider>
  );
};

export { Context, EstablishmentProvider }