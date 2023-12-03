import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page - currently work
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const LandingPage = Loadable(lazy(() => import('pages/extra-pages/LandingPage')));
const HomePage = Loadable(lazy(() => import('pages/extra-pages/HomePage')));
const UploadPage = Loadable(lazy(() => import('pages/extra-pages/UploadPage')));
const PurchasePage = Loadable(lazy(() => import('pages/extra-pages/PurchasePage')));
// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //
/* <MainRoutes/> is the main layout routing you see after login. */
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'landing-page',
      element: <LandingPage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'homepage',
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

export default MainRoutes;
