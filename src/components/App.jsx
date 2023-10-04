import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { DivWrap } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts } from './Redux/contactsSlice';
import { getFilter } from './Redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addContact = contact => {
    const chekContact = contacts.some(el => {
      return el.name.trim() === contact.name.trim();
    });

    if (chekContact) {
      alert(`${contact.name}  is already in contacts `);
      return;
    }

    dispatch(addContacts(contact));
  };

  const handleFilter = evt => {
    dispatch(getFilter(evt.target.value));
  };

  const getFilterText = () => {
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <DivWrap>
      <h1>Phonebook</h1>
      <AddContact addNewContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList
        onDeleteContact={handleDelete}
        getFilterText={getFilterText()}
      />
    </DivWrap>
  );
};
