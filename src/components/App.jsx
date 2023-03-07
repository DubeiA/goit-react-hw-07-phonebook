import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <div>
      <h2>Phonebook</h2>

      <ContactForm />

      <h3>Contacts</h3>

      <Filter />

      <ContactList />
    </div>
  );
}
