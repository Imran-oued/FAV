import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const offers = [
  {
    title: 'Hadj 2027',
    price: '3 285 000 FCFA',
    badge: 'Places Limitées',
    subtitle: 'Tarif provisoire',
    buttonText: 'Réserver',
    features: ['Billet d\'avion', 'Hébergement confortable', 'Transport climatisé', 'Restauration de qualité', 'Assistance 24H/24'],
    highlight: true,
  },
  {
    title: 'Oumrah Standard',
    price: '1 300 000 FCFA',
    subtitle: 'Formule Complète',
    buttonText: 'Réserver',
    features: ['Billet d\'avion', 'Hébergement de qualité', 'Transport climatisé', 'Restauration incluse', 'Assistance 24H/24'],
    highlight: false,
  },
  {
    title: 'Oumrah Ramadan',
    price: '1 800 000 FCFA',
    subtitle: 'Spécial Mois Sacré',
    buttonText: 'Réserver',
    features: ['Billet d\'avion', 'Hébergement proche Haram', 'Transport VIP', 'Iftar & Sohour inclus', 'Assistance 24H/24'],
    highlight: false,
  }
];

export const OffersSection = () => {
  return (
    <section id="offers" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Nos Offres Actuelles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez nos formules adaptées pour un pèlerinage en toute sérénité.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 ${offer.highlight ? 'border-brand-red ring-1 ring-brand-red/20 scale-105 md:scale-110 z-10' : 'border-brand-blue'}`}
            >
              {offer.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  {offer.badge}
                </span>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{offer.subtitle}</p>
                <div className="text-3xl font-extrabold text-brand-blue">{offer.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {offer.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-sm">
                    <Check size={18} className="text-brand-gold mr-3 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/22670711717?text=Bonjour, je souhaite réserver l'offre : ${offer.title}`}
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-medium transition-colors flex justify-center items-center ${offer.highlight ? 'bg-brand-red text-white hover:bg-red-700' : 'bg-gray-100 text-brand-dark hover:bg-gray-200'}`}
              >
                {offer.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
