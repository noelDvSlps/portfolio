/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggle,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavbarContext);
};
