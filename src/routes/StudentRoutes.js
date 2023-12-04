import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const HomePage = Loadable(lazy(() => import('pages/extra-pages/HomePage')));
const UploadPage = Loadable(lazy(() => import('pages/extra-pages/UploadPage')));
const PurchasePage = Loadable(lazy(() => import('pages/extra-pages/PurchasePage')));

const StudentRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'upload',
      element: <UploadPage />
    },
    {
      path: 'purchase',
      element: <PurchasePage />
    },
  ]
};

export default StudentRoutes;
