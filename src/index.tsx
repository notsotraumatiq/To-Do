import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import "./main.css";

const container = document.getElementById("main");
if (container) {
  const root = createRoot(container);
  // <BrowserRouter>
  root.render(<App />);
  // </BrowserRouter>;
}
