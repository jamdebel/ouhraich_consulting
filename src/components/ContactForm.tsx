import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

const countryPhoneCodes = [
  { code: '+33', country: 'France' },
  { code: '+32', country: 'Belgique' },
  { code: '+41', country: 'Suisse' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+212', country: 'Maroc' },
  { code: '+213', country: 'Algérie' },
  { code: '+216', country: 'Tunisie' },
  { code: '+221', country: 'Sénégal' },
  { code: '+225', country: 'Côte d\'Ivoire' },
  { code: '+237', country: 'Cameroun' },
  { code: '+243', country: 'RD Congo' },
  { code: '+34', country: 'Espagne' },
  { code: '+39', country: 'Italie' },
  { code: '+44', country: 'Royaume-Uni' },
  { code: '+49', country: 'Allemagne' },
  { code: '+351', country: 'Portugal' },
  { code: '+31', country: 'Pays-Bas' },
  { code: '+32', country: 'Belgique' },
  { code: '+45', country: 'Danemark' },
  { code: '+46', country: 'Suède' },
  { code: '+47', country: 'Norvège' },
  { code: '+358', country: 'Finlande' },
  { code: '+48', country: 'Pologne' },
  { code: '+420', country: 'République tchèque' },
  { code: '+36', country: 'Hongrie' },
  { code: '+30', country: 'Grèce' },
  { code: '+40', country: 'Roumanie' },
  { code: '+359', country: 'Bulgarie' },
  { code: '+7', country: 'Russie' },
  { code: '+380', country: 'Ukraine' },
  { code: '+1', country: 'États-Unis/Canada' },
  { code: '+52', country: 'Mexique' },
  { code: '+55', country: 'Brésil' },
  { code: '+54', country: 'Argentine' },
  { code: '+56', country: 'Chili' },
  { code: '+57', country: 'Colombie' },
  { code: '+51', country: 'Pérou' },
  { code: '+58', country: 'Venezuela' },
  { code: '+86', country: 'Chine' },
  { code: '+81', country: 'Japon' },
  { code: '+82', country: 'Corée du Sud' },
  { code: '+91', country: 'Inde' },
  { code: '+65', country: 'Singapour' },
  { code: '+60', country: 'Malaisie' },
  { code: '+66', country: 'Thaïlande' },
  { code: '+84', country: 'Vietnam' },
  { code: '+62', country: 'Indonésie' },
  { code: '+61', country: 'Australie' },
  { code: '+64', country: 'Nouvelle-Zélande' },
  { code: '+27', country: 'Afrique du Sud' }
].sort((a, b) => a.country.localeCompare(b.country, 'fr'));

export function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+33',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'contact@ouhraich-consulting.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: `${formData.phoneCode}${formData.phoneNumber}`,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phoneCode: '+33',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 md:space-y-6 w-full max-w-lg mx-auto ${className}`}>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          placeholder="Votre nom"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 text-sm md:text-base bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-lightBlue focus:outline-none transition-colors"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 text-sm md:text-base bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-lightBlue focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <div className="flex gap-2 md:gap-4">
          <select
            id="phoneCode"
            value={formData.phoneCode}
            onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
            className="w-36 md:w-48 px-2 md:px-4 py-3 text-sm md:text-base bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-lightBlue focus:outline-none transition-colors"
          >
            {countryPhoneCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} ({country.country})
              </option>
            ))}
          </select>
          
          <input
            id="phone"
            type="tel"
            placeholder="Numéro"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            required
            className="flex-1 px-4 py-3 text-sm md:text-base bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-lightBlue focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="w-full px-4 py-3 text-sm md:text-base bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-lightBlue focus:outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        disabled={status === 'sending'}
        className="w-full gradient-bg text-white px-6 py-3 md:py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 text-sm md:text-base"
      >
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center text-sm md:text-base">Message envoyé avec succès!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center text-sm md:text-base">Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </form>
  );
}