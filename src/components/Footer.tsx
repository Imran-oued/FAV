import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-scroll';

export const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer id="contact" className="bg-[#05101f] text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-4">
              <img src="/logo.jpg" alt="FAV Logo" className="h-12 md:h-16 bg-white rounded-full p-1 shadow-sm shrink-0" />
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Notre agence est agréée et reconnue par l'État du Burkina Faso. <br/>Nous disposons également de l'accréditation IATA.
            </p>
            <img src="/iata-logo.png" alt="IATA Logo" className="h-12 bg-white rounded shadow-sm p-1" />
          </div>


          {/* Contacts Burkina */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Burkina Faso</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+226 78 40 73 16 <br/> +226 76 59 92 92</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#25D366] shrink-0" />
                <span>WhatsApp: +226 70 71 17 17</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>fasodega@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
                <span>Avenue de l'Aéroport, face à la Station Total, 11 BP 1637 Ouagadougou 11</span>
              </li>
            </ul>
          </div>

          {/* Contacts Mecca */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact La Mecque</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+96 653 555 4122</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} FASO ALI VOYAGES SARL. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button onClick={() => setActiveModal('mentions')} className="hover:text-white transition-colors cursor-pointer">Mentions légales</button>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors cursor-pointer">Politique de confidentialité</button>
          </div>
        </div>
      </div>

      {/* Modal Textes Juridiques */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white text-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold text-brand-dark">
                {activeModal === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-brand-red transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {activeModal === 'mentions' ? (
                <div className="space-y-4 text-sm leading-relaxed">
                  <p><strong>Éditeur du site :</strong> FASO ALI VOYAGES SARL</p>
                  <p><strong>Siège social :</strong> Avenue de l'Aéroport, face à la Station Total, 11 BP 1637 Ouagadougou 11, Burkina Faso.</p>
                  <p><strong>Contact :</strong> +226 78 40 73 16 / fasodega@gmail.com</p>
                  <p><strong>Agrément :</strong> Agence agréée et reconnue par l'État du Burkina Faso, accréditée IATA.</p>
                  <p className="text-gray-400 mt-6 pt-4 border-t border-gray-100 italic">Ce texte est une base de mentions légales. Il devra être validé avec vos informations exactes.</p>
                </div>
              ) : (
                <div className="space-y-4 text-sm leading-relaxed">
                  <p><strong>Protection de vos données :</strong></p>
                  <p>FASO ALI VOYAGES SARL s'engage à ce que la collecte et le traitement de vos données, effectués à partir de nos canaux de communication (notamment WhatsApp), soient sécurisés et confidentiels.</p>
                  <p>Les informations que vous nous transmettez sont strictement réservées à l'organisation de votre voyage (Hadj, Oumrah, Billetterie) et ne seront jamais revendues à des tiers.</p>
                  <p className="text-gray-400 mt-6 pt-4 border-t border-gray-100 italic">Ce texte est une base de politique de confidentialité. Il devra être validé avec vos informations exactes.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
