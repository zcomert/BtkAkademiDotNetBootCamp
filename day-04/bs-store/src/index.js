import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./context/ContextApplication";


const root = ReactDOM.createRoot(document.getElementById("root"));
const values = {
  theme: 'light',
  message: 'selam'
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext.Provider value={values}>
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
