import React from 'react';
import { FormationLayout } from '../FormationLayout';

export function ManagementFormation() {
  return (
    <FormationLayout
      title="Formation Management"
      description="Développez vos compétences en leadership et management d'équipe pour devenir un manager performant et inspirant"
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      duration="4 jours (28 heures)"
      price="Sur devis"
      objectives={[
        "Développer son leadership",
        "Maîtriser les techniques de management",
        "Gérer efficacement une équipe",
        "Améliorer la performance collective"
      ]}
      program={[
        "Les fondamentaux du management",
        "Styles de leadership et adaptation",
        "Communication managériale",
        "Motivation et engagement des équipes",
        "Gestion des conflits",
        "Conduite du changement",
        "Évaluation et développement des compétences",
        "Organisation et délégation"
      ]}
    />
  );
}