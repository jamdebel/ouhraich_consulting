import React from 'react';
import { useParams } from 'react-router-dom';
import { formations } from '../data/formations';
import { ChevronRight } from 'lucide-react';

export function FormationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const formation = formations.find(f => f.slug === slug);

  if (!formation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Formation non trouvée</h1>
          <p className="text-gray-600 mt-2">La formation que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{formation.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{formation.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Objectifs de la formation</h2>
              <ul className="space-y-4">
                {formation.objectives.map((objective, index) => (
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
                {formation.program.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={formation.image}
              alt={formation.title}
              className="w-full rounded-2xl shadow-lg"
            />
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Durée</h3>
                  <p className="text-gray-600">{formation.duration}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Tarif</h3>
                  <p className="text-gray-600">{formation.price}</p>
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