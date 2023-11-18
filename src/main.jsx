import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Chales from "./pages/Chales/index.jsx";
import Lazer from "./pages/Lazer/index.jsx";
import SobreNos from "./pages/SobreNos/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/chales" element={<Chales />} />
          <Route path="/lazer" element={<Lazer />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
