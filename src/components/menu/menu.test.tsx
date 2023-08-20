import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from './menu';

describe('Given the componente Menu', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <Menu></Menu>
      </MemoryRouter>
    );
    test('the component should be in the document', () => {
      const element = screen.getByText('Cards');
      expect(element).toBeInTheDocument();
    });
  });
  describe('Menu', () => {
    test('should toggle menu visibility when menu button is clicked', () => {
      render(
        <MemoryRouter>
          <Menu></Menu>
        </MemoryRouter>
      );
      const Button = screen.getByAltText('');
      const home = screen.getByText('Home');
      expect(home).toBeVisible();
      fireEvent.click(Button);
      expect(home).toBeVisible();
      fireEvent.click(Button);
      expect(home).toBeVisible();
    });
  });
});
