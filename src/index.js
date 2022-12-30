import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <p>
        <a href="/">Open-source code</a> by Mariana Koval
      </p>
    </div>
  </StrictMode>
);
