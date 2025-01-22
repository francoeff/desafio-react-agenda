import { Contact } from '@src/contacts/models';
import { Avatar, Button, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { useContext, useMemo } from 'react';
import { ContactsContext } from '@src/contacts/context';

interface Props {
  onDelete: (id: number) => void;
  loading: boolean;
}

export const TableContacts = ({ onDelete, loading }: Props) => {
  const { contacts } = useContext(ContactsContext);
  const columns: TableProps<Contact>['columns'] = useMemo(
    () => [
      {
        title: 'Nombre',
        dataIndex: 'name',
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
      },
      {
        title: 'Acciones',
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
      dataSource={contacts ?? undefined}
      loading={loading}
      rowKey={(contact) => contact.id}
    />
  );
};
