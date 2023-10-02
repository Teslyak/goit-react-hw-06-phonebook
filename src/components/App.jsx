import { useState, useEffect } from 'react';
import { AddContact } from './AddContact/AddContact'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { DivWrap } from './App.styled';
import { useSelector } from 'react-redux';

const initContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
export const App = () => {
  const [contacts, setContacts] = useState(initContacts)
  const [filter, setFilter] = useState('')
  const phoneBook = useSelector(state => state.phoneBook)
  

useEffect(() => {
   const contactList = localStorage.getItem('contact-list')
  if (contactList !== null) {
      setContacts(JSON.parse(contactList))
      }
}, [])

useEffect(() => {
 
localStorage.setItem('contact-list', JSON.stringify(phoneBook) )
  
}, [phoneBook])
  
  const addContact = contact => {
    const chekContact = contacts.some(el => {
     return el.name.trim() === contact.name.trim()  
    })
    
    if (chekContact) {
      alert(`${contact.name}  is already in contacts `)
      return
    }

    setContacts( [...contacts, contact])
  }

  
 const  handleFilter =  (evt) => {
    setFilter(evt.target.value) 

  }

  const getFilterText = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter((el) => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  }

  const handleDelete = id => {
   setContacts(contacts.filter(el =>el.id !== id)) 
   
}

   
    return (
      <DivWrap>
        <h1>Phonebook</h1>
        <AddContact addNewContact={addContact} /> 
        <h2>Contacts</h2>
        <Filter handleFilter={handleFilter} />
        <ContactList onDeleteContact={handleDelete} getFilterText={getFilterText()} />
      </DivWrap>
      
  )}
  


