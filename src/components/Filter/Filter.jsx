import React from 'react'
import { InputFilter, LableFilter } from './Filter.styled'
import propTypes from 'prop-types'

export const Filter = props => {
    const {handleFilter} = props
  return (
      <>
          <LableFilter>
              Find contact by name
              <InputFilter type="text"
                  onChange={handleFilter}
                  placeholder='Search by name'
></InputFilter>
           
           
     </LableFilter> 
    
     
      </>
  )
}

Filter.propTypes = {
    handleFilter: propTypes.func,
}

