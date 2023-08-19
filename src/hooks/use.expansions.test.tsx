import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApiExpansionRepository } from '../services/api.expansion.repository';
import { useExpansions } from './use.expansions';

describe('Given custom hook useExpansions', () => {
  function TestComponent() {
    const { expansions, loadExpansions } = useExpansions();
    return (
      <>
        <h1>Test Component</h1>
        <button role="button" onClick={() => loadExpansions()}>
          1
        </button>
        <p>Element 1 ID: {expansions![0]?.id}</p>
      </>
    );
  }
  describe('When the component run the hook', () => {
    beforeEach(() => {
      ApiExpansionRepository.prototype.getAll = jest.fn();
      render(<TestComponent></TestComponent>);
    });

    test('The component should be in the document', () => {
      const h1Element = screen.getByRole('heading');
      expect(h1Element).toBeInTheDocument();
    });
  });

  describe('When the component run the hook with errors', () => {
    beforeEach(() => {
      ApiExpansionRepository.prototype.getAll = jest
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
