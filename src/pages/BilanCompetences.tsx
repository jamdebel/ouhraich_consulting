import React from 'react';
import { ChevronRight, Brain, Target, LineChart, Users2, Rocket, Award } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { ContactForm } from '../components/ContactForm';

export function BilanCompetences() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-brand-darkBlue to-brand-lightBlue text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-cover bg-center opacity-10" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}>
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Bilan de Compétences</h1>
            <p className="text-xl text-gray-100">
              Révélez votre potentiel et construisez vo
tre avenir professionnel avec un accompagnement personnalisé
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Votre Parcours vers l'Excellence Professionnelle
              </h2>
              <p className="text-gray-600 text-lg">
                Notre bilan de compétences vous accompagne dans la définition de votre projet professionnel 
                en accord avec vos aspirations, vos compétences et le marché du travail.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FadeIn direction="up" delay={0}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Analyse Approfondie</h3>
                <p className="text-gray-600">
                  Évaluation détaillée de vos compétences, expériences et aspirations professionnelles
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Objectifs Clairs</h3>
                <p className="text-gray-600">
                  Définition d'objectifs professionnels réalistes et atteignables
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Plan d'Action</h3>
                <p className="text-gray-600">
                  Élaboration d'une stratégie concrète pour atteindre vos objectifs professionnels
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn direction="left">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional Development" 
                className="rounded-2xl shadow-lg"
              />
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text">Pourquoi Faire un Bilan de Compétences ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Donnez un nouveau souffle à votre carrière</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Valorisez vos compétences et talents</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Définissez des objectifs professionnels clairs</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-semibold mb-6">Les Étapes du Bilan</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Phase Préliminaire</h4>
                    <p className="text-gray-600">
                      Analyse de votre demande et définition de vos objectifs spécifiques
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Phase d'Investigation</h4>
                    <p className="text-gray-600">
                      Exploration approfondie de vos compétences, motivations et possibilités d'évolution
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Phase de Conclusion</h4>
                    <p className="text-gray-600">
                      Élaboration de votre projet professionnel et définition des étapes de sa mise en œuvre
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <FadeIn direction="left">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <Users2 className="w-6 h-6 text-brand-darkBlue mr-3" />
                    <h3 className="text-2xl font-semibold">Notre Accompagnement</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                      <span className="ml-2">24 heures d'accompagnement personnalisé</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                      <span className="ml-2">Tests psychométriques et d'orientation professionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                      <span className="ml-2">Exploration du marché de l'emploi et des opportunités</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-brand-darkBlue flex-shrink-0 mt-1" />
                      <span className="ml-2">Synthèse détaillée et plan d'action personnalisé</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Professional Guidance" 
                  className="rounded-2xl shadow-lg"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Prêt à Commencer Votre Bilan ?
                </h2>
                <p className="text-gray-600 text-lg">
                  Contactez-nous pour planifier votre premier entretien gratuit
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}