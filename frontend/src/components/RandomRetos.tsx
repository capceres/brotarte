import { useEffect, useState } from "react";

interface Reto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export default function RandomRetos() {
  const [retos, setRetos] = useState<Reto[]>([]);

  // Traer los retos desde el backend
  useEffect(() => {
    const fetchRetos = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/retos");
        if (!res.ok) throw new Error("Error al obtener retos");
        const data: Reto[] = await res.json();

        // Mezclar aleatoriamente y quedarse con 5
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRetos(shuffled.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRetos();
  }, []);

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
    {retos.map((reto) => (
      <div
        key={reto.id}
        tabIndex={0}
        className="group relative h-48 w-full rounded-lg overflow-hidden shadow-md focus:outline-none"
      >
        <img
          src={`http://localhost:4000/uploads/${reto.imagen}`}
          alt={reto.titulo}
          className="object-cover w-full h-full transition-transform duration-300
                     group-hover:scale-105 group-focus:scale-105"
        />

        {/* el titulo del reto se muestra solo con hover o focus */}
        <div
          className="absolute inset-0 flex items-end justify-center
                     bg-black/60 opacity-0
                     group-hover:opacity-100 group-focus:opacity-100
                     transition-opacity duration-300"
        >
          <p className="text-white text-sm font-semibold px-3 pb-3 text-center">
            {reto.titulo}
          </p>
        </div>
      </div>
    ))}
  </div>
);

}
