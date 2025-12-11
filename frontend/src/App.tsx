import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CrearReto from "./pages/CrearReto";
import RecursosCreativos from "./pages/RecursosCreativos";
import Galeria from "./pages/Galeria";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subir-reto" element={<CrearReto />} />
        <Route path="/recursos" element={<RecursosCreativos />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
   
  );
}

