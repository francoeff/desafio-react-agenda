import { createContext } from 'react';
import { Contact } from '../models';

interface ContactsContextType {
  contacts: Contact[] | null;
  setContacts: (contacts: Contact[] | null) => void;
}

export const ContactsContext = createContext<ContactsContextType>({
  contacts: [],
  setContacts: () => {},
});
