import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../../context/app.context.provider';
import Home from './home';

describe('Given the componente Home', () => {
  describe('When we render it', () => {
    const title = 'The Lord of the Rings: The Card Game';
    render(
      <Router>
        <AppContextProvider>
          <Home></Home>
        </AppContextProvider>
      </Router>
    );
    test('the component should be in the document', () => {
      const element = screen.getByText(title);
      expect(element).toBeInTheDocument();
    });
  });
});
