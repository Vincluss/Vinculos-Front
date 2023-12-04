import React, { useContext, useState } from "react";

const ButtonMenuContext = React.createContext();

export function ButtonMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const value = {
    isOpen,
    setIsOpen,
    isVisible,
    setIsVisible,
  };

  return (
    <ButtonMenuContext.Provider value={value}>
      {children}
    </ButtonMenuContext.Provider>
  );
}

export function useButtonMenu() {
  return useContext(ButtonMenuContext);
}
