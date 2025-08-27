import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/assets/LogoCastillo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Links de navegación
  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/productos", label: "Productos" },
  ];

  // Botones de autenticación
  const authButtons = [
    { path: "/login", label: "Login", style: "bg-white text-mainPink" },
    {
      path: "/registro",
      label: "Registro",
      style: "bg-mainPink text-white border border-white",
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-mainPink p-5 md:p-0 md:py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-25 hover:scale-105 transition-transform"
            src={Logo}
            alt="Logo del negocio"
          />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-Main text-4xl transition-colors ${
                location.pathname === link.path
                  ? "underline text-yellow-300"
                  : "text-white hover:text-yellow-200"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Botones Login/Registro */}
          <div className="flex gap-3 ml-4">
            {authButtons.map((btn) => (
              <Link
                key={btn.path}
                to={btn.path}
                className={`px-4 py-1 rounded-lg font-semibold transition-transform hover:scale-105 ${btn.style}`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Botón Hamburguesa (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 border-t border-white/30">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-Main text-2xl transition-colors ${
                location.pathname === link.path
                  ? "underline text-yellow-300"
                  : "text-white hover:text-yellow-200"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-2 w-full px-6">
            {authButtons.map((btn) => (
              <Link
                key={btn.path}
                to={btn.path}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center px-4 py-2 rounded-lg font-semibold ${btn.style}`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
