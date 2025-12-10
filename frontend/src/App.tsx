import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CrearReto from "./pages/CrearReto";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subir-reto" element={<CrearReto />} />
      </Routes>
   
  );
}

