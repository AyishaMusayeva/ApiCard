import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GloabalProvaider } from "./contetx/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GloabalProvaider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GloabalProvaider>
);
