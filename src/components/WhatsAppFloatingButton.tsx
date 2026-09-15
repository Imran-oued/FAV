import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton = () => {
  return (
    <a 
      href="https://wa.me/22670711717" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-green text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};
