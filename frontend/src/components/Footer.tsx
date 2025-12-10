

export default function Footer() {
  return (
    <footer className="w-full bg-main-dark text-white px-8 pt-10 pb-4 mt-10 z-50">
  <div className="mx-auto flex flex-wrap gap-10 justify-between">

    <div className="min-w-[200px] flex-1">
          <img
            src="/img/logo_brotarte_light.svg"
            alt="brotArte"
            className="h-6"
          />
      <p className="text-gray-300 text-sm leading-relaxed">
        Generador de ideas artísticas
      </p>
    </div>

    

    <div className="min-w-[200px] flex-1">
      <h4 className="text-lg font-semibold mb-2">Contacto</h4>
      <p className="text-gray-300 text-sm">contacto@brotarte.com</p>
    </div>

    <div className="min-w-[200px] flex-1 text-white">
      <h4 className="text-lg font-semibold mb-2">Enlaces</h4>
      <ul className="space-y-2 text-gray-300">
        <li><a className="text-white! font-normal! underline!" href="/">Aviso Legal</a></li>
        <li><a className="text-white! font-normal! underline!" href="/">Accesibilidad</a></li>
        <li><a className="text-white! font-normal! underline!" href="/">Mapa web</a></li>
      </ul>
    </div>

  </div>

  <div className="text-center border-t border-white mt-6 pt-4 text-white text-xs">
    © {new Date().getFullYear()} Brotarte · Carmen Alía
  </div>
</footer>
  );
}