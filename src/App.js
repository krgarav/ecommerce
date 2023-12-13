import React, { useContext } from "react";
import "./App.css";
// import About from "./Components/About/About";
import Store from "./Components/Store/Store";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Product from "./Components/Product/Product";
import LoginForm from "./Components/login/Loginform";
import AuthContext from "./Store/auth-context";
const LazyLoad = React.lazy(() => import("./Components/About/About"));
const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <React.Suspense fallback="Loading...">
            <LazyLoad />
          </React.Suspense>
        }
      />
      <Route path="/home" element={<Home />} />
      {authCtx.isLoggedIn && <Route path="/store" element={<Store />} />}
      {!authCtx.isLoggedIn && <Route path="/store" element={<LoginForm />} />}
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginForm />} />

      <Route path="/store/:productId/" element={<Product />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  );
};

export default App;
