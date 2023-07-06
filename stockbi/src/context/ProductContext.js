import React, {createContext} from "react";
import productAuth from "../hooks/productAuth"

const ContextItem = createContext();

const UserProvider = ({ children }) => {
  const { createProduct, listProduct, getProduct, deleteProduct } = productAuth();

  return (
    <ContextItem.Provider value={{ createProduct, listProduct, getProduct, deleteProduct }}>
      {children}
    </ContextItem.Provider>
  )
}

export { ContextItem, UserProvider }