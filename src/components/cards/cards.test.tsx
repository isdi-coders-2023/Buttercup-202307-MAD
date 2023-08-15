import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Cards } from './cards';

describe('Given the component Cards', () => {
  describe('When we render it', () => {
    render(<Cards></Cards>);
    test('the component should be in the document', () => {
      const element = screen.getByText('Name');
      expect(element).toBeInTheDocument();
    });
  });
});
