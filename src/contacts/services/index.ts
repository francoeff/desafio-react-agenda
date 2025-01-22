import { Contact } from '@src/contacts/models';
import { api } from '@src/services/api';

const getAllContactsService = async () => await api<Contact[]>('users');
const createContactService = async (contact: Contact) =>
  await api<Contact>('users', {
    method: 'POST',
    body: JSON.stringify(contact),
  });

export default {
  getAll: getAllContactsService,
  create: createContactService,
};
