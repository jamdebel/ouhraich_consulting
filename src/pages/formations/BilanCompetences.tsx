import React from 'react';
import { FormationLayout } from '../FormationLayout';

export function BilanCompetencesFormation() {
  return (
    <FormationLayout
      title="Bilan de Compétences"
      description="Faites le point sur vos compétences et construisez votre projet professionnel avec un accompagnement personnalisé"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      duration="24 heures (sur 2 à 3 mois)"
      price="Sur devis"
      objectives={[
        "Analyser ses compétences personnelles et professionnelles",
        "Identifier ses motivations et ses valeurs",
        "Définir un projet professionnel réaliste",
        "Construire un plan d'action concret"
      ]}
      program={[
        "Phase préliminaire : analyse de la demande",
        "Investigation des compétences et motivations",
        "Tests de personnalité et d'intérêts professionnels",
        "Exploration des métiers et secteurs d'activité",
        "Validation du projet professionnel",
        "Élaboration du plan d'action",
        "Suivi et accompagnement personnalisé"
      ]}
    />
  );
}