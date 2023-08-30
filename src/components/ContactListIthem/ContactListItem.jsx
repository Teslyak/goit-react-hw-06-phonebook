import React from 'react'
import { Button, Item, ItemName } from './ContactListItem.styled'
import propTypes  from 'prop-types'


export const ContactListItem = ({ item: { number, name }, onDeleteContact  }) => {
  return (
      <>
        <Item>
        <ItemName>{name}: {number}</ItemName>
        <Button type="button" onClick={onDeleteContact}>Delete</Button>
      </Item>
      
      </>
  )
}

ContactListItem.propTypes = {
  onDeleteContact: propTypes.func,
  item: propTypes.shape ({
  number: propTypes.string,
  name: propTypes.string,
  id: propTypes.string
    
  })
}