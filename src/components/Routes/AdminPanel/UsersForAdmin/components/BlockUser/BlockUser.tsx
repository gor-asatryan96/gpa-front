import { Button, Popconfirm } from 'antd';
import axios from 'axios';
import { FC, useState } from 'react';
import { useMutation } from 'react-query';

import { IUser } from 'redux/reducers/serverConfigs/serverConfigs.types';

type PropTypes = {
  user: IUser;
  refetch: () => void;
};

const BlockUser: FC<PropTypes> = ({ user, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: () => {
      return axios.post('/admin/users/edit', {
        userId: user.id,
        data: { is_active: !user.is_active },
      });
    },
    mutationKey: String(user.id),
    onSuccess: () => {
      setIsModalOpen(false);
      refetch();
    },
  });

  return (
    <>
      <Popconfirm
        title='Are you sure?'
        open={isModalOpen}
        style={{ width: '5.7rem' }}
        onConfirm={() => mutation.mutate()}
        okButtonProps={{ loading: mutation.isLoading }}
        onCancel={() => setIsModalOpen(false)}>
        <Button
          style={{ marginRight: '1rem', width: '5.2rem' }}
          onClick={() => setIsModalOpen(true)}
          danger={user.is_active === 1}
          type='primary'>
          {user.is_active ? 'Block' : 'Unblock'}
        </Button>
      </Popconfirm>
      <Button style={{ width: '5.2rem' }}>Logout</Button>
    </>
  );
};

export default BlockUser;
