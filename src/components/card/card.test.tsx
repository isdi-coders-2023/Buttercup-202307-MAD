import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Given the component Card', () => {
  const mockState = {
    pack_code: 'Core',
    pack_name: 'Core Set',
    type_code: 'hero',
    type_name: 'Hero',
    sphere_code: 'tactics',
    sphere_name: 'Tactics',
    position: 4,
    code: '01004',
    name: 'Gimli',
    traits: 'Dwarf. Noble. Warrior.',
    text: 'Gimli gets +1 [attack] for each damage token on him.',
    flavor:
      '"Men need many words before deeds. My axe is restless in my hands." <cite>The Two Towers</cite>',
    is_unique: true,
    threat: 11,
    willpower: 2,
    attack: 2,
    defense: 2,
    health: 5,
    quantity: 1,
    deck_limit: 1,
    illustrator: 'Tony Foti',
    octgnid: '51223bd0-ffd1-11df-a976-0801200c9004',
    has_errata: false,
    url: 'https://ringsdb.com/card/01004',
    imagesrc: '/bundles/cards/01004.png',
  };

  describe('When we render it', () => {
    render(<Card item={mockState}></Card>);
    test('the component should be in the document', () => {
      const element = screen.getByText('Gimli');
      expect(element).toBeInTheDocument();
    });
  });
});
