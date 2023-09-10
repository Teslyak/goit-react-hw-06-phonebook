import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormAddContact, InputAddContact, LabelAddContact, LabelAddContactTel, ButtonAddContact } from './AddContact.styled';
import propTypes from 'prop-types'

export const AddContact = ({ addNewContact}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    const handelChangeInput = (e) => {
        switch (e.target.name) {
        case 'name' :
        return setName(e.currentTarget.value)
        case 'number':
        return setNumber(e.currentTarget.value) 
        default :
        }
    }
    const handleAddInList = (e) => {
        e.preventDefault();
        addNewContact({ id: nanoid(5), name, number });
        setName('')
        setNumber('')
    }
        return (
            <>
    <FormAddContact onSubmit={handleAddInList}> 
   <LabelAddContact>Name:
    <InputAddContact
    type="text"
    name="name"
    onChange={handelChangeInput}
    pattern= "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  value={name}
                  placeholder='Name'
    required
          />
    </LabelAddContact>
                    
    <LabelAddContactTel>Number:
    <InputAddContact
    type="tel"
    name="number"
    onChange={handelChangeInput}
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  value={number}
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



