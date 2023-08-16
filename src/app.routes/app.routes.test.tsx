import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
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
  const listPaths = (number: number) => {
    render(
      <Router
        initialEntries={['/home', '/cards', '/error']}
        initialIndex={number}
      >
        <AppRoutes options={optionsMock}></AppRoutes>
      </Router>
    );
  };
  describe('When we render it with the route "/home"', () => {
    test('the component should render HomePage', async () => {
      await waitFor(async () => listPaths(0));
      const element = screen.getByRole('heading', { name: 'Home' });
      expect(element).toBeInTheDocument();
    });
    test('The Cards should be shown by the component', async () => {
      await waitFor(async () => listPaths(1));
      const element = screen.getByRole('heading', { name: 'Cards' });
      expect(element).toBeInTheDocument();
    });
    test('The component should display the "error route"', async () => {
      await waitFor(async () => listPaths(2));
      const element = screen.getByRole('heading', { name: 'ErrorPage' });
      expect(element).toBeInTheDocument();
    });
  });
});
