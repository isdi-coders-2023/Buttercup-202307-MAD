import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppContext, AppContextStructure } from '../../context/app.context';
import { Card } from '../card/card';
import Cards from './cards';

jest.mock('../card/card');

describe('Given the component Cards', () => {
  describe('When we render it', () => {
    const loadCardMock = jest.fn();

    const mockContextValue: AppContextStructure = {
      cardsContext: {
        cards: [{ id: 1 }],
        loadCards: loadCardMock,
      },
    } as unknown as AppContextStructure;

    test('The component should be in the document after the data load', async () => {
      render(
        <AppContext.Provider value={mockContextValue}>
          <Cards></Cards>
        </AppContext.Provider>
      );
      expect(Card).toHaveBeenCalled();
    });
  });
});
