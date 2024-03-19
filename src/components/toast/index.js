import React, { createContext, useContext, useState } from "react";
import { Toast } from "./style";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const [type, setType] = useState(null);

  const showToast = (message, type) => {
    setToast(message);
    setType(type);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && <Toast className={type}>{toast}</Toast>}
    </ToastContext.Provider>
  );
};
