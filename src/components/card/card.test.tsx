import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Given the component Card', () => {
  const mockState = {
    pack_code: 'Core',
    pack_name: 'Core Set',
    type_code: 'hero',
    type_name: 'Hero',
    sphere_code: 'leadership',
    sphere_name: 'Leadership',
    position: 1,
    code: '01001',
    name: 'Aragorn',
    traits: 'Dúnedain. Noble. Ranger.',
    text: 'Sentinel.\n<b>Response:</b> After Aragorn commits to a quest, spend 1 resource from his resource pool to ready him.',
    flavor:
      '"I am Aragorn son of Arathorn; and if by life or death I can save you, I will."\n<cite>The Fellowship of the Ring</cite>',
    is_unique: true,
    threat: 12,
    willpower: 2,
    attack: 3,
    defense: 2,
    health: 5,
    quantity: 1,
    deck_limit: 1,
    illustrator: 'John Stanko',
    octgnid: '51223bd0-ffd1-11df-a976-0801200c9001',
    has_errata: false,
    url: 'https://ringsdb.com/card/01001',
    imagesrc: '/bundles/cards/01001.png',
  };

  describe('When we render it', () => {
    render(<Card item={mockState}></Card>);
    test('the component should be in the document', () => {
      const element = screen.getByText('Aragorn');
      expect(element).toBeInTheDocument();
    });
  });
});
