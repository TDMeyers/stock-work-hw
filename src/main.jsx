import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { StocksContextProvider } from "./Context/StocksContext.jsx";
import "./Styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <StocksContextProvider>
        <App />
      </StocksContextProvider>
    </Router>
  </React.StrictMode>
);
