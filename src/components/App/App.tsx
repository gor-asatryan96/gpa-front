import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { useAppSideEffects } from 'hooks/app.hooks';

import {
  selectIsAuth,
  selectUserAcl,
} from '../../redux/reducers/serverConfigs/serverConfigs.slice';
import { getValidRoutes } from '../Routes';

const App: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const acl = useSelector(selectUserAcl);
  const routes = useRoutes(getValidRoutes(isAuth, acl));

  useAppSideEffects();

  return routes;
};

export default App;
