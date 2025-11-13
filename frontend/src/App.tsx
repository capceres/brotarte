import { useState } from "react";
import Header from "./components/header";

function App() {
  const [reto, setReto] = useState("");

  const generarReto = async () => {
    const res = await fetch("http://localhost:4000/api/random");
    const data = await res.json();
    setReto(data.reto);
  };

  return (
    <>
     <Header />
    
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-amber-50">
      <h1 className="text-3xl font-bold mb-6 text-amber-900">BrotArte, haz click para empezar 🌱</h1>
      <button
        onClick={generarReto}
        className="bg-emerald-100 py-2 px-4 rounded-lg hover:bg-amber-800"
      >
        Generar Reto
      </button>
      
      {reto && <p className="mt-6 text-xl text-amber-900">{reto}</p>}
    </div>
    </>
  );
}

export default App;

