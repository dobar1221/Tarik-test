import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Clock, Users, Wrench, Car, CheckCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Opće Popravke",
      description: "Kompletne automobilske popravke za sve marke i modele"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Održavanje",
      description: "Redovno održavanje za nesmetano funkcioniranje vašeg vozila"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Dijagnostika",
      description: "Napredna kompjuterska dijagnostika za brzu identifikaciju problema"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Pregledi",
      description: "Državni pregledi i sigurnosne provjere za vaš mir"
    }
  ];

  const testimonials = [
    {
      name: "Amira Hodžić",
      rating: 5,
      text: "Izuzetna usluga! Brzo su riješili problem s kočnicama i sve jasno objasnili. Toplo preporučujem!",
      service: "Popravka Kočnica"
    },
    {
      name: "Marko Petrović",
      rating: 5,
      text: "Dolazim ovdje godinama. Uvijek pošteni, fer cijene i kvalitetan rad. Najbolji autoservis u gradu!",
      service: "Zamjena Ulja i Podešavanje"
    },
    {
      name: "Emina Čehić",
      rating: 5,
      text: "Profesionalno osoblje i čist objekat. Vratili su moj auto u savršeno stanje. Definitivno ću se vratiti!",
      service: "Dijagnostika Motora"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Profesionalna Auto Njega
              <span className="block text-gray-300">Kojoj Možete Vjerovati</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Stručna automobilska usluga i popravke od 1995. godine. Kvalitetan rad, poštene cijene i izuzetna korisnička usluga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservation"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
              >
                Zakaži Uslugu
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 text-center"
              >
                Pogledaj Usluge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificirani Tehničari</h3>
              <p className="text-gray-600">ASE certificirani profesionalci s godinama iskustva</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brza Usluga</h3>
              <p className="text-gray-600">Brza, efikasna usluga da se vratite na put</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garancija Kvalitete</h3>
              <p className="text-gray-600">Sav rad pokriven našom sveobuhvatnom garancijom</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Povjerenje Hiljada</h3>
              <p className="text-gray-600">Služimo zajednicu skoro 30 godina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše Usluge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sveobuhvatna automobilska njega za sve potrebe vašeg vozila
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="text-gray-900 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-gray-900 font-medium hover:text-gray-700 inline-flex items-center transition-colors"
                >
                  Saznaj Više
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Pogledaj Sve Usluge i Cijene
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Što Kažu Naši Klijenti</h2>
            <p className="text-xl text-gray-600">Stvarne recenzije zadovoljnih kupaca</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-900 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spremni za Servis Vašeg Vozila?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Zakažite svoj termin danas i iskusite Premier Auto Servis razliku
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservation"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Zakaži Termin
            </Link>
            <a
              href="tel:5551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Pozovi (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;