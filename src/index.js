import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import "./scss/_icons.scss";
import "./scss/_fonts.scss";
import "./scss/_spaces.scss";
import "./scss/_nav.scss";
import "./scss/_modal.scss";
import "./scss/_buttons.scss";
import "./scss/_loading-indicator.scss";
import "./scss/_error-indicator.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
