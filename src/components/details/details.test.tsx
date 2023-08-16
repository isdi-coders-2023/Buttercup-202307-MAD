import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Details } from './details';

describe('Given the componente Details', () => {
  describe('When we render it', () => {
    render(<Details></Details>);
    test('the component should be in the document', () => {
      const element = screen.getByAltText('Card detail');
      expect(element).toBeInTheDocument();
    });
  });
});
