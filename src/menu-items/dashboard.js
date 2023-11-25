// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Landing Page',
  type: 'group',
  children: [
    {
      id: 'landingpage',
      title: 'LandingPage',
      type: 'item',
      url: '/landing-page',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
