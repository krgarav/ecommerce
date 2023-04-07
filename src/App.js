import React from "react";
import "./App.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
const router = createBrowserRouter([
  { path: "/about", element: <About /> },
  { path: "/", element: <Home /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
