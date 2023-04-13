import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const existingToken = localStorage.getItem("id")
  const [token, setToken] = useState(existingToken);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    
    localStorage.setItem("id",token);
    setToken(token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("id")
    setToken(null);
  };
  const authContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
