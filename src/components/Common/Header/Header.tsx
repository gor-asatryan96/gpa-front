import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useIsMobile } from '../../../helpers/hooks.helpers';
import { useAppDispatch } from '../../../redux/hooks/redux.hooks';
import {
  selectIsMenuSidebarOpen,
  toggleMenuSidebar,
} from '../../../redux/reducers/appConfigs/appConfigs.slice';
import NrgLogo from '../NrgLogo/NrgLogo';

import classes from './Header.module.scss';
import NotificationTrigger from './components/NotificationTrigger/NotificationTrigger';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = theme.useToken();
  const isMobile = useIsMobile();
  const isSidebarOpen = useSelector(selectIsMenuSidebarOpen);
  const TriggerIcon = isSidebarOpen ? MenuFoldOutlined : MenuUnfoldOutlined;

  const onTriggerClick = () => {
    dispatch(toggleMenuSidebar(!isSidebarOpen));
  };

  return (
    <Layout.Header
      style={{ background: token.colorBgContainer }}
      className={classes.root}>
      <div className={classes.headerActions}>
        <div className={classes.headerLeftActions}>
          <TriggerIcon className={classes.trigger} onClick={onTriggerClick} />
        </div>
        {isMobile && <NrgLogo />}
        <div className={classes.headerRightActions}>
          <NotificationTrigger isInSidebar={false} />
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
