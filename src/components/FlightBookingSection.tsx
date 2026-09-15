import React, { useState } from 'react';
import { Plane, PlaneTakeoff, PlaneLanding, Calendar, Users, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const FlightBookingSection = () => {
  const [tripType, setTripType] = useState('aller-retour');
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
    travelClass: 'Économique'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `Bonjour, je souhaite un devis pour un billet d'avion.\n\n`;
    message += `Type : ${tripType === 'aller-retour' ? 'Aller-Retour' : 'Aller simple'}\n`;
    message += `Départ : ${formData.origin}\n`;
    message += `Arrivée : ${formData.destination}\n`;
    message += `Date de départ : ${formData.departDate}\n`;
    
    if (tripType === 'aller-retour') {
      message += `Date de retour : ${formData.returnDate}\n`;
    }
    
    message += `Passagers : ${formData.passengers}\n`;
    message += `Classe : ${formData.travelClass}\n`;

    const whatsappUrl = `https://wa.me/22670711717?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="billetterie" className="py-24 bg-brand-blue/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Billetterie IATA</h2>
          <p className="text-gray-600">Trouvez les meilleurs tarifs pour toutes vos destinations avec nos experts.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Booking Form Header */}
          <div className="bg-brand-dark p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Plane size={24} className="text-brand-gold" />
              <h3 className="text-xl font-bold">Réservez votre vol</h3>
            </div>
            <div className="flex bg-white/10 rounded-lg p-1">
              <button 
                type="button"
                onClick={() => setTripType('aller-retour')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tripType === 'aller-retour' ? 'bg-brand-gold text-brand-dark' : 'text-white hover:bg-white/10'}`}
              >
                Aller-Retour
              </button>
              <button 
                type="button"
                onClick={() => setTripType('aller-simple')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tripType === 'aller-simple' ? 'bg-brand-gold text-brand-dark' : 'text-white hover:bg-white/10'}`}
              >
                Aller simple
              </button>
            </div>
          </div>

          {/* Booking Form Body */}
          <form onSubmit={handleBooking} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Origin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville de départ</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PlaneTakeoff size={18} className="text-brand-gold" />
                  </div>
                  <input 
                    type="text" 
                    name="origin"
                    required
                    placeholder="Ex: Ouagadougou (OUA)"
                    value={formData.origin}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-xl border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville d'arrivée</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PlaneLanding size={18} className="text-brand-gold" />
                  </div>
                  <input 
                    type="text" 
                    name="destination"
                    required
                    placeholder="Ex: Jeddah (JED)"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-xl border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Dates */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de départ</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="date" 
                    name="departDate"
                    required
                    value={formData.departDate}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-xl border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {tripType === 'aller-retour' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de retour</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="date" 
                      name="returnDate"
                      required
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="pl-10 w-full rounded-xl border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Passengers & Class */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passagers</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="number" 
                    name="passengers"
                    min="1"
                    required
                    value={formData.passengers}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-xl border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Classe</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase size={18} className="text-gray-400" />
                  </div>
                  <select 
                    name="travelClass"
                    value={formData.travelClass}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-xl border border-gray-300 py-3 px-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all appearance-none bg-white"
                  >
                    <option value="Économique">Économique</option>
                    <option value="Affaires">Affaires (Business)</option>
                    <option value="Première">Première</option>
                  </select>
                </div>
              </div>

            </div>

            <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2 mt-4 text-lg py-4">
              Demander un devis via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
