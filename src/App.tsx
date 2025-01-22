import { ContactsProvider } from './contacts/context';
import { ContactsPage } from './contacts/page';

function App() {
  return (
    <ContactsProvider>
      <ContactsPage />
    </ContactsProvider>
  );
}

export default App;
