import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Menu } from './menu';

describe('Given the componente Menu', () => {
  describe('When we render it', () => {
    render(<Menu></Menu>);
    test('the component should be in the document', () => {
      const element = screen.getByText('Create');
      expect(element).toBeInTheDocument();
    });
  });
  describe('Menu', () => {
    test('should toggle menu visibility when menu button is clicked', () => {
      const { getByAltText, getByText } = render(<Menu />);
      const Button = getByAltText('');
      const home = getByText('Home');
      expect(home).toBeVisible();
      fireEvent.click(Button);
      expect(home).toBeVisible();
      fireEvent.click(Button);
      expect(home).toBeVisible();
    });
  });
});
