import React, { createContext, useContext, useState } from "react";
// import { ToastContainer } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    toast.success("Logged In successfully !", {
        position: toast.POSITION.TOP_CENTER
      });
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastContainer />
      {/* {toastMessage && <div>{toastMessage}</div>} */}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
