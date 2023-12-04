import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const HomePage = Loadable(lazy(() => import('pages/extra-pages/SPSOHomePage')));

const SPSORoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },

  ]
};

export default SPSORoutes;
