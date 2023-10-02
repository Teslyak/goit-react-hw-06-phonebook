import { nanoid } from 'nanoid';
import { FormAddContact, InputAddContact, LabelAddContact, LabelAddContactTel, ButtonAddContact } from './AddContact.styled';
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { addContacts } from 'components/Redux/phoneBookSlice';
import { useSelector } from 'react-redux';

export const AddContact = ({ addNewContact }) => {
    const dispatch = useDispatch(); 
    const phoneBook = useSelector(state => state.phoneBook)

    const handleAddInList = (e) => {        
        e.preventDefault(); 
        console.dir(e.target.elements);
        const newContact = {
            id: nanoid(5),
            name: e.target.elements.name.value,
            number : e.target.elements.number.value
        }
        const chekContact = phoneBook.some(el => {             
             return el.name.trim() === newContact.name.trim()      
        })
         if (chekContact) {
      alert(`${newContact.name}  is already in contacts `)
      return
    }
        dispatch(addContacts(newContact))

    }
    return (            
        <>            
            <FormAddContact onSubmit={handleAddInList}>                
                <LabelAddContact>Name:                    
                        <InputAddContact                            
                            type="text"
                            name="name"                           
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            
                            placeholder='Name'                            
                            required                            
                        />                        
                    </LabelAddContact>                           
                    <LabelAddContactTel>Number:
                        
                        <InputAddContact                            
                            type="tel"                            
                            name="number"                                                                          
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"                            
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"                                                                         
                            placeholder='Number'                            
                            required                            
                        />                        
                    </LabelAddContactTel>                    
                    <ButtonAddContact type="submit" >Add contact</ButtonAddContact>                      
                </FormAddContact>                            
            </>            
        )
}


AddContact.propTypes = {
addNewContact: propTypes.func
}



