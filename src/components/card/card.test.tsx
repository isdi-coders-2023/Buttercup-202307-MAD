import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Card } from './card';

describe('Given the componente Card', () => {
  describe('When we render it', () => {
    const cardNoId = {
      pack_code: 'string',
      pack_name: 'string',
      type_code: 'string',
      type_name: 'string',
      sphere_code: 'string',
      sphere_name: 'string',
      position: 1,
      code: 'string',
      name: 'string',
      traits: 'string',
      text: 'string',
      flavor: 'string',
      is_unique: true,
      quantity: 1,
      deck_limit: 1,
      illustrator: 'string',
      octgnid: 'string',
      has_errata: true,
      url: 'string',
      imagesrc: 'string',
      cost: 'string',
      willpower: 1,
      attack: 1,
      defense: 1,
      health: 1,
      threat: 1,
    };

    render(
      <MemoryRouter>
        <Card item={cardNoId}></Card>
      </MemoryRouter>
    );
    test('The component should be in the document', () => {
      const element = screen.getByRole('row');
      expect(element).toBeInTheDocument();
    });
  });
});
