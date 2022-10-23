import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>Make european cities blue and north american cities red from a CSS</p>

      <ul>
        <li>Sydney</li>
        <li className="european">Paris</li>
        <li className="north-american">Montreal</li>
        <li className="european">Lisbon</li>
        <li className="north-american">San Francisco</li>
      </ul>
    </div>
  </StrictMode>
);
