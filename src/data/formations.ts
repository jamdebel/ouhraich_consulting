export interface Formation {
  slug: string;
  category: 'ia' | 'metier';
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  objectives: string[];
  program: string[];
}

export const formations: Formation[] = [
  {
    slug: 'bureautique',
    category: 'metier',
    title: 'Bureautique',
    shortDescription: 'Maîtrisez la suite Microsoft Office',
    description: 'Formation complète sur les outils bureautiques essentiels pour optimiser votre productivité professionnelle.',
    duration: '400 heures - POEI',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    objectives: [
      'Maîtriser Microsoft Word pour la création de documents professionnels',
      'Exploiter les fonctionnalités avancées d\'Excel pour l\'analyse de données',
      'Créer des présentations impactantes avec PowerPoint',
      'Optimiser la gestion des emails et du calendrier avec Outlook',
      'Collaborer efficacement avec les outils Microsoft 365'
    ],
    program: [
      'Microsoft Word : mise en page avancée, styles, modèles, publipostage',
      'Excel : formules complexes, tableaux croisés dynamiques, macros',
      'PowerPoint : design, animations, transitions, présentations interactives',
      'Outlook : gestion des emails, calendrier, contacts, tâches',
      'Microsoft 365 : collaboration en ligne, partage de documents',
      'OneDrive et SharePoint : stockage et partage de fichiers',
      'Teams : communication et collaboration d\'équipe',
      'Access : introduction aux bases de données',
      'Projet pratique d\'application'
    ]
  },
  {
    slug: 'sirh',
    category: 'metier',
    title: 'SIRH',
    shortDescription: 'Maîtrisez les systèmes d\'information RH',
    description: 'Formation complète sur les systèmes d\'information des ressources humaines pour optimiser la gestion RH de votre entreprise.',
    duration: '400 heures - POEI',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    objectives: [
      'Comprendre les enjeux et le périmètre d\'un SIRH',
      'Maîtriser les fonctionnalités clés des SIRH',
      'Savoir piloter un projet SIRH',
      'Optimiser les processus RH grâce au digital',
      'Assurer la conformité RGPD des données RH'
    ],
    program: [
      'Introduction aux SIRH et leur rôle stratégique',
      'Les différents modules d\'un SIRH',
      'La gestion administrative et le dossier numérique',
      'Le recrutement et l\'intégration',
      'La gestion des temps et des activités',
      'La paie et les déclarations sociales',
      'La gestion des talents et des compétences',
      'La formation et le développement',
      'Les tableaux de bord et le reporting RH'
    ]
  },
  {
    slug: 'recrutement',
    category: 'metier',
    title: 'Recrutement',
    shortDescription: 'Perfectionnez vos techniques de recrutement',
    description: 'Formation approfondie aux techniques de recrutement modernes pour attirer et sélectionner les meilleurs talents.',
    duration: '400 heures - POEI',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    objectives: [
      'Maîtriser le processus de recrutement de A à Z',
      'Définir et rédiger des fiches de poste pertinentes',
      'Utiliser les outils digitaux de sourcing',
      'Conduire des entretiens structurés',
      'Évaluer objectivement les candidats'
    ],
    program: [
      'Stratégie et processus de recrutement',
      'Analyse des besoins et définition de poste',
      'Techniques de sourcing et marque employeur',
      'Sélection et tri des candidatures',
      'Techniques d\'entretien et assessment',
      'Outils digitaux pour le recrutement',
      'Aspects juridiques du recrutement',
      'Onboarding et intégration',
      'Reporting et KPIs du recrutement'
    ]
  },
  {
    slug: 'marketing-digital',
    category: 'metier',
    title: 'Marketing Digital',
    shortDescription: 'Maîtrisez les stratégies marketing digitales',
    description: 'Formation complète en marketing digital pour développer une présence en ligne efficace et générer des résultats mesurables.',
    duration: '400 heures - POEI',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    objectives: [
      'Maîtriser les techniques de référencement naturel (SEO) et payant (SEA)',
      'Gérer efficacement les campagnes publicitaires sur les réseaux sociaux',
      'Créer et optimiser du contenu digital performant',
      'Mettre en place des stratégies d\'automatisation marketing',
      'Développer des stratégies d\'acquisition et de fidélisation client'
    ],
    program: [
      'Fondamentaux du marketing digital',
      'SEO : optimisation pour les moteurs de recherche',
      'SEA : publicité sur les moteurs de recherche',
      'Social Media Marketing et publicité',
      'Content Marketing et création de contenu',
      'Email Marketing et automation',
      'Analytics et mesure de performance',
      'Stratégies d\'acquisition et de fidélisation',
      'Projet pratique et mise en situation'
    ]
  },
  {
    slug: 'metiers-animation',
    category: 'metier',
    title: 'Métiers de l\'Animation',
    shortDescription: 'Devenez un professionnel de l\'animation',
    description: 'Formation approfondie aux métiers de l\'animation pour maîtriser les techniques d\'animation et la gestion de groupes dans différents contextes.',
    duration: '400 heures - POEI',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    objectives: [
      'Concevoir et animer des activités culturelles et éducatives',
      'Maîtriser les techniques de gestion de groupe',
      'Créer des supports pédagogiques numériques innovants',
      'Développer des compétences en animation digitale',
      'Adapter son animation aux différents publics'
    ],
    program: [
      'Fondamentaux de l\'animation',
      'Pédagogie et techniques d\'animation',
      'Gestion de groupe et dynamique collective',
      'Création de supports pédagogiques',
      'Outils numériques pour l\'animation',
      'Animation en ligne et outils digitaux',
      'Psychologie des différents publics',
      'Sécurité et réglementation',
      'Projet pratique d\'animation'
    ]
  },
  {
    slug: 'crypto',
    category: 'metier',
    title: 'Les bases de la Crypto Blockchain',
    shortDescription: 'Découvrez les fondamentaux de la blockchain et des cryptomonnaies',
    description: 'Formation complète pour comprendre et maîtriser les concepts fondamentaux de la blockchain et des cryptomonnaies, leurs applications et leur impact sur l\'économie digitale.',
    duration: '400 heures - POEI',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    objectives: [
      'Comprendre les principes fondamentaux de la blockchain',
      'Maîtriser le fonctionnement des cryptomonnaies',
      'Analyser les différents cas d\'usage de la blockchain',
      'Évaluer les opportunités et les risques des investissements crypto',
      'Comprendre les aspects réglementaires et fiscaux'
    ],
    program: [
      'Introduction à la blockchain et son fonctionnement',
      'Histoire et évolution des cryptomonnaies',
      'Bitcoin : fonctionnement et écosystème',
      'Ethereum et les smart contracts',
      'DeFi (Finance Décentralisée)',
      'NFTs et leurs applications',
      'Sécurité et bonnes pratiques',
      'Aspects juridiques et fiscaux',
      'Analyse technique et fondamentale',
      'Cas pratiques et mise en situation'
    ]
  },
  {
    slug: 'ia-associations',
    category: 'ia',
    title: 'IA et Associations',
    shortDescription: 'Optimisation des processus associatifs grâce à l\'IA',
    description: 'Formation complète sur l\'utilisation de l\'intelligence artificielle dans le secteur associatif pour améliorer l\'efficacité opérationnelle et maximiser l\'impact social.',
    duration: '200 heures',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    objectives: [
      'Maîtriser les outils d\'IA pour l\'automatisation administrative',
      'Optimiser la gestion des bénévoles avec l\'IA',
      'Améliorer la communication et la collecte de fonds',
      'Analyser les données pour mieux servir les bénéficiaires',
      'Implémenter des solutions IA éthiques et responsables'
    ],
    program: [
      'Introduction à l\'IA pour le secteur associatif',
      'Outils d\'automatisation administrative',
      'Gestion intelligente des bénévoles',
      'IA pour la communication et le fundraising',
      'Analyse des données et reporting',
      'Études de cas pratiques',
      'Aspects éthiques et protection des données',
      'Mise en œuvre et suivi des solutions'
    ]
  },
  {
    slug: 'ia-transport',
    category: 'ia',
    title: 'IA et Transport',
    shortDescription: 'Optimisation des systèmes de transport par l\'IA',
    description: 'Formation approfondie sur l\'application de l\'intelligence artificielle dans le secteur des transports pour optimiser les opérations, améliorer la sécurité et la gestion logistique.',
    duration: '200 heures',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    objectives: [
      'Maîtriser les outils d\'IA pour l\'optimisation des itinéraires',
      'Implémenter des systèmes de maintenance prédictive',
      'Optimiser la gestion des flux logistiques',
      'Améliorer la sécurité routière par l\'IA',
      'Développer des solutions de transport intelligent'
    ],
    program: [
      'Introduction à l\'IA dans le transport',
      'Algorithmes d\'optimisation d\'itinéraires',
      'Systèmes de maintenance prédictive',
      'Gestion intelligente du trafic',
      'IA et sécurité routière',
      'Automatisation des réservations',
      'Analyse des données de transport',
      'Études de cas pratiques'
    ]
  },
  {
    slug: 'ia-digital',
    category: 'ia',
    title: 'IA et Digital',
    shortDescription: 'Maîtrisez l\'IA pour la transformation digitale',
    description: 'Formation complète sur l\'intégration de l\'intelligence artificielle dans la stratégie digitale, de la création de contenu à l\'analyse des données marketing.',
    duration: '200 heures',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    objectives: [
      'Maîtriser les outils d\'IA pour la création de contenu automatisé',
      'Optimiser les stratégies marketing avec l\'IA',
      'Analyser les données pour améliorer la conversion',
      'Intégrer l\'IA dans les processus digitaux existants',
      'Automatiser les tâches marketing répétitives'
    ],
    program: [
      'Introduction à l\'IA dans le digital',
      'Création de contenu automatisé (textes, images, vidéos)',
      'IA pour le marketing digital',
      'Analyse de données et prédiction',
      'Personnalisation et recommandation',
      'Automatisation des processus marketing',
      'Intégration d\'outils intelligents',
      'Études de cas et projets pratiques'
    ]
  },
  {
    slug: 'ia-restauration',
    category: 'ia',
    title: 'IA et Restauration',
    shortDescription: 'Optimisation de la gestion restauration par l\'IA',
    description: 'Formation complète sur l\'application de l\'intelligence artificielle dans le secteur de la restauration pour optimiser les opérations, améliorer l\'expérience client et garantir la qualité.',
    duration: '200 heures',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    objectives: [
      'Maîtriser les outils d\'IA pour la gestion des stocks',
      'Optimiser les commandes et la planification',
      'Analyser les tendances clients pour personnaliser l\'offre',
      'Automatiser les réservations et la gestion du personnel',
      'Implémenter des systèmes d\'audit et de contrôle qualité'
    ],
    program: [
      'Introduction à l\'IA dans la restauration',
      'Gestion prédictive des stocks',
      'Analyse des tendances et personnalisation des menus',
      'Systèmes de réservation intelligents',
      'Planification optimisée du personnel',
      'IA et hygiène alimentaire',
      'Outils d\'audit et contrôle qualité',
      'Études de cas pratiques'
    ]
  }
];