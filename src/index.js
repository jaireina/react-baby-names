import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NamesProvider } from "./providers/names";
import { AppStateProvider } from "./providers/app-state";
import "normalize-css";
import "./css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
