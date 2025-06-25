import axios from "axios";
import React, { useState } from 'react';
import { Calendar, Clock, User, Car, Phone, Mail, MapPin, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
}

interface FormData {
  selectedServices: ServiceItem[];
  selectedDate: string;
  selectedTime: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  vehicleInfo: {
    year: string;
    make: string;
    model: string;
    mileage: string;
    licensePlate: string;
  };
  additionalNotes: string;
}

const ReservationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    selectedServices: [],
    selectedDate: '',
    selectedTime: '',
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    vehicleInfo: {
      year: '',
      make: '',
      model: '',
      mileage: '',
      licensePlate: '',
    },
    additionalNotes: '',
  });

  const services: ServiceItem[] = [
    { id: '1', name: 'Zamjena Ulja (Konvencionalno)', price: '59 KM', duration: '30 min', category: 'Motor' },
    { id: '2', name: 'Zamjena Ulja (Sintetičko)', price: '99 KM', duration: '30 min', category: 'Motor' },
    { id: '3', name: 'Pregled Kočnica', price: 'BESPLATNO', duration: '30 min', category: 'Kočnice' },
    { id: '4', name: 'Zamjena Pločica (Prednje)', price: '299 KM', duration: '1.5 sata', category: 'Kočnice' },
    { id: '5', name: 'Zamjena Pločica (Stražnje)', price: '279 KM', duration: '1.5 sata', category: 'Kočnice' },
    { id: '6', name: 'Test Baterije', price: 'BESPLATNO', duration: '15 min', category: 'Elektrika' },
    { id: '7', name: 'Zamjena Baterije', price: '259 KM', duration: '30 min', category: 'Elektrika' },
    { id: '8', name: 'Pregled A/C Sistema', price: '159 KM', duration: '45 min', category: 'Klima' },
    { id: '9', name: 'Rotacija Guma', price: '79 KM', duration: '30 min', category: 'Gume' },
    { id: '10', name: 'Geometrija (4 Točka)', price: '179 KM', duration: '1 sat', category: 'Gume' },
    { id: '11', name: 'Državni Sigurnosni Pregled', price: '39 KM', duration: '30 min', category: 'Pregled' },
    { id: '12', name: 'Višestruki Pregled', price: 'BESPLATNO', duration: '45 min', category: 'Pregled' },
    { id: '13', name: 'Dijagnostika Motora', price: '239 KM', duration: '1 sat', category: 'Motor' },
    { id: '14', name: 'Zamjena Ulja Mjenjača', price: '259 KM', duration: '1 sat', category: 'Mjenjač' }
  ];

  const timeSlots = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip Sundays (0)
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const days = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
    const months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'August', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
    
    return `${days[date.getDay()]}, ${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
  };

  const handleServiceToggle = (service: ServiceItem) => {
    const isSelected = formData.selectedServices.some(s => s.id === service.id);
    if (isSelected) {
      setFormData({
        ...formData,
        selectedServices: formData.selectedServices.filter(s => s.id !== service.id)
      });
    } else {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, service]
      });
    }
  };

  const calculateTotal = () => {
    return formData.selectedServices.reduce((total, service) => {
      const price = service.price === 'BESPLATNO' ? 0 : parseFloat(service.price.replace(' KM', ''));
      return total + price;
    }, 0);
  };

  const calculateTotalTime = () => {
    let totalMinutes = 0;
    formData.selectedServices.forEach(service => {
      const duration = service.duration;
      if (duration.includes('sat')) {
        const hours = parseFloat(duration);
        totalMinutes += hours * 60;
      } else if (duration.includes('min')) {
        const minutes = parseInt(duration);
        totalMinutes += minutes;
      }
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    if (hours > 0 && minutes > 0) {
      return `${hours}h ${minutes}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  };

  const handleSubmit = async () => {
    
    const services = formData.selectedServices.map((s) => s.name).join(", ");
  
    const data = {
      firstName: formData.customerInfo.firstName,
      lastName: formData.customerInfo.lastName,
      email: formData.customerInfo.email,
      phone: formData.customerInfo.phone,
      year: formData.vehicleInfo.year,
      make: formData.vehicleInfo.make,
      model: formData.vehicleInfo.model,
      mileage: formData.vehicleInfo.mileage,
      licensePlate: formData.vehicleInfo.licensePlate,
      selectedDate: formData.selectedDate,
      selectedTime: formData.selectedTime,
      services,
      additionalNotes: formData.additionalNotes,
    };
  
    await axios.post("https://sheetdb.io/api/v1/mk6bvyl08wvn9", { data });
  
    setCurrentStep(5); // Show confirmation page
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.selectedServices.length > 0;
      case 2:
        return formData.selectedDate && formData.selectedTime;
      case 3:
        return formData.customerInfo.firstName && formData.customerInfo.lastName && 
               formData.customerInfo.email && formData.customerInfo.phone;
      case 4:
        return formData.vehicleInfo.year && formData.vehicleInfo.make && formData.vehicleInfo.model;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zakažite Vašu Uslugu</h1>
          <p className="text-xl text-gray-600">Rezervišite svoj termin u samo nekoliko jednostavnih koraka</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-full mx-4 ${
                    currentStep > step ? 'bg-gray-900' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Odabir Usluga</span>
            <span>Datum i Vrijeme</span>
            <span>Vaši Podaci</span>
            <span>Podaci Vozila</span>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Car className="mr-3 text-gray-900" />
                Odaberite Usluge
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((service) => {
                  const isSelected = formData.selectedServices.some(s => s.id === service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'border-gray-900 bg-gray-50 shadow-md' 
                          : 'border-gray-200 hover:border-gray-400 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {service.category} • {service.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold text-lg ${
                            service.price === 'BESPLATNO' ? 'text-gray-900' : 'text-gray-900'
                          }`}>
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {formData.selectedServices.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Sažetak Odabranih Usluga</h3>
                  <div className="space-y-2">
                    {formData.selectedServices.map((service) => (
                      <div key={service.id} className="flex justify-between items-center">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-gray-900">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-900">
                        Ukupno: {calculateTotal()} KM
                      </span>
                      <span className="text-sm text-gray-600 ml-4">
                        Proc. Vrijeme: {calculateTotalTime()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="mr-3 text-gray-900" />
                Odaberite Datum i Vrijeme
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Odaberite Datum</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {getAvailableDates().map((date) => (
                      <button
                        key={date}
                        onClick={() => setFormData({ ...formData, selectedDate: date })}
                        className={`p-3 text-left rounded-lg border-2 transition-all duration-200 ${
                          formData.selectedDate === date
                            ? 'border-gray-900 bg-gray-50 text-gray-900'
                            : 'border-gray-200 hover:border-gray-400 text-gray-700'
                        }`}
                      >
                        <div className="font-medium">
                          {new Date(date).toLocaleDateString('bs-BA', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="text-sm">
                          {new Date(date).toLocaleDateString('bs-BA', { weekday: 'long' })}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Odaberite Vrijeme</h3>
                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setFormData({ ...formData, selectedTime: time })}
                        className={`p-2 text-sm rounded-lg border-2 transition-all duration-200 ${
                          formData.selectedTime === time
                            ? 'border-gray-900 bg-gray-50 text-gray-900'
                            : 'border-gray-200 hover:border-gray-400 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {formData.selectedDate && formData.selectedTime && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-800 font-medium">
                    <CheckCircle className="inline mr-2" size={18} />
                    Termin zakazan za {formatDate(formData.selectedDate)} u {formData.selectedTime}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Customer Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 text-gray-900" />
                Vaši Podaci
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ime *
                  </label>
                  <input
                    type="text"
                    value={formData.customerInfo.firstName}
                    onChange={(e) => setFormData({
                      ...formData,
                      customerInfo: { ...formData.customerInfo, firstName: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Unesite vaše ime"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prezime *
                  </label>
                  <input
                    type="text"
                    value={formData.customerInfo.lastName}
                    onChange={(e) => setFormData({
                      ...formData,
                      customerInfo: { ...formData.customerInfo, lastName: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Unesite vaše prezime"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline mr-1" size={16} />
                    Email Adresa *
                  </label>
                  <input
                    type="email"
                    value={formData.customerInfo.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      customerInfo: { ...formData.customerInfo, email: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="vas.email@primjer.ba"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline mr-1" size={16} />
                    Broj Telefona *
                  </label>
                  <input
                    type="tel"
                    value={formData.customerInfo.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      customerInfo: { ...formData.customerInfo, phone: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="061 123 456"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Vehicle Information */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Car className="mr-3 text-gray-900" />
                Podaci o Vozilu
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Godina *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleInfo.year}
                    onChange={(e) => setFormData({
                      ...formData,
                      vehicleInfo: { ...formData.vehicleInfo, year: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marka *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleInfo.make}
                    onChange={(e) => setFormData({
                      ...formData,
                      vehicleInfo: { ...formData.vehicleInfo, make: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Volkswagen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleInfo.model}
                    onChange={(e) => setFormData({
                      ...formData,
                      vehicleInfo: { ...formData.vehicleInfo, model: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Golf"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kilometraža
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleInfo.mileage}
                    onChange={(e) => setFormData({
                      ...formData,
                      vehicleInfo: { ...formData.vehicleInfo, mileage: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="75.000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registarske Tablice
                  </label>
                  <input
                    type="text"
                    value={formData.vehicleInfo.licensePlate}
                    onChange={(e) => setFormData({
                      ...formData,
                      vehicleInfo: { ...formData.vehicleInfo, licensePlate: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="A12-B-345"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dodatne Napomene
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Bilo kakve specifične brige ili zahtjevi vezani za vaše vozilo..."
                  />
                </div>
              </div>

              {/* Review Summary */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Sažetak Termina</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Usluge</h4>
                    <ul className="space-y-1">
                      {formData.selectedServices.map((service) => (
                        <li key={service.id} className="text-sm text-gray-600">
                          {service.name} - {service.price}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-gray-900 mt-2">
                      Ukupno: {calculateTotal()} KM • {calculateTotalTime()}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Detalji Termina</h4>
                    <p className="text-sm text-gray-600">
                      {formData.selectedDate && formatDate(formData.selectedDate)} u {formData.selectedTime}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Vozilo: {formData.vehicleInfo.year} {formData.vehicleInfo.make} {formData.vehicleInfo.model}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Termin Potvrđen!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Hvala što ste odabrali Premier Auto Servis. Primili smo vaš zahtjev za termin.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left max-w-2xl mx-auto border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Detalji Termina</h3>
                <div className="space-y-2">
                  <p><strong>Datum:</strong> {formData.selectedDate && formatDate(formData.selectedDate)}</p>
                  <p><strong>Vrijeme:</strong> {formData.selectedTime}</p>
                  <p><strong>Klijent:</strong> {formData.customerInfo.firstName} {formData.customerInfo.lastName}</p>
                  <p><strong>Vozilo:</strong> {formData.vehicleInfo.year} {formData.vehicleInfo.make} {formData.vehicleInfo.model}</p>
                  <p><strong>Usluge:</strong></p>
                  <ul className="ml-6 space-y-1">
                    {formData.selectedServices.map((service) => (
                      <li key={service.id} className="text-sm">• {service.name} - {service.price}</li>
                    ))}
                  </ul>
                  <p className="pt-2 border-t"><strong>Ukupno:</strong> {calculateTotal()} KM</p>
                </div>
              </div>

              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 mb-8">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      <strong>Šta Sljedeće:</strong> Pozvaćemo vas u roku od 24 sata da potvrdimo vaš termin i razgovaramo o dodatnim detaljima. Molimo da imate vaše vozilo spremno u zakazano vrijeme.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5551234567"
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Pozovite Nas: (555) 123-4567
                </a>
                <button
                  onClick={() => window.print()}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Ispiši Potvrdu
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Nazad
              </button>

              <div className="text-sm text-gray-500">
                Korak {currentStep} od 4
              </div>

              {currentStep === 4 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceedFromStep(currentStep)}
                  className={`flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    canProceedFromStep(currentStep)
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Završi Rezervaciju
                  <CheckCircle className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  disabled={!canProceedFromStep(currentStep)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    canProceedFromStep(currentStep)
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Sljedeće
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;