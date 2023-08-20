import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <App></App>
      </Router>
    );
    test('the component should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
