import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddContact, InputAddContact, LabelAddContact, LabelAddContactTel, ButtonAddContact } from './AddContact.styled';





export class AddContact extends Component  {
state = {
name: '',
number: ''
}


    handelChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.currentTarget.value
        })
    }
    
    handleAddInList = (e) => {
    e.preventDefault();
    this.props.addNewContact({ id: nanoid(5), ...this.state });
    this.setState({
    name: '',
    number: ''
    });

    }

    render() {
        
        return (
            <>
    <FormAddContact onSubmit={this.handleAddInList}> 
   <LabelAddContact>Name:
    <InputAddContact
    type="text"
    name="name"
    onChange={this.handelChangeInput}
    pattern= "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  value={this.state.name}
                  placeholder='Name'
    required
          />
    </LabelAddContact>
                    
    <LabelAddContactTel>Number:
    <InputAddContact
    type="tel"
    name="number"
    onChange={this.handelChangeInput}
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  value={this.state.number}
                  placeholder='Number'
  required
/>
                        
</LabelAddContactTel>
          <ButtonAddContact type="submit" >Add contact</ButtonAddContact>  
        </FormAddContact> 
           
            </>

        )
}

}



