import { Navigate } from 'react-router-dom';
import {
  AimOutlined,
  ApartmentOutlined,
  CalendarOutlined,
  DeploymentUnitOutlined,
  GifOutlined,
  HomeOutlined,
  QqOutlined,
  SettingOutlined,
  TeamOutlined,
  TransactionOutlined,
  UserOutlined,
} from '@ant-design/icons';

import AuthLayout from '../Layouts/AuthLayout/AuthLayout';
import i18n from '../../assets/translations';

import ChangePassword from './ChangePassword/ChangePassword';
import Login from './Login/Login';
import Settings from './Settings/Settings';
import { IAclPath, IRoutePath, IMenuRoute } from './routes.types';
import Home from './Home/Home';
import { PasswordChangeNeedRestrict } from './routes.restricts';
import CasinoReports from './Reports/CasinoReports/CasinoReports';
import SportReports from './Reports/SportReports/SportReports';
import UsersForAdmin from './AdminPanel/UsersForAdmin/UsersForAdmin';
import Transactions from './Transactions/Transactions';
// import Daily from './Limits/Daily/Daily';
import Individual from './Limits/Individual/Individual';

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
        path: '/create-password',
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
    label: i18n.t('Home'),
    element: <Home />,
  },
  {
    path: IRoutePath.transactions,
    icon: <TransactionOutlined />,
    label: i18n.t('Transactions'),
    element: <Transactions />,
  },
  {
    icon: <CalendarOutlined />,
    label: i18n.t('Limits'),
    children: [
      // {
      //   path: IRoutePath.limits_daily,
      //   icon: <CalendarOutlined />,
      //   label: i18n.t('Daily'),
      //   element: <Daily />,
      // },
      {
        path: IRoutePath.limits_individual,
        icon: <ApartmentOutlined />,
        label: i18n.t('Individual'),
        element: <Individual />,
      },
    ],
  },
  {
    aclPath: IAclPath.reports,
    icon: <GifOutlined />,
    label: i18n.t('Reports'),
    children: [
      {
        path: IRoutePath.reports_sports,
        aclPath: IAclPath.reports_sports,
        icon: <QqOutlined />,
        label: i18n.t('Sport'),
        element: <SportReports />,
      },
      {
        path: IRoutePath.reports_casino,
        aclPath: IAclPath.reports_casino,
        icon: <AimOutlined />,
        label: i18n.t('Casino'),
        element: <CasinoReports />,
      },
    ],
  },
  {
    // aclPath: IAclPath.admin,
    icon: <DeploymentUnitOutlined />,
    label: i18n.t('Admin Panel'),
    children: [
      {
        path: IRoutePath.admin_for_users,
        icon: <TeamOutlined />,
        label: i18n.t('Users'),
        element: <UsersForAdmin />,
      },
    ],
  },
  {
    icon: <SettingOutlined />,
    label: i18n.t('Settings'),
    children: [
      {
        path: IRoutePath.setting_account,
        icon: <UserOutlined />,
        label: i18n.t('Account'),
        element: <Settings />,
      },
    ],
  },
];
