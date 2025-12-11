import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function CrearReto() {
    const location = useLocation();
    const initialTitulo = location.state?.titulo || "";
    const [titulo, setTitulo] = useState(initialTitulo);
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const navigate = useNavigate();
    const [mensajeExito, setMensajeExito] = useState("");

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("descripcion", descripcion);
        if (imagen) formData.append("imagen", imagen);

        try {
            const res = await fetch("http://localhost:4000/api/retos", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Error al subir el reto");

            const data = await res.json();
            console.log("Reto guardado:", data);

            // mostrar mensaje de subida ok
            setMensajeExito("¡Reto subido correctamente!");

            setPreview(null);

            // limpiar formulario
            setDescripcion("");
            setImagen(null);

            // redirigir a Home alos 3 segundos
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.error(error);
            setMensajeExito("Error al subir el reto");
        }
    };




    return (
        <>
            <Header />

            <div className="min-h-170 flex flex-col items-center pt-24 px-6">
                <h1>
                    Sube tu reto
                </h1>

                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6" >
                    <div>
                        <label className="block text-main-dark font-medium mb-1">
                            Título del reto
                        </label>
                        {/* el titulo viene dado desde Home y no se puede modificar */}
                        <input
                            type="text"
                            placeholder="Título del reto"
                            value={titulo}
                            readOnly
                            onChange={(e) => setTitulo(e.target.value)}
                            className="w-full border px-4 py-2 rounded bg-gray-100 text-gray-700 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-main-dark font-medium mb-1">
                            Descripción
                        </label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:ring-main focus:border-main outline-none"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        >

                        </textarea>
                    </div>

                    <div>
                        <label className="block text-main-dark font-medium mb-1">
                            Imagen
                        </label>
                        <input
                            type="file"
                            className="w-full cursor-pointer border border-gray-300 rounded px-4 py-2 bg-light-bg"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const file = e.target.files[0];
                                    setImagen(file);
                                    setPreview(URL.createObjectURL(file));

                                }
                            }}
                        />
                        {/* Previsualización de la imagen: */}
                        {preview && (
                            <div className="mt-4 w-full flex justify-center">
                                <img
                                    src={preview}
                                    alt="Previsualización"
                                    className="w-48 h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        )}


                    </div>

                    <button
                        type="submit"
                        className="bg-main! text-white py-2 rounded-lg hover:bg-main-dark transition"
                    >
                        Publicar Reto
                    </button>
                </form>
                {mensajeExito && (
                    <p className="mt-4 text-center text-green-800 font-semibold">
                        {mensajeExito}
                    </p>
                )}

            </div>

            <Footer />
        </>
    );
}
