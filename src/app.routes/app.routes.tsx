import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../types/menu.option';

const HomePage = lazy(() => import('../components/home/home'));
const CardsPage = lazy(() => import('../components/cards/cards'));
const DetailsPage = lazy(() => import('../components/details/details'));
const ErrorPage = lazy(() => import('../components/error/error'));

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
        <Route path={paths[2]} element={<DetailsPage></DetailsPage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
