import React from 'react';
import { FormationLayout } from '../FormationLayout';

export function CryptoFormation() {
  return (
    <FormationLayout
      title="Formation Crypto & Blockchain"
      description="Découvrez les fondamentaux de la blockchain et des cryptomonnaies pour comprendre les enjeux de cette révolution numérique"
      image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      duration="3 jours (21 heures)"
      price="Sur devis"
      objectives={[
        "Comprendre les principes de la blockchain",
        "Maîtriser les concepts clés des cryptomonnaies",
        "Identifier les cas d'usage pertinents",
        "Évaluer les opportunités et les risques"
      ]}
      program={[
        "Introduction à la blockchain et son fonctionnement",
        "Les différents types de cryptomonnaies",
        "Smart contracts et applications décentralisées",
        "Sécurité et bonnes pratiques",
        "Aspects réglementaires et juridiques",
        "Cas d'usage par secteur d'activité",
        "Tendances et perspectives d'avenir"
      ]}
    />
  );
}