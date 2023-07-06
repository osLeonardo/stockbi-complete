import React, { createContext } from "react";
import { useAddress } from "../hooks/useAddress";

const Context = createContext();

const AddressProvider = ({ children }) => {
  const { registerAddress } = useAddress();

  return (
    <Context.Provider value={{ registerAddress }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AddressProvider }