import React from 'react';
import { FormationLayout } from '../FormationLayout';
import { formations } from '../../data/formations';

export function SIRHFormation() {
  const formation = formations.find(f => f.slug === 'sirh')!;

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