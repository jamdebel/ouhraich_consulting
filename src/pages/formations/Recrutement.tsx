import React from 'react';
import { FormationLayout } from '../FormationLayout';
import { formations } from '../../data/formations';

export function RecrutementFormation() {
  const formation = formations.find(f => f.slug === 'recrutement')!;

  return (
    <FormationLayout
      title={formation.title}
      description={formation.description}
      image={formation.image}
      duration={formation.duration}
      price={formation.price}
      objectives={formation.objectives}
      program={formation.program}
    />
  );
}