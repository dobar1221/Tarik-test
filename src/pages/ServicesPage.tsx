import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Car, 
  Gauge, 
  Zap, 
  Thermometer, 
  Disc, 
  Fuel, 
  Shield,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      category: "Usluge Motora",
      icon: <Wrench className="h-8 w-8" />,
      services: [
        { name: "Zamjena Ulja (Konvencionalno)", price: "59 KM", time: "30 min" },
        { name: "Zamjena Ulja (Sintetičko)", price: "99 KM", time: "30 min" },
        { name: "Podešavanje (4 cilindra)", price: "379 KM", time: "2 sata" },
        { name: "Podešavanje (6 cilindara)", price: "459 KM", time: "2.5 sata" },
        { name: "Podešavanje (8 cilindara)", price: "539 KM", time: "3 sata" },
        { name: "Dijagnostika Motora", price: "239 KM", time: "1 sat" },
        { name: "Zamjena Zupčastog Remena", price: "799 KM", time: "4 sata" },
        { name: "Zamjena Pumpe za Vodu", price: "599 KM", time: "3 sata" }
      ]
    },
    {
      category: "Usluge Kočnica",
      icon: <Disc className="h-8 w-8" />,
      services: [
        { name: "Pregled Kočnica", price: "BESPLATNO", time: "30 min" },
        { name: "Zamjena Pločica (Prednje)", price: "299 KM", time: "1.5 sata" },
        { name: "Zamjena Pločica (Stražnje)", price: "279 KM", time: "1.5 sata" },
        { name: "Diskovi Kočnica (Po Komadu)", price: "179 KM", time: "45 min" },
        { name: "Kompletan Servis Kočnica", price: "799 KM", time: "3 sata" },
        { name: "Ispiranje Kočione Tekućine", price: "159 KM", time: "45 min" },
        { name: "Popravka Kočionih Vodova", price: "319 KM", time: "2 sata" }
      ]
    },
    {
      category: "Usluge Mjenjača",
      icon: <Gauge className="h-8 w-8" />,
      services: [
        { name: "Zamjena Ulja Mjenjača", price: "259 KM", time: "1 sat" },
        { name: "Ispiranje Mjenjača", price: "399 KM", time: "1.5 sata" },
        { name: "Dijagnostika Mjenjača", price: "299 KM", time: "1.5 sata" },
        { name: "Pregled Kvačila", price: "199 KM", time: "1 sat" },
        { name: "Zamjena Kvačila", price: "1799 KM", time: "6 sati" },
        { name: "Zamjena CV Zgloba", price: "499 KM", time: "2.5 sata" }
      ]
    },
    {
      category: "Električni Sistemi",
      icon: <Zap className="h-8 w-8" />,
      services: [
        { name: "Test Baterije", price: "BESPLATNO", time: "15 min" },
        { name: "Zamjena Baterije", price: "259 KM", time: "30 min" },
        { name: "Test Alternatora", price: "99 KM", time: "30 min" },
        { name: "Zamjena Alternatora", price: "599 KM", time: "2 sata" },
        { name: "Zamjena Startera", price: "499 KM", time: "1.5 sata" },
        { name: "Električna Dijagnostika", price: "239 KM", time: "1 sat" },
        { name: "Popravka Instalacije", price: "179 KM/sat", time: "Varijabilno" }
      ]
    },
    {
      category: "Klimatizacija",
      icon: <Thermometer className="h-8 w-8" />,
      services: [
        { name: "Pregled A/C Sistema", price: "159 KM", time: "45 min" },
        { name: "Dopunjavanje Freon Gasa", price: "299 KM", time: "1 sat" },
        { name: "Zamjena A/C Kompresora", price: "1199 KM", time: "4 sata" },
        { name: "Zamjena Grijača", price: "899 KM", time: "5 sati" },
        { name: "Zamjena Termostata", price: "259 KM", time: "1 sat" },
        { name: "Ispiranje Hladnjaka", price: "199 KM", time: "1 sat" },
        { name: "Zamjena Hladnjaka", price: "699 KM", time: "3 sata" }
      ]
    },
    {
      category: "Gume i Geometrija",
      icon: <Car className="h-8 w-8" />,
      services: [
        { name: "Rotacija Guma", price: "79 KM", time: "30 min" },
        { name: "Balansiranje Točkova", price: "139 KM", time: "45 min" },
        { name: "Geometrija (4 Točka)", price: "179 KM", time: "1 sat" },
        { name: "Montaža Gume (Po Komadu)", price: "51 KM", time: "15 min" },
        { name: "Popravka Gume", price: "39 KM", time: "30 min" },
        { name: "TPMS Servis", price: "99 KM", time: "30 min" }
      ]
    },
    {
      category: "Sistem Goriva",
      icon: <Fuel className="h-8 w-8" />,
      services: [
        { name: "Čišćenje Sistema Goriva", price: "259 KM", time: "1 sat" },
        { name: "Zamjena Pumpe Goriva", price: "799 KM", time: "3 sata" },
        { name: "Zamjena Filtera Goriva", price: "159 KM", time: "45 min" },
        { name: "Čišćenje Injektora", price: "299 KM", time: "1.5 sata" },
        { name: "Popravka Vodova Goriva", price: "319 KM", time: "2 sata" }
      ]
    },
    {
      category: "Pregledi i Održavanje",
      icon: <Shield className="h-8 w-8" />,
      services: [
        { name: "Državni Sigurnosni Pregled", price: "39 KM", time: "30 min" },
        { name: "Višestruki Pregled", price: "BESPLATNO", time: "45 min" },
        { name: "Pregled Prije Kupovine", price: "299 KM", time: "2 sata" },
        { name: "Planirano Održavanje", price: "Varijabilno", time: "2-4 sata" },
        { name: "Dopunjavanje Tekućina", price: "BESPLATNO", time: "15 min" },
        { name: "Pregled Remena i Crijeva", price: "99 KM", time: "30 min" }
      ]
    }
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Usluge i Cijene</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Sveobuhvatne automobilske usluge s transparentnim cijenama. Kvalitetan rad, poštene procjene, garantovano zadovoljstvo.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantovana Kvaliteta</h3>
              <p className="text-gray-600">Sav rad pokriven našom sveobuhvatnom garancijom</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparentne Cijene</h3>
              <p className="text-gray-600">Bez skrivenih troškova, unaprijed poštene procjene</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brz Obrt</h3>
              <p className="text-gray-600">Efikasna usluga za minimiziranje vašeg zastoja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{service.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">Procijenjeno vrijeme: {service.time}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold ${
                            service.price === 'BESPLATNO' ? 'text-gray-900' : 'text-gray-900'
                          }`}>
                            {service.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Važne Informacije</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Napomene o Cijenama</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Prikazane cijene su početne procjene i mogu varirati</li>
                  <li>• Dodatni dijelovi ili rad mogu biti potrebni</li>
                  <li>• Pružamo besplatne procjene prije početka rada</li>
                  <li>• Dostupni popusti za penzionere i vojnike</li>
                  <li>• Većina radova uključuje 12-mjesečnu/12.000 km garanciju</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Što je Uključeno</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Besplatan višestruki pregled s većinom usluga</li>
                  <li>• Kvalitetni dijelovi od pouzdanih proizvođača</li>
                  <li>• Stručnost ASE certificiranih tehničara</li>
                  <li>• Ekološko odlaganje starih dijelova/tekućina</li>
                  <li>• Digitalni zapisi usluga i podsjetnici</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spremni Zakazati Vašu Uslugu?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Servisajte vaše vozilo kod profesionalaca kojima možete vjerovati
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservation"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Zakažite Vaš Termin
            </Link>
            <a
              href="tel:5551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Pozovite za Procjenu: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;