import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
