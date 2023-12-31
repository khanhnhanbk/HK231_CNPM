import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const LandingPage = Loadable(lazy(() => import('pages/extra-pages/LandingPage')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <LandingPage />
    },

  ]
};

export default MainRoutes;
