import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../../context/app.context.provider';
import Cards from './cards';

describe('Given the componente Home', () => {
  describe('When we render it', () => {
    const name = 'Name';
    render(
      <Router>
        <AppContextProvider>
          <Cards></Cards>
        </AppContextProvider>
      </Router>
    );
    test('the component should be in the document', () => {
      const element = screen.getByText(name);
      expect(element).toBeInTheDocument();
    });
  });
});
