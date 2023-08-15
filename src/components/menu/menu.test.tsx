import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Menu } from './menu';

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(<Menu></Menu>);
    test('the component should be in the document', () => {
      const element = screen.getByText('Create');
      expect(element).toBeInTheDocument();
    });
  });
});
