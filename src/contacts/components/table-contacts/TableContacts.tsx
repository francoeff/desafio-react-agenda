import { Contact } from '@src/contacts/models';
import { Avatar, Button, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

interface Props {
  data: Contact[] | null;
  onDelete: (id: number) => void;
  loading: boolean;
}

export const TableContacts = ({ data, onDelete, loading }: Props) => {
  const columns: TableProps<Contact>['columns'] = useMemo(
    () => [
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: (_, contact) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size='large' icon={<UserOutlined />} src={contact.photo} />
            <span style={{ marginLeft: '1rem' }}>{contact.name}</span>
          </div>
        ),
      },
      {
        title: 'Descripción',
        dataIndex: 'description',
        key: 'age',
      },
      {
        title: 'Acciones',
        key: 'actions',
        render: (_, contact) => (
          <Button
            type='text'
            size='large'
            onClick={() => onDelete(contact.id)}
            icon={<DeleteOutlined />}
          />
        ),
      },
    ],
    [onDelete]
  );
  return (
    <Table<Contact>
      columns={columns}
      dataSource={data ?? undefined}
      loading={loading}
    />
  );
};
