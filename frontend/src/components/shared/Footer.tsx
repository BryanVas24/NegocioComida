import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "@/assets/LogoCastillo.png";

export default function Footer() {
  return (
    <footer className="bg-mainColor text-textAndBg py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + descripción */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={Logo} alt="Logo" className="w-24" />
          <p className="text-sm text-center md:text-left">
            Castillo - Tu mejor opción en productos de calidad.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Main text-lg mb-2">Enlaces</h3>
          <Link to="/" className="hover:underline hover:text-yellow-300">
            Inicio
          </Link>
          <Link
            to="/productos"
            className="hover:underline hover:text-yellow-300"
          >
            Productos
          </Link>
          <Link to="/login" className="hover:underline hover:text-yellow-300">
            Login
          </Link>
          <Link
            to="/registro"
            className="hover:underline hover:text-yellow-300"
          >
            Registro
          </Link>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-Main text-lg">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mainColor p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mainColor p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mainColor p-2 rounded-full hover:scale-110 transition-transform"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Castillo. Todos los derechos reservados.
      </div>
    </footer>
  );
}
