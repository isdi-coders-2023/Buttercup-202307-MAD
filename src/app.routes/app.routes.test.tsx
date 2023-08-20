import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuOption } from '../types/menu.option';
import { AppRoutes } from './app.routes';

const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
jest.mock('../components/home/home', () => MockedHome);

const MockedCards = jest.fn().mockReturnValue(<h1>Cards</h1>);
jest.mock('../components/cards/cards', () => MockedCards);

const MockedDetails = jest.fn().mockReturnValue(<h1>Info</h1>);
jest.mock('../components/details/details', () => MockedDetails);

const MockedError = jest.fn().mockReturnValue(<h1>ErrorPage</h1>);
jest.mock('../components/error/error', () => MockedError);

describe('Given the componente AppRoutes', () => {
  const optionsMock: MenuOption[] = [
    { path: '/home', label: 'Home' },
    { path: '/cards', label: 'Cards' },
    { path: '/card/:id', label: 'Info' },
    { path: '/mmwebo', label: 'ErrorPage' },
  ];
  const listPaths = (number: number) => {
    render(
      <Router
        initialEntries={['/home', '/cards', '/card/:id', '/*']}
        initialIndex={number}
      >
        <AppRoutes options={optionsMock}></AppRoutes>
      </Router>
    );
  };
  describe('When we render it with the route "/home"', () => {
    test('the component should render Home', async () => {
      await waitFor(async () => listPaths(0));
      const element = screen.getByText('Home');
      expect(element).toBeInTheDocument();
    });
    test('The Cards should be shown by the component', async () => {
      await waitFor(async () => listPaths(1));
      const element = screen.getByText('Cards');
      expect(element).toBeInTheDocument();
    });
    test('The Cards should be shown by the component', async () => {
      await waitFor(async () => listPaths(2));
      const element = screen.getByText('Info');
      expect(element).toBeInTheDocument();
    });
    test('The component should display the ErrorPage', async () => {
      await waitFor(async () => listPaths(3));
      const element = screen.getByText('ErrorPage');
      expect(element).toBeInTheDocument();
    });
  });
});
