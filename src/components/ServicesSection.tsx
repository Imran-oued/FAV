
import { Plane, Hotel, Bus, Utensils, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: Plane, title: 'Billet d\'avion', desc: 'Vols réguliers et affrétés avec les meilleures compagnies.' },
  { icon: Hotel, title: 'Hébergement confortable', desc: 'Hôtels 4 et 5 étoiles à proximité des lieux saints.' },
  { icon: Bus, title: 'Transport climatisé', desc: 'Déplacements sécurisés en bus VIP tout confort.' },
  { icon: Utensils, title: 'Restauration de qualité', desc: 'Pension complète adaptée à vos préférences.' },
  { icon: HeartHandshake, title: 'Assistance 24H/24', desc: 'Notre équipe vous accompagne à chaque étape.' }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Nos Prestations Incluses</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <service.icon size={36} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
