import { Contact } from '@src/contacts/models';
import { api } from '@src/services/api';

export const getAllContactsService = async () => await api<Contact[]>('users');

export default {
  getAll: getAllContactsService,
};
