import { ReactNode, useState } from 'react';
import { ContactsContext } from './ContactContext';
import { Contact } from '../models';

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[] | null>([]);
  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};
