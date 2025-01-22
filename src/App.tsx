import { ContactsProvider } from './contacts/context';
import { Contacts } from './contacts/page';

function App() {
  return (
    <ContactsProvider>
      <Contacts />
    </ContactsProvider>
  );
}

export default App;
