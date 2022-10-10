import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./main.css";

const container = document.getElementById("main");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
