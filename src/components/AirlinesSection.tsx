import React from 'react';

const airlines = [
  { name: "Ethiopian Airlines", logo: "/airlines/ethiopian.png" },
  { name: "Royal Air Maroc", logo: "/airlines/royalairmaroc.png" },
  { name: "Turkish Airlines", logo: "/airlines/turkish.png" },
  { name: "Emirates", logo: "/airlines/emirates.png" },
  { name: "Air Burkina", logo: "/airlines/airburkina.png" },
  { name: "Air France", logo: "/airlines/airfrance.png" },
  { name: "Tunisair", logo: "/airlines/tunisair.png" }
];

// Tripler le tableau pour s'assurer que le défilement infini n'a pas de trou
const scrollingAirlines = [...airlines, ...airlines, ...airlines];

export const AirlinesSection = () => {
  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Ils nous font confiance</p>
      </div>
      
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Left and Right Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee Track */}
        <div className="flex w-max animate-scroll items-center gap-16 md:gap-24 px-8">
          {scrollingAirlines.map((airline, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer min-w-[180px] group"
            >
              <img 
                src={airline.logo} 
                alt={airline.name}
                className="h-8 md:h-10 object-contain rounded-sm"
              />
              <span className="text-xl md:text-2xl font-display font-bold text-gray-700 group-hover:text-brand-blue transition-colors duration-300 whitespace-nowrap">
                {airline.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
