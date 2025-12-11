import { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-light-bg px-8 py-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        {/* Logotipo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/img/logo_brotarte.svg"
              alt="brotArte"
              className="h-10 hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/recursos"
            className="text-main-dark! underline! hover:text-black! hover:no-underline! transition-colors"
          >
            Recursos creativos
          </Link>
          
          {/* <Link
            to="/retos"
            className="text-main-dark! underline! hover:text-black! hover:no-underline! transition-colors"
          >
            Mis retos
          </Link> */}
          <Link
            to="/galeria"
            className="text-main-dark! underline! hover:text-black! hover:no-underline! transition-colors"
          >
            Galería
          </Link>

          {/* Icono de usuario
          <button className="p-2 rounded-full hover:bg-amber-100 transition">
            <User className="w-6 h-6 text-gray-700" />
          </button> */}
        </nav>

        {/* Botón hamburguesa Mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-amber-100 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-light-bg px-8 pt-4 pb-4 flex flex-col gap-3 shadow-md">
          <Link
            to="/recursos"
            className="text-main-dark! underline! hover:text-black! hover:no-underline! transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Recursos creativos
          </Link>
          {/* <Link
            to="/retos"
            className="text-main-dark! underline! hover:text-black! hover:no-underline! transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Mis retos
          </Link> */}
          <Link
            to="/galeria"
            className="text-main-dark! underline! hover:text-black! hover:no-underline! transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Galería
          </Link>
        </nav>
      )}
    </header>
  );
}
