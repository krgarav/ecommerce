import React from "react";
import "./App.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/Store/Store";
import Home from "./Components/Home/Home";
const router = createBrowserRouter([
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
  {path:"/store" ,element:<Store/>},
  {path:"/" ,element:<Store/>}
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
