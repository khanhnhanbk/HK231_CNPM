// assets
import { ChromeOutlined, QuestionOutlined, MessageOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  MessageOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'contact',
      title: 'Contact SPSO',
      type: 'item',
      url: '/sample-page',
      icon: icons.MessageOutlined
    },
  ]
};

export default support;
