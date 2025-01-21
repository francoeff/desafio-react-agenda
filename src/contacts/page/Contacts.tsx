import { ChangeEvent, useEffect, useState } from 'react';
import { useFetch } from '@src/hooks/useFetch';
import contactsService from '@src/contacts/services';
import { Button, Typography, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './Contacts.module.css';
import { TableContacts } from '../components/table-contacts/TableContacts';
import { Contact } from '../models';
import { searchInAttributes } from '@src/helpers/strings';
const { Title, Paragraph } = Typography;
const { Search } = Input;

export const Contacts = () => {
  const { data, loading, fetchData } = useFetch(contactsService.getAll);
  const [contacts, setContacts] = useState<Contact[] | null>(data);
  useEffect(() => {
    fetchData().then((data) => setContacts(data));
  }, [fetchData]);

  const handleOnSearch = (value: string | ChangeEvent<HTMLInputElement>) => {
    const text = typeof value === 'string' ? value : value.target.value;
    const contactsFiltered =
      data?.filter((contact) =>
        searchInAttributes(text, contact.name, contact.description)
      ) ?? [];
    setContacts(contactsFiltered);
  };

  return (
    <div className={style.container}>
      <Title style={{ fontSize: '2rem', margin: 0 }}>
        Agenda Previred - Mi agenda de contactos laboral
        <Paragraph style={{ fontWeight: 'normal', margin: '.5rem 0 0 0' }}>
          Aquí podrá encontrar o buscar a todos sus contactos agregados, agregar
          nuevos contactos y eliminar contactos no deseados.
        </Paragraph>
      </Title>

      <Button
        icon={<PlusOutlined />}
        type='primary'
        style={{ width: 'fit-content' }}
      >
        Agregar Contacto
      </Button>
      <Search placeholder='Buscar contacto' onChange={handleOnSearch} />
      <TableContacts data={contacts} onDelete={() => {}} loading={loading} />
    </div>
  );
};
