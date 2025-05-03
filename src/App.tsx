import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BookOpen, Users2, Award, ChevronRight, Phone, Mail, MapPin, Menu, Linkedin, Trophy, Star, X } from 'lucide-react';
import { AnimatedText } from './components/AnimatedText';
import { FadeIn } from './components/FadeIn';
import { FormationsModal } from './components/FormationsModal';
import { FormationDetail } from './pages/FormationDetail';
import { SIRHFormation } from './pages/formations/SIRH';
import { RecrutementFormation } from './pages/formations/Recrutement';
import { BureautiqueFormation } from './pages/formations/Bureautique';
import { CryptoFormation } from './pages/formations/Crypto';
import { ManagementFormation } from './pages/formations/Management';
import { BilanCompetencesFormation } from './pages/formations/BilanCompetences';
import { IAAssociationsFormation } from './pages/formations/IAAssociations';
import { IADigitalFormation } from './pages/formations/IADigital';
import { IARestaurationFormation } from './pages/formations/IARestauration';
import { MarketingDigitalFormation } from './pages/formations/MarketingDigital';
import { MetiersAnimationFormation } from './pages/formations/MetiersAnimation';
import { useCountUp } from './hooks/useCountUp';
import { ContactForm } from './components/ContactForm';
import { BilanCompetences } from './pages/BilanCompetences';

