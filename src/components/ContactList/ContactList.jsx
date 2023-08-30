import { ContactListItem } from 'components/ContactListIthem/ContactListItem'
import React from 'react'
import propTypes from 'prop-types'

export const ContactList = (props) => {
   
    return (
        <>   
        <ul>
            {props.getFilterText.map(el => (
                <ContactListItem onDeleteContact={() => props.onDeleteContact(el.id)} item={el} key={el.id}  />
            ))}
            </ul>
        </>
   )
 
}

ContactList.propTypes = {
    onDeleteContact: propTypes.func,
    getFilterText: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        number: propTypes.string
    })).isRequired
 }
