import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuOption } from '../types/menu.option';
import { AppRoutes } from './app.routes';

const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
jest.mock('../components/home/home', () => MockedHome);

const MockedTodo = jest.fn().mockReturnValue(<h1>Cards</h1>);
jest.mock('../components/cards/cards', () => MockedTodo);

const MockedAbout = jest.fn().mockReturnValue(<h1>ErrorPage</h1>);
jest.mock('../components/error/error', () => MockedAbout);

describe('Given the componente AppRoutes', () => {
  const optionsMock: MenuOption[] = [
    { path: '/home', label: 'Home' },
    { path: '/cards', label: 'Cards' },
    { path: '/error', label: 'Error404' },
  ];
  describe('When we render it with the route "/home"', () => {
    test('the component should render HomePage', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/home']} initialIndex={0}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });

      const element = screen.getByRole('heading', { name: 'Home' });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render it with the route "/cards"', () => {
    test('the component should render CardsPage', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/cards']} initialIndex={0}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });

      const element = screen.getByRole('heading', { name: 'Cards' });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render it with the route "/error"', () => {
    test('the component should render ErrorPage', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/error']} initialIndex={0}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });

      const element = screen.getByRole('heading', { name: 'ErrorPage' });
      expect(element).toBeInTheDocument();
    });
  });
});
