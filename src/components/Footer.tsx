import React from 'react';
import { Car, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Car className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Premier Auto Servis</h3>
                <p className="text-sm text-gray-400">Od 1995. godine</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Profesionalna automobilska usluga i popravke. Vaš pouzdani partner za održavanje i njegu vozila.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">info@premierautoservis.ba</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Autoservisna 123<br />Grad, BiH 71000</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Radno Vrijeme</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <div className="text-gray-300">
                  <p>Pon-Pet: 7:00 - 18:00</p>
                  <p>Subota: 8:00 - 16:00</p>
                  <p>Nedjelja: Zatvoreno</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popularne Usluge</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Zamjena Ulja</li>
              <li className="hover:text-white cursor-pointer transition-colors">Servis Kočnica</li>
              <li className="hover:text-white cursor-pointer transition-colors">Dijagnostika Motora</li>
              <li className="hover:text-white cursor-pointer transition-colors">Servis Guma</li>
              <li className="hover:text-white cursor-pointer transition-colors">Popravka Klime</li>
              <li className="hover:text-white cursor-pointer transition-colors">Državni Pregledi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Premier Auto Servis. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politika Privatnosti</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Uslovi Korištenja</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Garancija</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;