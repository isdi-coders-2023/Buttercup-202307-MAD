import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApiCardRepository } from '../services/api.card.repository';
import { useCards } from './use.cards';

describe('Given custom hook useCards', () => {
  function TestComponent() {
    const { cards, loadCards } = useCards();
    return (
      <>
        <h1>Test Component</h1>
        <button role="button" onClick={() => loadCards('')}>
          1
        </button>
        <p>Element 1 ID: {cards![0]?.id}</p>
      </>
    );
  }
  describe('When the component run the hook', () => {
    beforeEach(() => {
      ApiCardRepository.prototype.getAll = jest.fn();
      render(<TestComponent></TestComponent>);
    });

    test('The component should be in the document', () => {
      const h1Element = screen.getByRole('heading');
      expect(h1Element).toBeInTheDocument();
    });
  });

  describe('When the component run the hook with errors', () => {
    beforeEach(() => {
      ApiCardRepository.prototype.getAll = jest
        .fn()
        .mockRejectedValueOnce(new Error('Get All Error'));
      render(<TestComponent></TestComponent>);
    });
    test('If we click button 1 error should send to console', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
    });
  });
});
