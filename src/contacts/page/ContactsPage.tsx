import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useFetch } from '@src/hooks/useFetch';
import contactsService from '@src/contacts/services';
import { Button, Typography, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import style from './Contacts.module.css';
import { TableContacts } from '../components/table/TableContacts';
import { searchInAttributes } from '@src/helpers/strings';
import { ContactsContext } from '../context';
import { ContactForm } from '../components/form/ContactForm';
const { Title, Paragraph } = Typography;
const { Search } = Input;

export const ContactsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { data, loading, fetchData } = useFetch(contactsService.getAll);
  const { loading: loadingDelete, fetchData: deleteContact } = useFetch(
    contactsService.delete
  );
  const { setContacts } = useContext(ContactsContext);
  const screens = useBreakpoint();

  useEffect(() => {
    fetchData().then((data) => setContacts(data));
  }, [fetchData, setContacts]);

  const handleOnSearch = (value: string | ChangeEvent<HTMLInputElement>) => {
    const textToSearch = typeof value === 'string' ? value : value.target.value;
    const contactsFiltered =
      data?.filter((contact) =>
        searchInAttributes(textToSearch, contact.name, contact.description)
      ) ?? [];
    setContacts(contactsFiltered);
  };

  const handleOnDelete = (id: number) => {
    deleteContact(id).then(() => {
      const contacts = data?.filter((contact) => contact.id !== id) ?? null;
      fetchData().then(() => setContacts(contacts));
    });
  };

  return (
    <div className={style.container}>
      <Title style={{ fontSize: screens.xs ? '1.5rem' : '2rem', margin: 0 }}>
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
        onClick={() => setShowForm(true)}
      >
        Agregar Contacto
      </Button>
      <Search placeholder='Buscar contacto' onChange={handleOnSearch} />
      <TableContacts
        onDelete={handleOnDelete}
        loading={loading || loadingDelete}
      />
      <ContactForm open={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};
