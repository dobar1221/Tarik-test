import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Autoservisna 123, Grad, BiH 71000</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Pon-Pet: 7:00-18:00 | Sub: 8:00-16:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Premier Auto Servis</h1>
                <p className="text-sm text-gray-600">Profesionalna usluga od 1995.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Početna
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/services') 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Usluge i Cijene
              </Link>
              <Link
                to="/reservation"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/reservation') 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Rezervacija
              </Link>
              <Link
                to="/reservation"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                Zakaži Sada
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`font-medium py-2 ${
                    isActive('/') ? 'text-gray-900' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Početna
                </Link>
                <Link
                  to="/services"
                  className={`font-medium py-2 ${
                    isActive('/services') ? 'text-gray-900' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Usluge i Cijene
                </Link>
                <Link
                  to="/reservation"
                  className={`font-medium py-2 ${
                    isActive('/reservation') ? 'text-gray-900' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rezervacija
                </Link>
                <Link
                  to="/reservation"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zakaži Sada
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;