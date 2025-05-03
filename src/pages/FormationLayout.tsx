import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FormationLayoutProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  objectives: string[];
  program: string[];
}

export function FormationLayout({
  title,
  description,
  image,
  duration,
  price,
  objectives,
  program
}: FormationLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Objectifs de la formation</h2>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                    <span className="ml-2">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Programme</h2>
              <ul className="space-y-4">
                {program.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Modalités d'Inscription</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                  <span className="ml-2">Prérequis : Aucun pour les formations débutants</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                  <span className="ml-2">Format : Formations en présentiel et à distance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                  <span className="ml-2">Financement : Possibilité de prise en charge via France Travail, CPF et OPCO</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={image}
              alt={title}
              className="w-full rounded-2xl shadow-lg"
            />
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Durée</h3>
                  <p className="text-gray-600">{duration}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Tarif</h3>
                  <p className="text-gray-600">{price}</p>
                </div>
              </div>

              <form className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contactez-nous
                </h3>
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-lightBlue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-lightBlue focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-lightBlue focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full gradient-bg text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}