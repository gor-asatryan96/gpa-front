import { Navigate } from 'react-router-dom';
import {
  AimOutlined,
  GifOutlined,
  HomeOutlined,
  QqOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import AuthLayout from '../Layouts/AuthLayout/AuthLayout';

import ChangePassword from './ChangePassword/ChangePassword';
import Login from './Login/Login';
import Settings from './Settings/Settings';
import { IAclPath, IRoutePath, IMenuRoute } from './routes.types';
import Home from './Home/Home';
import { PasswordChangeNeedRestrict } from './routes.restricts';
import CasinoReports from './Reports/CasinoReports/CasinoReports';
import SportReports from './Reports/SportReports/SportReports';

import type { RouteObject } from 'react-router-dom';

export const LOGOUT_ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/login' />,
      },
      {
        path: '/login',
        element: (
          <PasswordChangeNeedRestrict isPasswordPage={false}>
            <Login />
          </PasswordChangeNeedRestrict>
        ),
      },
      {
        path: '/change-password',
        element: (
          <PasswordChangeNeedRestrict isPasswordPage>
            <ChangePassword />
          </PasswordChangeNeedRestrict>
        ),
      },
      {
        path: '*',
        element: <Navigate to='/login' />,
      },
    ],
  },
];

export const MENU_ROUTES: IMenuRoute[] = [
  {
    path: IRoutePath.home,
    icon: <HomeOutlined />,
    label: 'Home',
    element: <Home />,
  },
  {
    aclPath: IAclPath.reports,
    icon: <GifOutlined />,
    label: 'Reports',
    children: [
      {
        path: IRoutePath.reports_sports,
        aclPath: IAclPath.reports_sports,
        icon: <QqOutlined />,
        label: 'Sport',
        element: <SportReports />,
      },
      {
        path: IRoutePath.reports_casino,
        aclPath: IAclPath.reports_casino,
        icon: <AimOutlined />,
        label: 'Casino',
        element: <CasinoReports />,
      },
    ],
  },
  {
    aclPath: IAclPath.settings,
    icon: <SettingOutlined />,
    label: 'Settings',
    children: [
      {
        path: IRoutePath.setting_account,
        aclPath: IAclPath.setting_account,
        icon: <UserOutlined />,
        label: 'Account',
        element: <Settings />,
      },
    ],
  },
];