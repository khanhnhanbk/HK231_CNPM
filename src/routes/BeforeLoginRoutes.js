import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import SimpleLayout from 'layout/SimpleLayout';

const LandingPage = Loadable(lazy(() => import('pages/extra-pages/LandingPage')));

const BeforeLoginRoutes = {
  path: '/',
  element: <SimpleLayout />,
  children: [
    {
      path: '/',
      element: <LandingPage />
    },

  ]
};

export default BeforeLoginRoutes;