function App() {
  const [isFormationsModalOpen, setIsFormationsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  const [missionsRef, missionsCount] = useCountUp(200);
  const [satisfactionRef, satisfactionCount] = useCountUp(98);

  return (
    <div className="min-h-screen bg-white">
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/jmjbMif.png" 
                alt="Ouhraich Consulting" 
                className={`h-12 md:h-16 transition-all duration-300 ${
                  (!isScrolled && !isMobileMenuOpen) && 'brightness-0 invert'
                }`}
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a 
                href="/" 
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-darkBlue' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Accueil
              </a>
              <button 
                onClick={() => setIsFormationsModalOpen(true)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-darkBlue' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Nos Formations
              </button>
              <a 
                href="/bilan-competences" 
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-darkBlue' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Bilan de Compétences
              </a>
              <a 
                href="https://www.linkedin.com/company/ouhraich-consulting/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium inline-flex items-center space-x-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-darkBlue' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="/#contact" 
                className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Contactez-nous
              </a>
            </nav>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${
                isScrolled || isMobileMenuOpen ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="font-medium text-gray-700 hover:text-brand-darkBlue"
                >
                  Accueil
                </a>
                <button 
                  onClick={() => {
                    setIsFormationsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="font-medium text-left text-gray-700 hover:text-brand-darkBlue"
                >
                  Nos Formations
                </button>
                <a 
                  href="/bilan-competences" 
                  className="font-medium text-gray-700 hover:text-brand-darkBlue"
                >
                  Bilan de Compétences
                </a>
                <a 
                  href="https://www.linkedin.com/company/ouhraich-consulting/?originalSubdomain=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium inline-flex items-center space-x-2 text-gray-700 hover:text-brand-darkBlue"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="/#contact" 
                  className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity inline-block text-center"
                >
                  Contactez-nous
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Add a spacer to prevent content from being hidden under the fixed header */}
      <div className="h-24"></div>

      <FormationsModal 
        isOpen={isFormationsModalOpen}
        onClose={() => setIsFormationsModalOpen(false)}
      />

      <Routes>
        <Route path="/bilan-competences" element={<BilanCompetences />} />
        <Route path="/formations/sirh" element={<SIRHFormation />} />
        <Route path="/formations/recrutement" element={<RecrutementFormation />} />
        <Route path="/formations/bureautique" element={<BureautiqueFormation />} />
        <Route path="/formations/crypto" element={<CryptoFormation />} />
        <Route path="/formations/management" element={<ManagementFormation />} />
        <Route path="/formations/bilan-competences" element={<BilanCompetencesFormation />} />
        <Route path="/formations/ia-associations" element={<IAAssociationsFormation />} />
        <Route path="/formations/ia-digital" element={<IADigitalFormation />} />
        <Route path="/formations/ia-restauration" element={<IARestaurationFormation />} />
        <Route path="/formations/marketing-digital" element={<MarketingDigitalFormation />} />
        <Route path="/formations/metiers-animation" element={<MetiersAnimationFormation />} />
        <Route path="/formations/:slug" element={<FormationDetail />} />
        <Route path="/" element={
          <>
            <section className="relative h-[500px] md:h-[600px] bg-cover bg-center -mt-24" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/90 to-brand-lightBlue/90"></div>
              <div className="relative container mx-auto h-full">
                <div className="grid md:grid-cols-2 gap-8 h-full items-center px-0 md:px-4">
                  <div className="px-4 md:px-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white mt-24 md:mt-0">
                      <AnimatedText text="Transformez Votre " delay={0} speed={20} />
                      <AnimatedText text="Potentiel" className="text-brand-lightBlue" delay={500} speed={20} />
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200">
                      <AnimatedText 
                        text="Formation professionnelle sur mesure pour développer vos compétences et accélérer votre carrière"
                        delay={1000}
                        speed={15}
                      />
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => setIsFormationsModalOpen(true)}
                        className="gradient-bg text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center transform hover:scale-105 transition-transform duration-200"
                      >
                        Nos formations
                        <ChevronRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                  <FadeIn direction="left" delay={1500}>
                    <div className="flex justify-center items-center h-full">
                      <img 
                        src="https://wydden.com/wp-content/uploads/2022/01/qualiopi-logo-png.png" 
                        alt="Qualiopi Certification" 
                        className="h-32 md:h-48 lg:h-64"
                      />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto px-4">
                <FadeIn>
                  <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Pourquoi Nous Choisir</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      Des solutions de formation adaptées à vos besoins spécifiques
                    </p>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
                  <FadeIn direction="left">
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                        Une Offre Alignée sur les Exigences de France Travail
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Nos formations, en grande partie des POEI (Préparation Opérationnelle à l'Emploi Individuelle) financées par France Travail, sont spécialement conçues pour répondre aux besoins immédiats des employeurs et faciliter l'insertion professionnelle des apprenants.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <ChevronRight className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                          <p className="text-gray-700">Un socle de compétences fondamentales</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <ChevronRight className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                          <p className="text-gray-700">Une spécialisation métier adaptée au secteur visé</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <ChevronRight className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                          <p className="text-gray-700">Des mises en situation professionnelles</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <ChevronRight className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                          <p className="text-gray-700">Une évaluation continue des acquis</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <ChevronRight className="w-6 h-6 text-brand-darkBlue flex-shrink-0 mt-1" />
                          <p className="text-gray-700">Un accompagnement vers l'emploi ou la reconversion professionnelle</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn direction="right">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-darkBlue/10 to-brand-lightBlue/10 rounded-2xl transform -rotate-3"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Formation professionnelle" 
                        className="rounded-2xl shadow-xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                      />
                    </div>
                  </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  <FadeIn direction="up" delay={0}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="gradient-bg w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center mb-6">
                        <BookOpen className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">Formations Certifiantes</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Obtenez des certifications reconnues pour valoriser votre expertise professionnelle
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn direction="up" delay={200}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="gradient-bg w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center mb-6">
                        <Users2 className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">Experts Qualifiés</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Une équipe de formateurs expérimentés dédiée à votre réussite
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn direction="up" delay={400}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="gradient-bg w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center mb-6">
                        <Award className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">Certifié Qualiopi</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Gage de notre expertise et de la qualité de nos formations
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <FadeIn>
                  <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Notre Équipe</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      Des experts passionnés par la transmission du savoir
                    </p>
                  </div>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                  <FadeIn direction="left" delay={0}>
                    <div 
                      onClick={() => handleCardClick('https://www.linkedin.com/in/hassan-ouhraich/')}
                      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer"
                    >
                      <div className="aspect-[4/3] mb-4">
                        <img 
                          src="https://media.licdn.com/dms/image/v2/C4D03AQEOKUwvBDNUnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1569402930283?e=1750291200&v=beta&t=5g7kU0M_uf_yUEVJVTjo38gaVBJRFAUkBl731n56b88" 
                          alt="Hassan Ouhraich" 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold">Hassan Ouhraich</h3>
                          <a 
                            href="https://www.linkedin.com/in/hassan-ouhraich/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-darkBlue hover:text-brand-lightBlue transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                        <p className="text-brand-darkBlue font-medium mb-2 text-sm">Formateur</p>
                        <p className="text-gray-600">Formateur, expert en RH et gestion de projet avec plus de 10 ans d'expérience.</p>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn direction="right" delay={200}>
                    <div 
                      onClick={() => handleCardClick('https://www.linkedin.com/in/mohamed-ouhraich-1039aa43/')}
                      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer"
                    >
                      <div className="aspect-[4/3] mb-4">
                        <img 
                          src="https://media.licdn.com/dms/image/v2/C5603AQFap4HTV6TTqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1572943487840?e=1750291200&v=beta&t=-wp8FzpJGiIS7l_WiV6KvXEjGkaApoudKwCV6I4aEC0" 
                          alt="Mohamed Ouhraich" 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold">Mohamed Ouhraich</h3>
                          <a 
                            href="https://www.linkedin.com/in/mohamed-ouhraich-1039aa43/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-darkBlue hover:text-brand-lightBlue transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                        <p className="text-brand-darkBlue font-medium mb-2 text-sm">Formateur</p>
                        <p className="text-gray-600">Expert en formation professionnelle et développement des compétences.</p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto px-4">
                <FadeIn>
                  <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Nos Chiffres</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      La confiance de nos clients témoigne de notre expertise
                    </p>
                  </div>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div ref={missionsRef} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex items-center">
                    <div className="flex items-center space-x-4 md:space-x-6 w-full">
                      <div className="gradient-bg w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">+{missionsCount}</div>
                        <p className="text-lg md:text-xl text-gray-600">Missions réalisées avec succès</p>
                      </div>
                    </div>
                  </div>
                  <div ref={satisfactionRef} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex items-center">
                    <div className="flex items-center space-x-4 md:space-x-6 w-full">
                      <div className="gradient-bg w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{satisfactionCount}%</div>
                        <p className="text-lg md:text-xl text-gray-600">Taux de satisfaction client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <FadeIn>
                  <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Contactez-nous</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      Notre équipe est à votre écoute pour répondre à toutes vos questions
                    </p>
                  </div>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  <FadeIn direction="left">
                    <div className="space-y-6 md:space-y-8">
                      <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl">
                        <Phone className="w-6 md:w-8 h-6 md:h-8 text-brand-darkBlue" />
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold">Téléphone</h4>
                          <p className="text-gray-600">+33 66 12 06 89 16</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl">
                        <Mail className="w-6 md:w-8 h-6 md:h-8 text-brand-darkBlue" />
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold">Email</h4>
                          <p className="text-gray-600">contact@ouhraich-consulting.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl">
                        <MapPin className="w-6 md:w-8 h-6 md:h-8 text-brand-darkBlue" />
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold">Adresse</h4>
                          <p className="text-gray-600">221 rue des gros grès 92700 Colombes</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn direction="right">
                    <ContactForm />
                  </FadeIn>
                </div>
              </div>
            </section>
          </>
        } />
      </Routes>

      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col space-y-4">
                <img src="https://i.imgur.com/jmjbMif.png" alt="Ouhraich Consulting" className="h-12 md:h-16 brightness-0 invert" />
                <p className="text-gray-400">
                  Votre partenaire de confiance pour la formation professionnelle depuis 2019
                </p>
                <a 
                  href="https://www.linkedin.com/company/ouhraich-consulting/?originalSubdomain=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Suivez-nous sur LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 md:mb-6">Navigation</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
                <li><button onClick={() => setIsFormationsModalOpen(true)} className="hover:text-white transition-colors">Formations</button></li>
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 md:mb-6">Formations</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Développement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 md:mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Restez informé de nos dernières formations et actualités
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 md:py-3 rounded-l-lg bg-gray-800 border-2 border-gray-700 focus:outline-none focus:border-brand-lightBlue"
                />
                <button className="gradient-bg px-4 md:px-6 rounded-r-lg font-medium">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ouhraich Consulting. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;