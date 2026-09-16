
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" 
        style={{ backgroundImage: "url('/kaaba-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-wider text-sm mb-6 border border-brand-red/30">
            La sécurité et le confort
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-brand-gold drop-shadow-xl">
            Le voyage d'une vie <br className="hidden md:block"/> commence maintenant.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Plus de 20 ans d'expérience dans l'organisation du Hadj, de l'Oumrah et la billetterie avec FASO ALI VOYAGES SARL.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/offres" className="btn-primary cursor-pointer text-lg inline-flex items-center justify-center">
              Découvrir nos offres
            </RouterLink>
            <RouterLink to="/billetterie" className="btn-outline cursor-pointer text-lg inline-flex items-center justify-center border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
              Réserver un billet d'avion
            </RouterLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
