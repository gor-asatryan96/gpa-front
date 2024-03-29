import { IAclPath } from 'components/Routes/routes.types';

export type UserToken = string;
export type IAcl = IAclPath[];
export type TLocal = 'EN';
export type TRole = 'SUPER_ADMIN' | 'USER';

export interface IUser {
  id: number | null;
  username: string;
  token: UserToken;
  acl: IAcl;
  email: string;
  is_active: 0 | 1;
  is_sp_reset: 0 | 1;
  is_twofa_enabled: 0 | 1;
  locale: TLocal;
  role: TRole;
  timezone: string;
  created_at: string;
  updated_at: string;
  sp_updated_at: string;
  meta: IMeta;
}

export interface IMeta {
  last_action_at: string;
}
export interface IServerConfigs {
  isConnected: boolean;
  isLoading: boolean;
  isProfileChangeLoading: boolean;
  isNewProfile: boolean;
  user: IUser;
}

export interface ILoginForm {
  username: string;
  password: string;
  tft?: string;
  isRemember?: boolean;
}

export interface ICreatePassword {
  oldPassword?: string;
  password: string;
  passwordConfirm: string;
  tft?: string;
}
