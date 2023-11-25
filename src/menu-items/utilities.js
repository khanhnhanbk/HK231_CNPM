// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  HomeOutlined,
  UploadOutlined,
  DollarOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  UploadOutlined,
  DollarOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    // {
    //   id: 'util-typography',
    //   title: 'Typography',
    //   type: 'item',
    //   url: '/typography',
    //   icon: icons.FontSizeOutlined
    // },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/color',
    //   icon: icons.BgColorsOutlined
    // },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.BarcodeOutlined
    // },
    // {
    //   id: 'ant-icons',
    //   title: 'Ant Icons',
    //   type: 'item',
    //   url: '/icons/ant',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: false
    // }
    {
      id: 'homepage',
      title: 'Home Page',
      type: 'item',
      url: '/icons/ant',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'upload',
      title: 'Upload',
      type: 'item',
      url: '/icons/ant',
      icon: icons.UploadOutlined,
      breadcrumbs: false
    },
    {
      id: 'purchase',
      title: 'Purchase',
      type: 'item',
      url: '/icons/ant',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    },
  ]
};

export default utilities;
