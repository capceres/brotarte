import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Reto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export default function Galeria() {
  const [retos, setRetos] = useState<Reto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRetos = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/retos");
        if (!res.ok) throw new Error("Error al obtener los retos");

        const data: Reto[] = await res.json();
        setRetos(data);
      } catch (error) {
        console.error("Error cargando la galería:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRetos();
  }, []);

  return (
    <>
      <Header />

      <div className="pt-24 px-6 bg-white min-h-screen">
        <h1 className="text-center">
          Galería de retos
        </h1>
        <p className="text-center text-main-dark mx-auto mb-12">Aquí puedes ver todas las obras que se han creado en los retos.</p>

        {loading ? (
          <p className="text-center text-gray-600">Cargando...</p>
        ) : retos.length === 0 ? (
          <p className="text-center text-gray-600">
            Aún no hay retos publicados.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto pb-20">
            {retos.map((reto) => (
              <div
                key={reto.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
              >
                <div className="h-56 w-full overflow-hidden rounded-lg">
                  <img
                    src={`http://localhost:4000/uploads/${reto.imagen}`}
                    alt={reto.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="mt-4 text-xl font-semibold text-main-dark">
                  {reto.titulo}
                </h2>

                <p className="text-gray-700 mt-2">{reto.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
