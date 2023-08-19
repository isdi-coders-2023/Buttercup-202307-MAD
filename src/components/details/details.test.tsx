import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContext, AppContextStructure } from '../../context/app.context';
import Details from './details';

jest.mock('../../hooks/use.cards');

describe('Given the componente Detail', () => {
  describe('When we render it', () => {
    const filterByCardtMock = jest.fn();
    const mockContextValue: AppContextStructure = {
      cardsContext: {
        filterByCard: filterByCardtMock,
      },
    } as unknown as AppContextStructure;
    render(
      <AppContext.Provider value={mockContextValue}>
        <Router>
          <Details></Details>
        </Router>
      </AppContext.Provider>
    );
    test('the component should be in the document', () => {
      const elementOption = screen.getByRole('img');
      expect(elementOption).toBeInTheDocument();
    });
  });
});
