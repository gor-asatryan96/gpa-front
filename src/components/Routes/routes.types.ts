import { MenuProps } from 'antd';
import { ReactNode } from 'react';

export type MenuItem = Required<MenuProps>['items'][number];

export enum IAclPath {
  // ADD YOUR PROJECT ACL PATHS HERE
  home = 'home',
  settings = 'settings',
  setting_account = 'settings.account',
  reports = 'reports',
  reports_sports = 'reports.sports',
  reports_casino = 'reports.casino',
  admin = 'admin',
}

export enum IRoutePath {
  // ADD YOUR PROJECT PATHS HERE
  home = '/',
  transactions = '/transactions',
  reports_sports = '/reports/sports',
  reports_casino = '/reports/casino',
  setting_account = '/setting/account',
  admin_for_users = '/admin/users',
  limits_daily = '/limits/daily',
  limits_individual = '/limits/individual',
}

export interface IMenuRoute {
  aclPath?: IAclPath; // protected if exist
  path?: IRoutePath;
  icon?: ReactNode;
  label?: string;
  element?: ReactNode;
  children?: IMenuRoute[];
}
