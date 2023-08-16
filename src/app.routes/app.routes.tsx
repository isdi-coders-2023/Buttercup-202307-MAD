import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuOption } from '../types/menu.option';

const HomePage = lazy(() => import('../components/home/home'));
const ErrorPage = lazy(() => import('../components/error/error'));
const CardsPage = lazy(() => import('../components/cards/cards'));

type Props = {
  options: MenuOption[];
};
export function AppRoutes({ options }: Props) {
  const paths = options.map((item) => item.path);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path={paths[0]} element={<HomePage></HomePage>}></Route>
        <Route path={paths[1]} element={<CardsPage></CardsPage>}></Route>
        <Route path={paths[2]} element={<ErrorPage></ErrorPage>}></Route>
        <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
    </Suspense>
  );
}
