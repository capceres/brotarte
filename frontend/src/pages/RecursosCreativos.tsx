    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import * as Icons from "lucide-react";

    interface Tip {
    id: number;
    titulo: string;
    texto: string;
    icono: string;
    }

    export default function RecursosCreativos() {
    const tips: Tip[] = [
        { id: 1, titulo: "Rompe la hoja", texto: "Dibuja sin levantar el lápiz durante 30 segundos para soltar la mano.", icono: "Lightbulb" },
        { id: 2, titulo: "Cambia de herramienta", texto: "Si te bloqueas, prueba otra técnica: rotulador, carboncillo o acuarela.", icono: "Palette" },
        { id: 3, titulo: "Limita tu paleta", texto: "Elige solo 2 colores. Las restricciones estimulan la creatividad.", icono: "Feather" },
        { id: 4, titulo: "Dibuja en 3 estilos", texto: "Representa el mismo objeto en estilo realista, caricatura y minimalista.", icono: "PenTool" },
        { id: 5, titulo: "Reto de 2 minutos", texto: "Pon un temporizador y dibuja algo cercano en solo 120 segundos.", icono: "Sparkles" },
        { id: 6, titulo: "Monocromo", texto: "Usa un único color y sus tonos para explorar valores y contrastes.", icono: "Apple" },
        { id: 7, titulo: "Patrón de azulejo", texto: "Busca un patrón en la calle y reprodúcelo dibujando.", icono: "PanelTopBottomDashed" },
        { id: 8, titulo: "Dibuja con la mano no dominante", texto: "Activa nuevas conexiones neuronales dibujando con tu otra mano.", icono: "Hand" },
        { id: 9, titulo: "Microbocetos", texto: "Haz 6 mini dibujos del mismo objeto con distintos encuadres.", icono: "SquareDashed" },
        { id: 10, titulo: "Dibuja una textura", texto: "Escoge una textura (madera, metal, piel…) e intenta reproducirla.", icono: "Eye" },
        { id: 11, titulo: "Reinterpreta un emoji", texto: "Convierte un emoji simple en una ilustración detallada.", icono: "Smile" },
        { id: 12, titulo: "Crea un monstruo amable", texto: "Diseña una criatura temible que en realidad sea adorable.", icono: "Ghost" },
        { id: 13, titulo: "Dibuja tu desayuno", texto: "Lo cotidiano también inspira: dibuja algo que hayas comido hoy.", icono: "Croissant" },
        { id: 14, titulo: "Humor visual", texto: "Representa un chiste o juego de palabras mediante una imagen.", icono: "Laugh" },
        { id: 15, titulo: "Silueta primero", texto: "Dibuja solo la silueta negra de un objeto y añade detalle encima.", icono: "Circle" },
        { id: 16, titulo: "Arte con una línea", texto: "Crea un dibujo completo con una única línea continua.", icono: "FishSymbol" },
        { id: 17, titulo: "Dibujo invertido", texto: "Mira el objeto solo el 20% del tiempo, el resto dibuja casi sin mirar.", icono: "EyeOff" },
        { id: 18, titulo: "Cambio de época", texto: "Dibuja un objeto moderno como si fuera del siglo pasado.", icono: "Hourglass" },
        { id: 19, titulo: "Mini cómic", texto: "Crea una historia corta de 3 viñetas usando personajes simples.", icono: "PanelsTopLeft" },
        { id: 20, titulo: "Reto de sombras", texto: "Ilustra un objeto usando solo sombras duras, sin degradados.", icono: "Moon" },
    ];

    return (
        <>
        <Header />

        <div className="pt-24 bg-white px-6">
            <h1 className="text-center text-3xl font-bold text-main-dark">
            Recursos creativos
            </h1>

            <p className="text-center text-main-dark mx-auto mb-12">
            Pequeños ejercicios y recordatorios para desbloquear tu creatividad
            y seguir explorando tu lado artístico.
            </p>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 pb-20 max-w-7xl mx-auto">
            {tips.map((tip) => {
                const Icon = Icons[tip.icono as keyof typeof Icons]; // icono dinámico

                return (
                <div
                    key={tip.id}
                    className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                    <div className="text-main mb-4">
                    {Icon && <Icon className="w-10 h-10" />}
                    </div>

                    <h2 className="text-xl font-semibold text-main-dark mb-2">
                    {tip.titulo}
                    </h2>

                    <p className="text-gray-700">{tip.texto}</p>
                </div>
                );
            })}
            </div>
        </div>

        <Footer />
        </>
    );
    }