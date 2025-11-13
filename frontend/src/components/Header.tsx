import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logotipo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/img/logo_brotarte.svg"
            alt="BrotArte"
            className="h-10 hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Menú de navegación */}
      <nav className="flex items-center gap-8">
        <Link to="/recursos" className="text-gray-700 hover:text-amber-700 transition-colors">Recursos creativos</Link>
        <Link to="/retos" className="text-gray-700 hover:text-amber-700 transition-colors">Mis retos</Link>
        <Link to="/galeria" className="text-gray-700 hover:text-amber-700 transition-colors">Galería</Link>

        {/* Icono de usuario */}
        <button className="p-2 rounded-full hover:bg-amber-100 transition">
          <User className="w-6 h-6 text-gray-700" />
        </button>
      </nav>
    </header>
  );
}
