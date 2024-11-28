import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-700">La Azotea</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-amber-600">Inicio</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600">Menú</a>
              <a href="#contacto" className="text-gray-700 hover:text-amber-600">Contacto</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Inicio</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Menú</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}