import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

jest.mock('../menu/menu');

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(<Header></Header>);
    test('the component should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
