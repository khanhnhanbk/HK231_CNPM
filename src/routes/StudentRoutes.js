import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const HomePage = Loadable(lazy(() => import('pages/extra-pages/HomePage')));
const UploadPage = Loadable(lazy(() => import('pages/extra-pages/UploadPage')));
const PurchasePage = Loadable(lazy(() => import('pages/extra-pages/PurchasePage')));
const DetailRequest = Loadable(lazy(() => import('pages/extra-pages/DetailRequest')));
const ConfigRequest = Loadable(lazy(() => import('pages/extra-pages/ConfigRequest')));

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
    {
      path: 'request/:rid',
      element: <DetailRequest />
    },
    {
      path: 'request/:rid/config',
      element: <ConfigRequest />
    }
  ]
};

export default StudentRoutes;
