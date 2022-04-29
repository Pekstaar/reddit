import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={Login} />
      <App />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
