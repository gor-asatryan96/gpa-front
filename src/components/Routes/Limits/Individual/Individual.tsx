import { PlusOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import { FC } from 'react';

const Individual: FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Individual Limits</h3>
        <Button type='primary'>
          <PlusOutlined />
        </Button>
      </div>
      <Table>
        <ColumnGroup title='Players'>
          <Column title='Player ID' dataIndex='firstName' key='firstName' />
          <Column title='Phone Number' dataIndex='lastName' key='lastName' />
          <Column title='Individual Limit' dataIndex='lastName' key='l' />
          <Column title='Edit' dataIndex='lastName' key='lastName' />
        </ColumnGroup>
      </Table>
    </div>
  );
};

export default Individual;
