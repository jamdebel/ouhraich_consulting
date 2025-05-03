import React, { useState, useRef, useEffect } from 'react';
import { Brain, ChevronRight, GraduationCap, Briefcase, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formations } from '../data/formations.ts';

interface FormationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormationsModal({ isOpen, onClose }: FormationsModalProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigate = (slug: string) => {
    onClose();
    navigate(`/formations/${slug}`);
  };

  const filteredFormations = formations.filter(formation => 
    formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    formation.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    formation.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const metierFormations = filteredFormations.filter(f => f.category === 'metier');
  const iaFormations = filteredFormations.filter(f => f.category === 'ia');

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl p-8 max-w-7xl w-full max-h-[85vh] relative modal-content"
        style={{
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#003B73 #E5E7EB',
        }}
      >
        <style>
          {`
            .modal-content::-webkit-scrollbar {
              width: 8px;
            }
            .modal-content::-webkit-scrollbar-track {
              background: #E5E7EB;
              border-radius: 4px;
            }
            .modal-content::-webkit-scrollbar-thumb {
              background: #003B73;
              border-radius: 4px;
            }
            .modal-content::-webkit-scrollbar-thumb:hover {
              background: #00A7E1;
            }
          `}
        </style>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <span className="text-xl font-medium text-gray-600">×</span>
        </button>
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text text-center">
            Nos Formations
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg mb-8">
            Ouhraich Consulting est un centre de formation innovant, engagé dans la montée en compétences des professionnels face aux défis des nouvelles technologies et des mutations du marché du travail.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-brand-lightBlue focus:outline-none transition-colors"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-16">
          {metierFormations.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-brand-darkBlue" />
                Formations Métiers
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metierFormations.map((formation) => (
                  <div
                    key={formation.slug}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img 
                        src={formation.image} 
                        alt={formation.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 gradient-bg p-3 rounded-xl shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-darkBlue transition-colors line-clamp-2">
                        {formation.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{formation.shortDescription}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-brand-darkBlue font-medium">
                          {formation.duration}
                        </span>
                        <button 
                          onClick={() => handleNavigate(formation.slug)}
                          className="text-brand-darkBlue hover:text-brand-lightBlue transition-colors flex items-center group"
                        >
                          En savoir plus
                          <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {iaFormations.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-brand-darkBlue" />
                Formations IA
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {iaFormations.map((formation) => (
                  <div
                    key={formation.slug}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img 
                        src={formation.image} 
                        alt={formation.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 gradient-bg p-3 rounded-xl shadow-lg">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-darkBlue transition-colors line-clamp-2">
                        {formation.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{formation.shortDescription}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-brand-darkBlue font-medium">
                          {formation.duration}
                        </span>
                        <button 
                          onClick={() => handleNavigate(formation.slug)}
                          className="text-brand-darkBlue hover:text-brand-lightBlue transition-colors flex items-center group"
                        >
                          En savoir plus
                          <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredFormations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Aucune formation ne correspond à votre recherche.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6">Modalités d'Inscription</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-3">
              <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0" />
              <span>Prérequis : Aucun pour les formations débutants</span>
            </li>
            <li className="flex items-center space-x-3">
              <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0" />
              <span>Format : Formations en présentiel et à distance</span>
            </li>
            <li className="flex items-center space-x-3">
              <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0" />
              <span>Financement : Possibilité de prise en charge via France Travail, CPF et OPCO</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}