import { useFetch } from '@src/hooks/useFetch';
import contactService from '@src/contacts/services';
import { Button, Drawer, Form, Input, Space } from 'antd';
import { useContext } from 'react';
import { ContactsContext } from '@src/contacts/context';
import { SubmitButton } from './SubmitButton';

interface Props {
  onClose: () => void;
  open: boolean;
}

export const ContactForm = ({ onClose, open }: Props) => {
  const { fetchData: sendContact } = useFetch(contactService.create);
  const { contacts, setContacts } = useContext(ContactsContext);
  const [form] = Form.useForm();
  const onSubmit = async () => {
    console.log('values', form.getFieldsValue());
    const result = await sendContact(form.getFieldsValue());
    if (result) {
      setContacts([result, ...(contacts ?? [])]);
      onClose();
    }
  };
  return (
    <Drawer
      title='Agregar nuevo Contacto'
      onClose={onClose}
      open={open}
      width={700}
      extra={
        <Space>
          <Button onClick={onClose}>Cancelar</Button>
          <SubmitButton form={form} onSubmit={onSubmit}>
            Guardar
          </SubmitButton>
        </Space>
      }
      style={{ backgroundColor: '#fafafa' }}
    >
      <Form form={form} layout='vertical' name='trigger' autoComplete='off'>
        <Form.Item
          name='photo'
          hasFeedback
          label='URL imagen de Perfil'
          style={{ fontWeight: 600 }}
          validateDebounce={1000}
          rules={[
            { required: true, message: 'Este campo es requerido' },
            { type: 'url', message: 'Debe ser una URL válida' },
          ]}
        >
          <Input placeholder='Inserte la URL de la imagen de perfil' />
        </Form.Item>

        <Form.Item
          name='name'
          hasFeedback
          label='Nombre'
          style={{ fontWeight: 600 }}
          rules={[
            { required: true, message: 'Este campo es requerido' },
            {
              min: 3,
            },
          ]}
        >
          <Input placeholder='Escriba el nombre del contacto' />
        </Form.Item>

        <Form.Item
          name='description'
          label='Descripción'
          style={{ fontWeight: 600 }}
        >
          <Input placeholder='Agregue la descripción del contacto' />
        </Form.Item>
      </Form>
    </Drawer>
  );
};
