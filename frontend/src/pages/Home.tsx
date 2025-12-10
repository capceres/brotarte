import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FallingLeaves from "../components/FallingLeaves";
import RandomRetos from "../components/RandomRetos";

function Home() {
    const [reto, setReto] = useState("");

    const generarReto = async () => {
        const res = await fetch("http://localhost:4000/api/random");
        const data = await res.json();
        setReto(data.reto);
    };
    return (
        <>

            <FallingLeaves />
            <Header />
            <div className="min-h-screen w-full flex flex-col items-center bg-white pt-20 justify-between">
                <main className="min-h-50 mt-10 m-auto text-center">
                    <p className="text-xl text-main-dark mb-6">Haz click para que las ideas empiecen a brotar</p>
                    {/* botón Generar Reto */}
                    <button
                        onClick={generarReto}
                        className="bg-main! text-2xl! w-75 py-2 px-4 rounded-lg hover:bg-main-dark! text-white transition-colors!"
                    >
                        Generar Reto
                    </button>

                    {/* botón Subir reto, aparece solo si hay un reto generado */}
                    {reto && (
                        <>
                            <p className="mt-10 text-2xl text-amber-900">{reto}</p>

                            <Link
                                to="/subir-reto"
                                state={{ titulo: reto }}
                                className="inline-block mt-3 bg-secondary text-white! px-6 py-2 rounded-lg hover:bg-secondary-dark transition"
                            >
                                Subir reto
                            </Link>

                            
                        </>
                    )}

                    



                </main>
                <RandomRetos />

                <Footer />
            </div>

        </>


    );
}
export default Home;