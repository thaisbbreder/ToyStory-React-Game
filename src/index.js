import React from "react";
import ReactDOM from "react-dom/client";
import MemoryGame from "./MemoryGame";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
);

reportWebVitals();
