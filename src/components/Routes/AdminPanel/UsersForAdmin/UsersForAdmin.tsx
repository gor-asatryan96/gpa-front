import React, { useState } from 'react';
import { Badge, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { useQuery } from 'react-query';

import { IUser } from 'redux/reducers/serverConfigs/serverConfigs.types';

import BlockUser from './components/BlockUser/BlockUser';

type UserStatus = 'blocked' | 'online' | 'offline';

enum Statuses {
  online = 'success',
  offline = 'default',
  blocked = 'error',
}

async function FetchUsers() {
  const { data } = await axios.post('/admin/users/list');
  return data.users;
}
const App: React.FC = () => {
  const [page, setPage] = useState(1);

  const queryData = useQuery(['users/list', page], () => FetchUsers());
  const allTotal = queryData.data?.length;

  const pageChanger = (currentPage: number) => {
    setPage(currentPage);
  };

  const columns: ColumnsType<IUser> = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      fixed: true,
      width: 120,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 100,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (a: UserStatus) => {
        return <Badge status={Statuses[a]} text={a} />;
      },
      width: 80,
    },
    {
      title: 'Last visit',
      dataIndex: 'lastVisit',
      key: 'lastVisit',
      render: (_, data) => <div>{data.meta?.last_action_at}</div>,
      width: 100,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, data) => (
        <Space>
          <BlockUser user={data} refetch={queryData.refetch} />
        </Space>
      ),
      width: 170,
    },
  ];
  return (
    <Table
      rowKey='id'
      columns={columns}
      dataSource={queryData.data}
      scroll={{ x: true }}
      loading={queryData.isLoading}
      pagination={{
        position: ['bottomCenter'],
        onChange(currentPage) {
          pageChanger(currentPage);
        },
        total: allTotal,
      }}
    />
  );
};

export default App;
