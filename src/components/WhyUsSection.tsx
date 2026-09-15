import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, MapPin, Smile, Star } from 'lucide-react';

const reasons = [
  { icon: Clock, title: 'Plus de 20 ans d\'expérience', desc: 'Une expertise inégalée dans l\'organisation de voyages religieux.' },
  { icon: MapPin, title: 'Accompagnement complet', desc: 'Nous sommes à vos côtés avant, pendant et après votre pèlerinage.' },
  { icon: ShieldCheck, title: 'Organisation professionnelle', desc: 'Un encadrement rigoureux pour une sécurité garantie à 100%.' },
  { icon: Users, title: 'Équipe disponible 24H/24', desc: 'Des professionnels dévoués pour répondre à tous vos besoins.' },
  { icon: Smile, title: 'Confort et Sérénité', desc: 'Voyagez l\'esprit tranquille, nous nous occupons de tout.' }
];

export const WhyUsSection = () => {
  return (
    <section id="whyus" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="mb-6 inline-flex flex-col font-display font-bold text-brand-gold text-4xl md:text-5xl leading-none">
              <span>FASO ALI VOYAGES</span>
              <span>SARL</span>
            </div>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              FASO ALI VOYAGES SARL, c'est l'assurance d'un pèlerinage accompli dans les meilleures conditions. Notre longévité témoigne de la confiance de nos pèlerins.
            </p>

            <div className="flex items-center gap-1 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-sm text-gray-400 ml-2">Approuvé par des milliers de pèlerins</span>
            </div>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 shrink-0">
                    <reason.icon size={24} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-400">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white/5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop" 
                alt="Pèlerins à La Mecque" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
