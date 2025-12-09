import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("container")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/about/" element={<About />} />
          <Route path="/solutions/" element={<Solutions />} />
          <Route path="/contact/" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
