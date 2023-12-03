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
    //   id: 'icon',
    //   title: 'Icon',
    //   type: 'item',
    //   url: '/icons/ant',
    //   icon: icons.HomeOutlined,
    //   breadcrumbs: false
    // },
    {
      id: 'homepage',
      title: 'Home Page',
      type: 'item',
      url: '/homepage',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'upload',
      title: 'Upload',
      type: 'item',
      url: '/upload',
      icon: icons.UploadOutlined,
      breadcrumbs: false
    },
    {
      id: 'purchase',
      title: 'Purchase',
      type: 'item',
      url: '/purchase',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    },
  ]
};

export default utilities;
