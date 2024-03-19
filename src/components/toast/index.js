import React, { createContext, useContext, useState } from "react";
import { Toast, ToastContainer } from "./style";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState([]);
  const [idx, setIdx] = useState(0);

  const showToast = (message, type) => {
    setToast([...toast, { message, type, idx }]);
    setIdx(idx + 1);
    setTimeout(() => {
      setToast((prevToast) => prevToast.filter((item) => item.idx !== idx));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastContainer>
        {toast.length &&
          toast.map(({ message, type, idx, index }) => (
            <Toast className={type} position={index * 60}>
              {message}
            </Toast>
          ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};
