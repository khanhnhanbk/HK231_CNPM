import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import StudentRoutes from './StudentRoutes';
import SPSORoutes from './SPSORoutes';
import BeforeLoginRoutes from './BeforeLoginRoutes';

export default function ThemeRoutes() {
  const token = localStorage.getItem('token');
  let router = []
  if (token) {
    const role = localStorage.getItem('role');
    if (role === 'student') {
      router = [StudentRoutes, MainRoutes, LoginRoutes,]
    }
    else {
      router = [SPSORoutes, MainRoutes, LoginRoutes,]
    }
  }
  else {
    router = [BeforeLoginRoutes, LoginRoutes]
  }
  return useRoutes(router);
}
