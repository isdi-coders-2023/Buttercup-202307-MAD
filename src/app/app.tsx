import { AppRoutes } from '../app.routes/app.routes';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { MenuOption } from '../types/menu.option';

export function App() {
  const menuOptions: MenuOption[] = [
    { path: '/home', label: 'Home' },
    { path: '/cards', label: 'Cards' },
    { path: '/card/:id', label: 'Card info' },
    { path: '/error', label: 'Error404' },
  ];
  return (
    <>
      <Header></Header>
      <AppRoutes options={menuOptions}></AppRoutes>
      <Footer></Footer>
    </>
  );
}
